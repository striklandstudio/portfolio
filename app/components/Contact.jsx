export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
          Let&apos;s build something
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-slate-600 dark:text-slate-400">
          Tell me about your business and what you&apos;re hoping to achieve.
          I&apos;ll get back to you within a day or two with next steps.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="mailto:diegoortiz@striklandstudio.com"
            className="rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-accent-dark"
          >
            diegoortiz@striklandstudio.com
          </a>
        </div>
      </div>
    </section>
  );
}
