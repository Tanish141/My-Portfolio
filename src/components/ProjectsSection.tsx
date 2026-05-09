import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa6";
import { projects } from "../data/portfolioData";
import SectionHeading from "./SectionHeading";
//import movieReviewImage from "../assets/projects/movie-review-sentiment-analysis.png";
import movieReviewImage from "../assets/movie-review-sentiment-analysis.png";
//import manipalLogo from "../assets/Manipal_Logo.png";
import flutterMovieAppImage from "../assets/flutter-movie-app.png";
import emotionDetectionImage from "../assets/emotion-detection.png";
import shuttleScoreImage from "../assets/shuttle-score.png";

const projectImages: Record<string, string> = {
  "Movie Review Sentiment Analysis": movieReviewImage,
  "Flutter Movie App": flutterMovieAppImage,
  "Emotion Detection in Text Using NLTK": emotionDetectionImage,
  "Shuttle Score Application": shuttleScoreImage,
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-padding border-t border-slate-200 dark:border-slate-800">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Featured Work"
          title="My Projects"
          description="Each project demonstrates real-world problem solving, maintainable implementation, and product-first development decisions."
        />

        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-950/20 dark:border-slate-800 dark:bg-slate-900/65"
            >
              <div className="relative h-52 overflow-hidden">
  {projectImages[project.title] ? (
    <img
      src={projectImages[project.title]}
      alt={project.title}
      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
    />
  ) : (
    <div
      className={`h-full w-full bg-gradient-to-br ${project.bannerGradient}`}
    />
  )}

  <div className="absolute inset-0 bg-black/30" />

  <span className="absolute left-4 top-4 rounded-full border border-white/40 bg-white/20 px-3 py-1 text-xs font-semibold tracking-wide text-white backdrop-blur-sm">
    {project.domain}
  </span>
</div>
              <div className="flex h-full flex-col p-5">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                {project.features.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <span className="mt-[8px] h-1.5 w-1.5 rounded-full bg-cyan-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex gap-3 pt-6 text-sm font-semibold">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-slate-700 transition hover:border-cyan-500 hover:text-cyan-700 dark:border-slate-700 dark:text-slate-200 dark:hover:border-cyan-300 dark:hover:text-cyan-200"
                >
                  <FaGithub size={15} />
                  GitHub
                </a>
                {/* <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-4 py-2 text-slate-950 transition hover:bg-cyan-300"
                >
                  <FaArrowUpRightFromSquare size={14} />
                  Live Demo
                </a> */}
              </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
