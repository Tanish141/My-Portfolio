import { motion } from "framer-motion";
import { experiences } from "../data/portfolioData";
import SectionHeading from "./SectionHeading";

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-padding border-t border-slate-200 dark:border-slate-800">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Experience"
          title="Hands-on internship and product-building experience."
          description="I focus on converting real requirements into stable software delivery, from UI implementation to backend integration and deployment support."
        />

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-[11px] top-1 hidden h-[96%] w-px bg-slate-300 dark:bg-slate-700 sm:block" />
          <div className="space-y-6">
            {experiences.map((item, index) => (
              <motion.article
                key={`${item.company}-${item.role}`}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/60"
              >
                <span className="absolute left-0 top-8 hidden h-6 w-6 rounded-full border-4 border-slate-900 bg-cyan-400 sm:block" />
                <div className="sm:pl-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                    {item.duration} | {item.location}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-slate-100">
                    {item.role}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-cyan-300">
                    {item.company}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {item.summary}
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                    {item.achievements.map((achievement) => (
                      <li key={achievement} className="flex gap-2">
                        <span className="mt-[8px] h-1.5 w-1.5 rounded-full bg-cyan-400" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
