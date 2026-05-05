const skills = [
  {
    title: "Engineering",
    items: [
      "Modern frameworks (Next.js, React)",
      "Performance & speed",
      "SEO foundations",
      "Secure hosting",
    ],
  },
  {
    title: "Design & UX",
    items: [
      "Mobile-first design",
      "Clean, professional visuals",
      "Brand-aligned look & feel",
    ],
  },
  {
    title: "Partnership",
    items: [
      "Discovery consultation",
      "Domain & email setup",
      "Ongoing support & updates",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-slate-200 bg-slate-50 py-20 dark:border-slate-800 dark:bg-slate-900"
    >
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
          What I do
        </h2>
        <p className="mt-2 max-w-2xl text-slate-600 dark:text-slate-400">
          Everything you need to launch a website that earns trust and helps
          your business grow.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <div
              key={group.title}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950"
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-400">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
