import { motion } from "framer-motion";

export default function PersonalLogo() {
  return (
    <motion.div
      whileHover={{ y: -1, scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="group inline-flex items-center gap-2"
      aria-label="TS logo"
    >
      <span className="relative inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl border border-cyan-500/60 bg-slate-900 text-xs font-bold tracking-wider text-cyan-300 shadow-[0_0_0_1px_rgba(8,145,178,0.35)] dark:bg-slate-950">
        <span className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.28),transparent_55%)]" />
        <span className="relative">TS</span>
      </span>
      <span className="text-sm font-semibold tracking-[0.12em] text-slate-900 dark:text-slate-100">
        TANISH S
      </span>
    </motion.div>
  );
}
