export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
          Let&apos;s connect
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-slate-600">
          The fastest way to reach me is by email. I usually reply within a day
          or two.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="mailto:hello@example.com"
            className="rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-accent-dark"
          >
            hello@example.com
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
