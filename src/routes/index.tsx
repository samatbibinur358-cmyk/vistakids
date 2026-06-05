import { createFileRoute } from "@tanstack/react-router";
import {
  Sparkles,
  Eye,
  User,
  LayoutGrid,
  Target,
  Wand2,
  Gamepad2,
  Globe2,
  HeartHandshake,
  LineChart,
  ShieldCheck,
  Star,
  Play,
  ArrowRight,
} from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import buddyImg from "@/assets/buddy.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VISTA Language — Изучение языков для детей с РАС" },
      {
        name: "description",
        content:
          "VISTA Language — спокойная AI-платформа для изучения иностранных языков детьми с РАС. 6 языков, наставник Buddy, микроуроки и адаптация под ребенка.",
      },
      { property: "og:title", content: "VISTA Language — языки в комфортном темпе" },
      {
        property: "og:description",
        content:
          "Без перегрузки. Через интересы. С поддержкой AI. Платформа для детей с расстройствами аутистического спектра.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Method />
        <Languages />
        <Buddy />
        <Interests />
        <Lesson />
        <Games />
        <Parents />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

/* ------------------------- shared ------------------------- */

function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`px-6 py-20 md:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl">
        {(eyebrow || title || subtitle) && (
          <div className="mx-auto mb-14 max-w-2xl text-center">
            {eyebrow && (
              <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-secondary-foreground">
                {eyebrow}
              </span>
            )}
            {title && (
              <h2 className="mt-4 text-3xl font-bold md:text-4xl">{title}</h2>
            )}
            {subtitle && (
              <p className="mt-4 text-base text-muted-foreground md:text-lg">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

function PrimaryButton({
  children,
  href = "#cta",
}: {
  children: React.ReactNode;
  href?: string;
}) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5"
    >
      {children}
    </a>
  );
}

function GhostButton({
  children,
  href = "#demo",
}: {
  children: React.ReactNode;
  href?: string;
}) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-base font-semibold text-foreground transition-colors hover:bg-secondary"
    >
      {children}
    </a>
  );
}

/* ------------------------- header ------------------------- */

function Header() {
  const nav = [
    { label: "Методика", href: "#method" },
    { label: "Языки", href: "#languages" },
    { label: "Buddy", href: "#buddy" },
    { label: "Для родителей", href: "#parents" },
    { label: "Тарифы", href: "#pricing" },
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#" className="flex items-center gap-2 font-display text-lg font-bold">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <Sparkles className="h-4 w-4" />
          </span>
          VISTA
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="#cta"
          className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)]"
        >
          Начать
        </a>
      </div>
    </header>
  );
}

/* ------------------------- hero ------------------------- */

function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-16 pb-24 md:pt-24 md:pb-32">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)", opacity: 0.55 }}
      />
      <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground/80 shadow-[var(--shadow-card)]">
            <Sparkles className="h-3.5 w-3.5" />
            VISTA™ Learning Method
          </span>
          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.1] md:text-6xl">
            Изучение языков
            <br />в комфортном темпе
            <br />
            <span className="text-primary">для каждого ребенка</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg text-muted-foreground">
            Без перегрузки. Через интересы. С поддержкой AI. Спокойная и
            предсказуемая среда для детей с расстройствами аутистического
            спектра.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <PrimaryButton>
              Начать бесплатно <ArrowRight className="h-4 w-4" />
            </PrimaryButton>
            <GhostButton>
              <Play className="h-4 w-4" /> Посмотреть демо
            </GhostButton>
          </div>
          <div className="mt-10 flex flex-wrap gap-6 text-sm text-muted-foreground">
            <Badge icon={<ShieldCheck className="h-4 w-4" />} text="Сенсорно безопасно" />
            <Badge icon={<HeartHandshake className="h-4 w-4" />} text="Без критики" />
            <Badge icon={<Globe2 className="h-4 w-4" />} text="6 языков" />
          </div>
        </div>
        <div className="relative">
          <div className="overflow-hidden rounded-[2rem] border border-border bg-card shadow-[var(--shadow-soft)]">
            <img
              src={heroImg}
              alt="Спокойная иллюстрация языковой платформы для детей"
              width={1536}
              height={1152}
              className="h-auto w-full"
            />
          </div>
          <div className="absolute -bottom-6 -left-4 flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 shadow-[var(--shadow-card)] md:-left-8">
            <img src={buddyImg} alt="Buddy" width={48} height={48} className="h-12 w-12" />
            <div>
              <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Buddy говорит
              </div>
              <div className="text-sm font-medium">Привет! Готов поиграть?</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Badge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-card/70 px-3 py-1.5 text-xs font-medium text-foreground">
      <span className="text-primary">{icon}</span>
      {text}
    </span>
  );
}

/* ------------------------- method ------------------------- */

function Method() {
  const items = [
    {
      letter: "V",
      title: "Visual",
      desc: "Визуальные подсказки и понятные карточки на каждом шаге.",
      icon: <Eye className="h-5 w-5" />,
      bg: "var(--lavender)",
    },
    {
      letter: "I",
      title: "Individual",
      desc: "Обучение через специнтересы — космос, динозавры, животные.",
      icon: <User className="h-5 w-5" />,
      bg: "var(--sky)",
    },
    {
      letter: "S",
      title: "Structured",
      desc: "Предсказуемая структура урока без сюрпризов.",
      icon: <LayoutGrid className="h-5 w-5" />,
      bg: "var(--mint)",
    },
    {
      letter: "T",
      title: "Task-Oriented",
      desc: "Микро-шаги и одно простое действие на экране.",
      icon: <Target className="h-5 w-5" />,
      bg: "var(--lavender)",
    },
    {
      letter: "A",
      title: "Adaptive",
      desc: "AI подстраивается под темп и состояние ребенка.",
      icon: <Wand2 className="h-5 w-5" />,
      bg: "var(--sky)",
    },
  ];
  return (
    <Section
      id="method"
      eyebrow="Методика"
      title="VISTA™ Learning Method"
      subtitle="Пять принципов, на которых построен каждый урок и каждое взаимодействие."
    >
      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-5">
        {items.map((i) => (
          <div
            key={i.letter}
            className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-transform hover:-translate-y-1"
          >
            <div
              className="flex h-12 w-12 items-center justify-center rounded-2xl font-display text-xl font-bold text-foreground"
              style={{ background: i.bg }}
            >
              {i.letter}
            </div>
            <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-primary">
              {i.icon} {i.title}
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{i.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ------------------------- languages ------------------------- */

function Languages() {
  const langs = [
    { flag: "🇰🇿", name: "Казахский" },
    { flag: "🇷🇺", name: "Русский" },
    { flag: "🇬🇧", name: "Английский" },
    { flag: "🇨🇳", name: "Китайский" },
    { flag: "🇪🇸", name: "Испанский" },
    { flag: "🇫🇷", name: "Французский" },
  ];
  return (
    <Section
      id="languages"
      eyebrow="6 языков"
      title="Выбери родной и тот, что хочешь изучать"
      subtitle="При регистрации ребенок указывает свой родной язык и язык изучения. Контент адаптируется автоматически."
    >
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
        {langs.map((l) => (
          <div
            key={l.name}
            className="flex flex-col items-center gap-2 rounded-2xl border border-border bg-card px-4 py-6 text-center shadow-[var(--shadow-card)]"
          >
            <span className="text-4xl" aria-hidden>
              {l.flag}
            </span>
            <span className="text-sm font-semibold">{l.name}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ------------------------- buddy ------------------------- */

function Buddy() {
  const traits = [
    "Дружелюбный и спокойный",
    "Никогда не критикует",
    "Говорит короткими фразами",
    "Поддерживает на каждом шаге",
  ];
  const avatars = ["🤖", "🦊", "🐼", "🐱", "🐲"];
  return (
    <Section id="buddy" className="bg-secondary/40">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute inset-0 -z-10 rounded-[2.5rem] bg-accent/60 blur-2xl" />
          <div className="rounded-[2.5rem] border border-border bg-card p-8 shadow-[var(--shadow-soft)]">
            <img
              src={buddyImg}
              alt="Buddy — виртуальный наставник"
              width={400}
              height={400}
              className="mx-auto h-64 w-64 object-contain"
              loading="lazy"
            />
            <div className="mt-6 flex justify-center gap-3 text-2xl">
              {avatars.map((a) => (
                <button
                  key={a}
                  className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-background transition-transform hover:scale-110"
                  aria-label={`Аватар ${a}`}
                >
                  {a}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground/80">
            <Sparkles className="h-3.5 w-3.5" />
            Buddy Teacher
          </span>
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Виртуальный наставник, который всегда на стороне ребенка
          </h2>
          <p className="mt-4 text-muted-foreground">
            Buddy — мягкий голос платформы. Он помогает, хвалит и подбадривает,
            никогда не указывает на ошибки и не торопит.
          </p>
          <ul className="mt-6 space-y-3">
            {traits.map((t) => (
              <li key={t} className="flex items-center gap-3 text-sm">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-primary">
                  <Star className="h-3.5 w-3.5" />
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

/* ------------------------- interests ------------------------- */

function Interests() {
  const items = [
    { emoji: "🚀", name: "Космос" },
    { emoji: "🦕", name: "Динозавры" },
    { emoji: "🐾", name: "Животные" },
    { emoji: "🚂", name: "Поезда" },
    { emoji: "🤖", name: "Роботы" },
    { emoji: "🚗", name: "Машины" },
    { emoji: "🌊", name: "Океан" },
    { emoji: "🎵", name: "Музыка" },
    { emoji: "🎮", name: "Игры" },
    { emoji: "🌿", name: "Природа" },
  ];
  return (
    <Section
      eyebrow="Персонализация"
      title="Обучение через любимые темы"
      subtitle="На онбординге ребенок выбирает интересы — все упражнения адаптируются под них."
    >
      <div className="flex flex-wrap justify-center gap-3">
        {items.map((i) => (
          <div
            key={i.name}
            className="flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold shadow-[var(--shadow-card)]"
          >
            <span className="text-xl">{i.emoji}</span> {i.name}
          </div>
        ))}
      </div>
      <div className="mx-auto mt-12 grid max-w-3xl gap-4 md:grid-cols-2">
        <ExampleCard
          label="Без интереса"
          text="The apple is green."
          tone="muted"
        />
        <ExampleCard
          label="Космос 🚀"
          text="The rocket goes to Mars."
          tone="primary"
        />
      </div>
    </Section>
  );
}

function ExampleCard({
  label,
  text,
  tone,
}: {
  label: string;
  text: string;
  tone: "muted" | "primary";
}) {
  return (
    <div
      className={`rounded-3xl border p-6 ${
        tone === "primary"
          ? "border-primary/30 bg-primary/10"
          : "border-border bg-card"
      }`}
    >
      <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        {label}
      </div>
      <div className="mt-2 font-display text-xl font-semibold">{text}</div>
    </div>
  );
}

/* ------------------------- lesson ------------------------- */

function Lesson() {
  const stages = ["Введение", "Обучение", "Практика", "Награда", "Завершение"];
  return (
    <Section
      eyebrow="Урок"
      title="3–7 минут. Одна задача на экране."
      subtitle="Каждый микро-урок имеет одинаковую и предсказуемую структуру."
    >
      <div className="mx-auto max-w-3xl rounded-[2rem] border border-border bg-card p-6 shadow-[var(--shadow-soft)] md:p-10">
        <div className="flex items-center justify-between text-sm font-medium text-muted-foreground">
          <span>Шаг 2 из 5</span>
          <span>40%</span>
        </div>
        <div className="mt-2 h-3 overflow-hidden rounded-full bg-secondary">
          <div
            className="h-full rounded-full bg-primary transition-all"
            style={{ width: "40%" }}
          />
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-5">
          {stages.map((s, idx) => (
            <div
              key={s}
              className={`rounded-2xl border px-3 py-4 text-center text-sm font-semibold ${
                idx < 2
                  ? "border-primary/30 bg-primary/10 text-primary-foreground"
                  : "border-border bg-background text-muted-foreground"
              }`}
            >
              {s}
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-3xl bg-accent/60 p-8 text-center">
          <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Сопоставь картинку
          </div>
          <div className="mt-3 font-display text-3xl font-bold">🚀 = ?</div>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {["rocket", "apple", "tree"].map((w, i) => (
              <button
                key={w}
                className={`rounded-2xl border px-6 py-3 font-semibold transition ${
                  i === 0
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card hover:bg-secondary"
                }`}
              >
                {w}
              </button>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ------------------------- games ------------------------- */

function Games() {
  const games = [
    { name: "Memory Cards", emoji: "🧠", desc: "Поиск пары — спокойный темп." },
    { name: "Word Match", emoji: "🔤", desc: "Сопоставь слово с картинкой." },
    { name: "Space Adventure", emoji: "🚀", desc: "Лети к планете с новыми словами." },
    { name: "Dino Quest", emoji: "🦕", desc: "Найди динозавра по описанию." },
    { name: "Train Builder", emoji: "🚂", desc: "Составь предложение из вагонов." },
    { name: "Picture Hunt", emoji: "🔎", desc: "Найди объект на сцене." },
  ];
  return (
    <Section
      eyebrow="Игры"
      title="Короткие игры на 1–3 минуты"
      subtitle="Мягкая мотивация, мягкие звуки, никакой агрессивной геймификации."
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {games.map((g) => (
          <div
            key={g.name}
            className="group rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-transform hover:-translate-y-1"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-3xl">
              {g.emoji}
            </div>
            <div className="mt-5 flex items-center gap-2 text-lg font-semibold">
              <Gamepad2 className="h-4 w-4 text-primary" />
              {g.name}
            </div>
            <p className="mt-1 text-sm text-muted-foreground">{g.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ------------------------- parents ------------------------- */

function Parents() {
  const metrics = [
    { label: "Изучено слов", value: "128", hint: "+12 за неделю" },
    { label: "Удержание внимания", value: "6 мин", hint: "средняя сессия" },
    { label: "Любимая тема", value: "🚀 Космос", hint: "65% уроков" },
    { label: "Достижений", value: "9", hint: "из 24" },
  ];
  return (
    <Section
      id="parents"
      eyebrow="Кабинет"
      title="Понятная аналитика для родителей и педагогов"
      subtitle="Простые графики, никаких сложных метрик. Только то, что важно."
      className="bg-secondary/40"
    >
      <div className="rounded-[2rem] border border-border bg-card p-6 shadow-[var(--shadow-soft)] md:p-10">
        <div className="grid gap-4 md:grid-cols-4">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="rounded-2xl bg-background p-5"
            >
              <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                {m.label}
              </div>
              <div className="mt-2 font-display text-2xl font-bold">{m.value}</div>
              <div className="mt-1 text-xs text-muted-foreground">{m.hint}</div>
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-2xl bg-background p-6">
          <div className="mb-4 flex items-center gap-2 text-sm font-semibold">
            <LineChart className="h-4 w-4 text-primary" /> Прогресс по неделям
          </div>
          <div className="flex h-32 items-end gap-2">
            {[30, 45, 38, 55, 62, 70, 78].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-xl bg-primary/70"
                style={{ height: `${h}%` }}
                aria-hidden
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ------------------------- pricing ------------------------- */

function Pricing() {
  const tiers = [
    {
      name: "Free",
      price: "0 ₸",
      desc: "Все основы методики VISTA.",
      features: ["6 языков", "Buddy наставник", "Микроуроки", "Базовые игры"],
      cta: "Начать бесплатно",
      featured: false,
    },
    {
      name: "Premium AI",
      price: "от 3 990 ₸",
      desc: "AI-наставник адаптируется под ребенка.",
      features: [
        "Всё из Free",
        "Анализ прогресса и ошибок",
        "Эмоциональная адаптация",
        "Расширенный кабинет родителя",
      ],
      cta: "Попробовать Premium",
      featured: true,
    },
    {
      name: "Центры B2B",
      price: "По запросу",
      desc: "Лицензии для школ и центров коррекции.",
      features: [
        "Множественные аккаунты",
        "Кабинет педагога",
        "Отчеты для родителей",
        "Поддержка внедрения",
      ],
      cta: "Связаться",
      featured: false,
    },
  ];
  return (
    <Section
      id="pricing"
      eyebrow="Тарифы"
      title="Простая и честная подписка"
    >
      <div className="grid gap-6 md:grid-cols-3">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={`rounded-3xl border p-8 shadow-[var(--shadow-card)] ${
              t.featured
                ? "border-primary bg-primary/10"
                : "border-border bg-card"
            }`}
          >
            <div className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              {t.name}
            </div>
            <div className="mt-3 font-display text-3xl font-bold">{t.price}</div>
            <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
            <ul className="mt-6 space-y-2 text-sm">
              {t.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <Star className="mt-0.5 h-4 w-4 text-primary" /> {f}
                </li>
              ))}
            </ul>
            <a
              href="#cta"
              className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-semibold ${
                t.featured
                  ? "bg-primary text-primary-foreground shadow-[var(--shadow-soft)]"
                  : "border border-border bg-background"
              }`}
            >
              {t.cta}
            </a>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ------------------------- testimonials ------------------------- */

function Testimonials() {
  const items = [
    {
      quote:
        "Впервые сын сам открывает приложение и не закрывает через минуту. Темп идеальный.",
      name: "Айгерим",
      role: "мама, Алматы",
    },
    {
      quote:
        "Методика VISTA закрывает то, чего нам не хватало в обычных языковых приложениях.",
      name: "Дарья К.",
      role: "логопед, центр коррекции",
    },
    {
      quote:
        "Спокойный интерфейс — наконец-то. Ни одной вспышки, ни одного громкого звука.",
      name: "Erlan",
      role: "отец, Астана",
    },
  ];
  return (
    <Section eyebrow="Отзывы" title="Что говорят родители и педагоги">
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((t) => (
          <figure
            key={t.name}
            className="rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-card)]"
          >
            <div className="flex gap-1 text-primary">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <blockquote className="mt-4 text-sm leading-relaxed">
              «{t.quote}»
            </blockquote>
            <figcaption className="mt-5 text-sm">
              <div className="font-semibold">{t.name}</div>
              <div className="text-muted-foreground">{t.role}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}

/* ------------------------- faq ------------------------- */

function FAQ() {
  const qa = [
    {
      q: "С какого возраста подходит VISTA?",
      a: "Платформа рассчитана на детей 4–12 лет с РАС, но подходит и нейротипичным детям, которым важен спокойный темп.",
    },
    {
      q: "Нужно ли участие взрослого?",
      a: "На старте — да, помочь с выбором интересов и языка. Дальше ребенок занимается самостоятельно.",
    },
    {
      q: "Безопасны ли звуки и анимации?",
      a: "Да. Мы исключаем громкие звуки, вспышки и резкие переходы. Всё проверено с учетом сенсорных особенностей.",
    },
    {
      q: "Что входит в Premium AI?",
      a: "AI-наставник, который отслеживает прогресс, ошибки и эмоциональное состояние, и адаптирует уроки в реальном времени.",
    },
  ];
  return (
    <Section eyebrow="FAQ" title="Частые вопросы">
      <div className="mx-auto max-w-3xl space-y-3">
        {qa.map((i) => (
          <details
            key={i.q}
            className="group rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)] open:bg-secondary/40"
          >
            <summary className="cursor-pointer list-none text-base font-semibold">
              {i.q}
            </summary>
            <p className="mt-3 text-sm text-muted-foreground">{i.a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}

/* ------------------------- cta ------------------------- */

function CTA() {
  return (
    <section id="cta" className="px-6 pb-24">
      <div
        className="mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] border border-border p-10 text-center shadow-[var(--shadow-soft)] md:p-16"
        style={{ background: "var(--gradient-hero)" }}
      >
        <h2 className="font-display text-3xl font-bold md:text-5xl">
          Начни первый урок сегодня
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Бесплатно, без перегрузки. Подходит для дома, школы и центров
          коррекции.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <PrimaryButton>
            Начать бесплатно <ArrowRight className="h-4 w-4" />
          </PrimaryButton>
          <GhostButton>
            <Play className="h-4 w-4" /> Посмотреть демо
          </GhostButton>
        </div>
      </div>
    </section>
  );
}

/* ------------------------- footer ------------------------- */

function Footer() {
  return (
    <footer className="border-t border-border bg-background px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
        <div className="flex items-center gap-2 font-display font-bold text-foreground">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Sparkles className="h-3.5 w-3.5" />
          </span>
          VISTA Language
        </div>
        <div>© {new Date().getFullYear()} VISTA™ Learning Method. Все права защищены.</div>
      </div>
    </footer>
  );
}
