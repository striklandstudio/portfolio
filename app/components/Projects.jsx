// To add a new project, copy one of the objects below and edit the fields.
// - image: optional. Drop a screenshot in /public/images/ and reference it as "/images/your-file.png".
//   If omitted, a colored gradient with the project title shows instead.
// - url: where "View site" links to. Use "#" if the project isn't live yet.
const projects = [
  {
    title: "Logan Square Bakehouse",
    description:
      "Editorial-style site for a Chicago bakery. Split A.M./P.M. menu, pre-order form with email handoff, and embedded location map.",
    tags: ["Next.js", "Tailwind", "Pre-order form"],
    url: "https://bakery-seven-tau.vercel.app/", // replace with the live Vercel URL after you deploy
    gradient: "from-amber-400 to-rose-500",
    // image: "/images/bakehouse.png",
  },
  {
    title: "Maple Street Dental",
    description:
      "Trustworthy site for a family dentist. Online appointment booking, patient forms, and an FAQ to reduce phone calls.",
    tags: ["Next.js", "Calendly", "SEO"],
    url: "#",
    gradient: "from-sky-400 to-indigo-500",
    // image: "/images/dental.png",
  },
  {
    title: "Maison Aurelle",
    description:
      "Modern luxe site for a Chicago full-service salon. Multi-page navigation, full service menu with photos, online booking form, and team profiles.",
    tags: ["Next.js", "Tailwind", "Booking form"],
    url: "https://salon-weld-xi.vercel.app/",
    gradient: "from-amber-200 to-zinc-900",
    // image: "/images/maison-aurelle.png",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-slate-200 py-20 dark:border-slate-800"
    >
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
          Recent work
        </h2>
        <p className="mt-2 max-w-2xl text-slate-600 dark:text-slate-400">
          A selection of websites built for small businesses. Each one is built
          to be fast, easy to maintain, and ready to grow with the business.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  const isLive = project.url && project.url !== "#";

  const card = (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition dark:border-slate-800 dark:bg-slate-950 ${
        isLive ? "hover:-translate-y-1 hover:shadow-md" : ""
      }`}
    >
      {project.image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={project.image}
          alt={`Screenshot of ${project.title}`}
          className="aspect-video w-full object-cover"
        />
      ) : (
        <div
          className={`flex aspect-video w-full items-center justify-center bg-gradient-to-br ${project.gradient}`}
        >
          <span className="px-4 text-center text-lg font-semibold text-white drop-shadow">
            {project.title}
          </span>
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          {project.title}
        </h3>
        <p className="mt-2 flex-1 text-sm text-slate-600 dark:text-slate-400">
          {project.description}
        </p>
        {project.tags && project.tags.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}
        <div className="mt-5 text-sm font-medium">
          {isLive ? (
            <span className="text-accent group-hover:text-accent-dark">
              View site →
            </span>
          ) : (
            <span className="text-slate-400 dark:text-slate-500">
              Coming soon
            </span>
          )}
        </div>
      </div>
    </article>
  );

  if (!isLive) return card;

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noreferrer"
      className="block focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 dark:focus:ring-offset-slate-950"
    >
      {card}
    </a>
  );
}
