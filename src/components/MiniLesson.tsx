import { useEffect, useState } from "react";
import { X, Check, ArrowRight, Sparkles, RotateCcw } from "lucide-react";

type Question = {
  emoji: string;
  prompt: string;
  answer: string;
  options: string[];
};

const QUESTIONS: Question[] = [
  { emoji: "🚀", prompt: "Что это?", answer: "rocket", options: ["rocket", "apple", "tree"] },
  { emoji: "🦕", prompt: "Что это?", answer: "dinosaur", options: ["cat", "dinosaur", "car"] },
  { emoji: "🐱", prompt: "Что это?", answer: "cat", options: ["dog", "fish", "cat"] },
  { emoji: "🍎", prompt: "Что это?", answer: "apple", options: ["apple", "banana", "rocket"] },
  { emoji: "🌳", prompt: "Что это?", answer: "tree", options: ["star", "tree", "moon"] },
];

export const LESSON_EVENT = "vista:start-lesson";

export function MiniLesson() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [correct, setCorrect] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const handler = () => {
      setOpen(true);
      setStep(0);
      setPicked(null);
      setCorrect(0);
      setDone(false);
    };
    window.addEventListener(LESSON_EVENT, handler);
    return () => window.removeEventListener(LESSON_EVENT, handler);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  const total = QUESTIONS.length;
  const q = QUESTIONS[step];
  const progress = done ? 100 : Math.round((step / total) * 100);

  const pick = (opt: string) => {
    if (picked) return;
    setPicked(opt);
    if (opt === q.answer) setCorrect((c) => c + 1);
  };

  const next = () => {
    if (step + 1 >= total) {
      setDone(true);
    } else {
      setStep((s) => s + 1);
      setPicked(null);
    }
  };

  const restart = () => {
    setStep(0);
    setPicked(null);
    setCorrect(0);
    setDone(false);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Мини-урок английского"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/40 px-4 py-8 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) setOpen(false);
      }}
    >
      <div className="relative w-full max-w-xl rounded-[2rem] border border-border bg-card p-6 shadow-[var(--shadow-soft)] md:p-10">
        <button
          onClick={() => setOpen(false)}
          aria-label="Закрыть"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:text-foreground"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
          <Sparkles className="h-3.5 w-3.5" />
          {done ? "Готово!" : `Мини-урок · английский`}
        </div>

        <div className="mt-4 flex items-center justify-between text-sm font-medium text-muted-foreground">
          <span>{done ? "Завершено" : `Шаг ${step + 1} из ${total}`}</span>
          <span>{progress}%</span>
        </div>
        <div className="mt-2 h-3 overflow-hidden rounded-full bg-secondary">
          <div
            className="h-full rounded-full bg-primary transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>

        {!done ? (
          <>
            <div className="mt-8 rounded-3xl bg-accent/60 p-8 text-center">
              <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                {q.prompt}
              </div>
              <div className="mt-3 font-display text-7xl leading-none" aria-hidden>
                {q.emoji}
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {q.options.map((opt) => {
                const isPicked = picked === opt;
                const isAnswer = opt === q.answer;
                const reveal = picked !== null;
                const cls = !reveal
                  ? "border-border bg-card hover:bg-secondary"
                  : isAnswer
                    ? "border-primary bg-primary text-primary-foreground"
                    : isPicked
                      ? "border-destructive/40 bg-destructive/10 text-foreground"
                      : "border-border bg-card opacity-60";
                return (
                  <button
                    key={opt}
                    onClick={() => pick(opt)}
                    disabled={picked !== null}
                    className={`rounded-2xl border px-4 py-4 text-base font-semibold transition ${cls}`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>

            <div className="mt-6 flex min-h-[44px] items-center justify-between gap-3">
              <div className="text-sm font-medium text-muted-foreground">
                {picked === null
                  ? "Выбери правильный вариант 💜"
                  : picked === q.answer
                    ? "Отлично! Так держать."
                    : `Правильный ответ: ${q.answer}`}
              </div>
              {picked !== null && (
                <button
                  onClick={next}
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)]"
                >
                  {step + 1 >= total ? "Завершить" : "Дальше"}
                  <ArrowRight className="h-4 w-4" />
                </button>
              )}
            </div>
          </>
        ) : (
          <div className="mt-8 text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/15 text-primary">
              <Check className="h-10 w-10" />
            </div>
            <h3 className="mt-5 font-display text-2xl font-bold">
              Молодец! Урок завершён 🎉
            </h3>
            <p className="mt-2 text-muted-foreground">
              Правильных ответов: <span className="font-semibold text-foreground">{correct}</span> из {total}
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <button
                onClick={restart}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-semibold"
              >
                <RotateCcw className="h-4 w-4" /> Ещё раз
              </button>
              <button
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)]"
              >
                Закрыть
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function startLesson() {
  window.dispatchEvent(new CustomEvent(LESSON_EVENT));
}
