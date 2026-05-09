import { motion } from "framer-motion";
import { certifications } from "../data/portfolioData";
import SectionHeading from "./SectionHeading";
import manipalLogo from "../assets/Manipal_Logo.png";
import vivekanandaLogo from "../assets/Vivekananda_College_Logo.png";

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaNodeJs,
  FaJava,
  FaPython,
  FaGitAlt,
  FaDocker,
  FaFigma,
  FaCode,
  FaAws,
  FaPhp,
  //FaRestApi,
  //FaAnaconda,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiFlutter,
  SiTypescript,
  SiRedux,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiFirebase,
  //SiAmazonwebservices,
  SiAndroid,
  SiGooglecloud,
  SiJira,
  SiWordpress,
} from "react-icons/si";

export default function AboutSection() {
  const frontendSkills = [
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
    { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
    { name: "TailwindCSS", icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: "Flutter", icon: <SiFlutter className="text-sky-500" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="text-violet-500" /> },
    { name: "WordPress", icon: <SiWordpress className="text-blue-700" /> },
    { name: "Android", icon: <SiAndroid className="text-green-600" /> },
  ];

  const backendSkills = [
    { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
    {
      name: "Express.js",
      icon: <SiExpress className="text-slate-700 dark:text-white" />,
    },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
    { name: "Java", icon: <FaJava className="text-blue-600" /> },
    { name: "Python", icon: <FaPython className="text-blue-500" /> },
    { name: "PHP", icon: <FaPhp className="text-purple-500" /> },
  ];

  const toolsSkills = [
    { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
    { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
    {
      name: "Google Cloud",
      icon: <SiGooglecloud className="text-blue-500" />,
    },
    { name: "Figma", icon: <FaFigma className="text-pink-500" /> },
    { name: "JIRA", icon: <SiJira className="text-blue-600" /> },
    { name: "Code", icon: <FaCode className="text-blue-500" /> },
    { name: "AWS", icon: <FaAws className="text-orange-500" /> },
  ];

  return (
    <section
      id="about"
      className="section-padding border-t border-slate-200 dark:border-slate-800"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About Me"
          title="Who I Am"
          description="MCA graduate and passionate software developer with experience in full-stack development, mobile applications, and web technologies. I focus on building scalable, user-friendly applications for real-world use."
        />

        <div className="space-y-8">
          {/* Education Section */}
          <motion.article
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45 }}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/60"
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
              Education
            </h3>

            <div className="mt-2 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500" />

            <div className="mt-6 space-y-4">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-800/60">
  <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
    
    {/* Left Content */}
    <div>
      <p className="text-base font-semibold text-slate-900 dark:text-slate-100">
        Master of Computer Applications (MCA)
      </p>

      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
        Manipal Institute of Technology, Udupi
      </p>

      <p className="mt-2 text-xs font-medium uppercase tracking-wide text-cyan-700 dark:text-cyan-300">
        2023 - 2025
      </p>
    </div>

    {/* Logo */}
    <div className="flex justify-center md:justify-end">
      <img
        src={manipalLogo}
        alt="Manipal Institute of Technology"
        className="h-24 w-auto object-contain opacity-95 transition duration-300 hover:scale-105"
      />
    </div>
  </div>
</div>

<div className="rounded-xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-800/60">
  <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
    
    {/* Left Content */}
    <div>
      <p className="text-base font-semibold text-slate-900 dark:text-slate-100">
        Bachelor of Computer Applications (BCA)
      </p>

      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
        Vivekananda College, Puttur
      </p>

      <p className="mt-2 text-xs font-medium uppercase tracking-wide text-cyan-700 dark:text-cyan-300">
        2020 - 2023
      </p>
    </div>

    {/* Logo */}
    <div className="flex justify-center md:justify-end">
      <img
        src={vivekanandaLogo}
        alt="Vivekananda College"
        className="h-24 w-auto object-contain opacity-95 transition duration-300 hover:scale-105"
      />
    </div>
  </div>
</div>
            </div>
          </motion.article>

          {/* Certifications Section */}
          <motion.article
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/60"
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
              Certifications
            </h3>

            <div className="mt-2 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500" />

            <div className="mt-8 overflow-hidden">
  <div
    className="flex snap-x snap-mandatory gap-6 overflow-x-scroll md:overflow-x-auto scroll-smooth pb-4 scrollbar-hide"
  >
    {Array.from({
      length: Math.ceil(certifications.length / 6),
    }).map((_, pageIndex) => {
      const items = certifications.slice(
        pageIndex * 6,
        pageIndex * 6 + 6
      );

      return (
        <div
          key={pageIndex}
          className="grid w-full shrink-0 snap-center gap-5 md:grid-cols-2"
        >
          {items.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
              }}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-800/60"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h4 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                    {cert.title}
                  </h4>

                  <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-cyan-700 dark:text-cyan-300">
                    {cert.provider}
                  </p>

                  <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {cert.description}
                  </p>

                  <span className="mt-4 inline-flex rounded-full bg-cyan-100 px-3 py-1 text-xs font-medium text-cyan-700 dark:bg-cyan-900/40 dark:text-cyan-300">
                    {cert.category}
                  </span>
                </div>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 rounded-xl bg-cyan-500 px-5 py-2 text-xs font-semibold text-white transition hover:bg-cyan-600"
                >
                  View
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      );
    })}
  </div>

  {/* Pagination Dots */}
  <div className="mt-6 flex justify-center gap-3">
    {Array.from({
      length: Math.ceil(certifications.length / 6),
    }).map((_, index) => (
      <div
        key={index}
        className="h-2.5 w-2.5 rounded-full bg-cyan-400/70"
      />
    ))}
  </div>
</div>
          </motion.article>

          {/* Skills Section */}
<article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/60">
  <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
    My Skills
  </h3>

  <div className="mt-2 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500" />

  <div className="mt-10 space-y-12">
    {/* Frontend */}
    <div>
      <h4 className="text-xl font-semibold text-slate-800 dark:text-slate-100">
        Frontend
      </h4>

      <div className="mt-2 h-1 w-12 rounded-full bg-gradient-to-r from-cyan-500 to-pink-500" />

      <div className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
        {frontendSkills.map((skill) => (
          <motion.div
            key={skill.name}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:shadow-lg dark:border-slate-700 dark:bg-slate-800/60"
          >
            <div className="text-5xl">{skill.icon}</div>

            <p className="mt-5 text-sm font-semibold text-slate-700 dark:text-slate-200">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </div>
    </div>

    {/* Backend */}
    <div>
      <h4 className="text-xl font-semibold text-slate-800 dark:text-slate-100">
        Backend
      </h4>

      <div className="mt-2 h-1 w-12 rounded-full bg-gradient-to-r from-cyan-500 to-pink-500" />

      <div className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
        {backendSkills.map((skill) => (
          <motion.div
            key={skill.name}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:shadow-lg dark:border-slate-700 dark:bg-slate-800/60"
          >
            <div className="text-5xl">{skill.icon}</div>

            <p className="mt-5 text-sm font-semibold text-slate-700 dark:text-slate-200">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </div>
    </div>

    {/* Tools */}
    <div>
      <h4 className="text-xl font-semibold text-slate-800 dark:text-slate-100">
        Tools
      </h4>

      <div className="mt-2 h-1 w-12 rounded-full bg-gradient-to-r from-cyan-500 to-pink-500" />

      <div className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
        {toolsSkills.map((skill) => (
          <motion.div
            key={skill.name}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:shadow-lg dark:border-slate-700 dark:bg-slate-800/60"
          >
            <div className="text-5xl">{skill.icon}</div>

            <p className="mt-5 text-sm font-semibold text-slate-700 dark:text-slate-200">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</article>
        </div>
      </div>
    </section>
  );
}