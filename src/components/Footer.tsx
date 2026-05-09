import { socialLinks } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/70 py-8 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-950/80">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-8">
        <p className="text-sm text-slate-600 dark:text-slate-300">
          © {new Date().getFullYear()} Tanish S. All rights reserved.
        </p>
        <div className="flex items-center gap-3">
          {socialLinks.map(({ label, url, icon: Icon }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-600 transition hover:border-cyan-500 hover:text-cyan-700 dark:border-slate-700 dark:text-slate-300 dark:hover:border-cyan-300 dark:hover:text-cyan-200"
            >
              <Icon size={14} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
