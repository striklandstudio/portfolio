const skills = [
  {
    title: "Strategy",
    items: ["Research", "Roadmapping", "Stakeholder alignment"],
  },
  {
    title: "Communication",
    items: ["Writing", "Presenting", "Workshop facilitation"],
  },
  {
    title: "Tools",
    items: ["Notion", "Figma", "Google Workspace"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-slate-200 bg-slate-50 py-20"
    >
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
          Skills
        </h2>
        <p className="mt-2 max-w-2xl text-slate-600">
          A snapshot of areas I work in. Edit this list in
          <code className="mx-1 rounded bg-slate-200 px-1 text-sm">
            app/components/Skills.jsx
          </code>
          to reflect your own.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <div
              key={group.title}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-slate-900">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
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
