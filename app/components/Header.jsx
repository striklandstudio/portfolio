export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-semibold tracking-tight text-slate-900">
          Your Name
        </a>
        <ul className="flex items-center gap-6 text-sm text-slate-600">
          <li>
            <a className="hover:text-slate-900" href="#about">About</a>
          </li>
          <li>
            <a className="hover:text-slate-900" href="#skills">Skills</a>
          </li>
          <li>
            <a className="hover:text-slate-900" href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
