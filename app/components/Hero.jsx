export default function Hero() {
  return (
    <section
      id="about"
      className="mx-auto flex max-w-5xl flex-col items-start gap-6 px-6 pb-16 pt-24 sm:pt-32"
    >
      <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent-dark dark:bg-accent/20 dark:text-accent">
        Now booking new projects
      </span>
      <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-6xl">
        Hi, I&apos;m <span className="text-accent">Diego Ortiz</span>.
      </h1>
      <p className="text-xl font-medium text-slate-700 dark:text-slate-300">
        Founder of Strikland Studio. Helping small businesses build meaningful
        websites.
      </p>
      <p className="max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">
        I help small businesses show up online with websites that actually work.
        By day I&apos;m a senior software engineer at a large tech company; on
        the side, I bring that same engineering rigor to clean, professional
        sites that load fast, build trust, and turn visitors into customers,
        without the complexity or cost of an agency.
      </p>
      <div className="flex gap-3">
        <a
          href="#contact"
          className="rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-accent-dark"
        >
          Start a project
        </a>
        <a
          href="#skills"
          className="rounded-md border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-900"
        >
          See what I do
        </a>
      </div>
    </section>
  );
}
