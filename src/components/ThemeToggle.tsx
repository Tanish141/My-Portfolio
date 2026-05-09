import { AnimatePresence, motion } from "framer-motion";
import { HiMoon, HiSun } from "react-icons/hi2";

type ThemeToggleProps = {
  isDark: boolean;
  onToggle: () => void;
};

export default function ThemeToggle({ isDark, onToggle }: ThemeToggleProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 transition hover:-translate-y-0.5 hover:border-cyan-500 hover:text-cyan-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-cyan-400 dark:hover:text-cyan-200"
      aria-label="Toggle dark mode"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDark ? "dark" : "light"}
          initial={{ opacity: 0, rotate: -35, scale: 0.8 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 35, scale: 0.8 }}
          transition={{ duration: 0.2 }}
        >
          {isDark ? <HiSun size={18} /> : <HiMoon size={18} />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
