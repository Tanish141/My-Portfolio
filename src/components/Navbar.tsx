import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";
import type { NavItem } from "../types";
import PersonalLogo from "./PersonalLogo";
import ThemeToggle from "./ThemeToggle";

type NavbarProps = {
  items: NavItem[];
  activeSection: string;
  isDark: boolean;
  onToggleTheme: () => void;
};

export default function Navbar({
  items,
  activeSection,
  isDark,
  onToggleTheme,
}: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl dark:border-slate-800/90 dark:bg-slate-950/75">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 md:px-8">
        <a
          href="#home"
          onClick={(event) => {
            event.preventDefault();
            handleNavClick("home");
          }}
          className="inline-flex"
        >
          <PersonalLogo />
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {items.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleNavClick(item.id)}
              className={`relative text-sm font-medium transition duration-300 ${
                activeSection === item.id
                  ? "text-cyan-600 dark:text-cyan-300"
                  : "text-slate-600 hover:text-cyan-600 dark:text-slate-300 dark:hover:text-cyan-200"
              }`}
            >
              <>
  {item.label}

  {activeSection === item.id && (
    <motion.span
      layoutId="active-navbar"
      className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-cyan-500"
      transition={{
        type: "spring",
        stiffness: 380,
        damping: 30,
      }}
    />
  )}
</>
            </button>
          ))}
          <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <HiXMark size={20} /> : <HiBars3 size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="border-t border-slate-200 bg-white px-4 py-4 dark:border-slate-800 dark:bg-slate-950 md:hidden"
          >
            <div className="flex flex-col gap-3">
              {items.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className={`rounded-lg px-3 py-2 text-left text-sm font-medium transition ${
                    activeSection === item.id
                      ? "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/40 dark:text-cyan-300"
                      : "text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
