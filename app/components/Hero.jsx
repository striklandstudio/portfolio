export default function Hero() {
  return (
    <section
      id="about"
      className="mx-auto flex max-w-5xl flex-col items-start gap-6 px-6 pb-16 pt-24 sm:pt-32"
    >
      <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent-dark">
        Available for new opportunities
      </span>
      <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
        Hi, I&apos;m <span className="text-accent">Your Name</span>.
      </h1>
      <p className="max-w-2xl text-lg leading-relaxed text-slate-600">
        I&apos;m a generalist professional who enjoys turning ideas into clear,
        useful work. Replace this paragraph with a short bio that explains who
        you are, what you do, and what you&apos;re looking for next.
      </p>
      <div className="flex gap-3">
        <a
          href="#contact"
          className="rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-accent-dark"
        >
          Get in touch
        </a>
        <a
          href="#skills"
          className="rounded-md border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
        >
          See skills
        </a>
      </div>
    </section>
  );
}
