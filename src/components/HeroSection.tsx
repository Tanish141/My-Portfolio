import { motion } from "framer-motion";
import {
  FaArrowRightLong,
  FaDownload,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa6";

export default function HeroSection() {
  const handleScrollToProjects = () => {
    const section = document.getElementById("projects");
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="home" className="section-padding relative overflow-hidden">
      <div className="pointer-events-none absolute -left-20 top-12 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl dark:bg-cyan-500/15" />
      <div className="pointer-events-none absolute -right-12 bottom-10 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl dark:bg-indigo-500/15" />

      <div className="relative mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.2fr_0.8fr] md:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-600 dark:text-cyan-300">
            Open to full-time software roles
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 dark:text-slate-100 md:text-5xl lg:text-6xl">
            Tanish S
            <span className="mt-2 block text-2xl font-semibold text-slate-700 dark:text-slate-300 md:text-3xl">
              Software Developer | Full Stack Developer | Flutter Developer
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 md:text-lg">
            I build modern web and mobile applications with a strong focus on
            clean architecture, usability, and performance. My work spans React,
            Flutter, Firebase, and backend systems that solve practical problems.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              type="button"
              onClick={handleScrollToProjects}
              className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-300"
            >
              View Projects <FaArrowRightLong size={14} />
            </button>
            <a
              href="/Tanish_S_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              download="Tanish_S_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-cyan-500 hover:text-cyan-700 dark:border-slate-600 dark:text-slate-200 dark:hover:border-cyan-300 dark:hover:text-cyan-200"
            >
              Download Resume <FaDownload size={14} />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://github.com/Tanish141"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/70 px-4 py-2 text-sm font-medium text-slate-700 transition hover:-translate-y-0.5 hover:border-cyan-500 hover:text-cyan-700 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200 dark:hover:border-cyan-300 dark:hover:text-cyan-200"
            >
              <FaGithub size={15} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/tanish-s-7a815a220/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/70 px-4 py-2 text-sm font-medium text-slate-700 transition hover:-translate-y-0.5 hover:border-cyan-500 hover:text-cyan-700 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200 dark:hover:border-cyan-300 dark:hover:text-cyan-200"
            >
              <FaLinkedin size={15} />
              LinkedIn
            </a>
            <a
              href="mailto:mrtanish14@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/70 px-4 py-2 text-sm font-medium text-slate-700 transition hover:-translate-y-0.5 hover:border-cyan-500 hover:text-cyan-700 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200 dark:hover:border-cyan-300 dark:hover:text-cyan-200"
            >
              <FaEnvelope size={14} />
              Email
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/65 p-6 shadow-xl shadow-slate-300/30 backdrop-blur-xl dark:border-slate-700/80 dark:bg-slate-900/55 dark:shadow-cyan-950/20"
        >
          <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-cyan-400/20 blur-2xl" />
          <div className="relative">
            <div className="mx-auto h-36 w-36 overflow-hidden rounded-3xl border border-slate-700/80 bg-gradient-to-br from-slate-800 to-slate-900 p-[2px] shadow-lg">
              <img
                src="/profile-photo.png"
                alt="Tanish S professional portrait"
                className="h-full w-full rounded-[1.25rem] object-cover object-top"
              />
            </div>

            <h2 className="mt-5 text-center text-xl font-semibold text-slate-900 dark:text-slate-100">
              Building practical products with strong engineering
            </h2>
            <p className="mt-3 text-center text-sm leading-7 text-slate-600 dark:text-slate-300">
              Skilled in full-stack and Flutter development with hands-on project
              delivery in AI, social, and utility applications.
            </p>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
