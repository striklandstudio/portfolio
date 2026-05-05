import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-semibold tracking-tight text-slate-900 dark:text-slate-100"
        >
          Strikland Studio
        </a>
        <div className="flex items-center gap-6">
          <ul className="hidden items-center gap-6 text-sm text-slate-600 dark:text-slate-300 sm:flex">
            <li>
              <a className="hover:text-slate-900 dark:hover:text-white" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="hover:text-slate-900 dark:hover:text-white" href="#projects">
                Projects
              </a>
            </li>
            <li>
              <a className="hover:text-slate-900 dark:hover:text-white" href="#skills">
                Skills
              </a>
            </li>
            <li>
              <a className="hover:text-slate-900 dark:hover:text-white" href="#contact">
                Contact
              </a>
            </li>
          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
