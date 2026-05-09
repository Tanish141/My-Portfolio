import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa6";
import type { Experience, NavItem, Project, Skill, SocialLink } from "../types";

export const navItems: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", url: "https://github.com/Tanish141", icon: FaGithub },
  { label: "LinkedIn", url: "https://linkedin.com/in/tanish-s", icon: FaLinkedin },
  { label: "Email", url: "mailto:mrtanish14@gmail.com", icon: FaEnvelope },
];

export const skills: Skill[] = [
  { name: "React", level: 90 },
  { name: "Flutter", level: 88 },
  { name: "Firebase", level: 86 },
  { name: "Python", level: 84 },
  { name: "Java", level: 80 },
  { name: "C++", level: 78 },
  { name: "SQL", level: 83 },
  { name: "MongoDB", level: 82 },
  { name: "MySQL", level: 81 },
  { name: "Docker", level: 77 },
  { name: "AWS", level: 74 },
  { name: "GCP", level: 70 },
];

export const certifications = [
  {
    title: "No-Code Machine Learning Using Amazon AWS SageMaker Canvas",
    provider: "Udemy",
    description:
      "Learned no-code machine learning workflows using AWS SageMaker Canvas, including data preparation, model building, predictions, and cloud-based AI solutions.",
    link: "https://www.udemy.com/certificate/UC-94d206a7-f5d1-40ed-8099-98f71efac07a/",
    category: "AI/ML",
  },
  {
    title: "Operations Job Simulation",
    provider: "Goldman Sachs by Forage",
    description:
      "Completed Goldman Sachs' Operations Job Simulation program through Forage, gaining practical experience in operational workflows, transaction handling, and foundations of investment banking operations.",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/MBA4MnZTNFEoJZGnk/wNge9cjzNTXD2acrv_MBA4MnZTNFEoJZGnk_BxJJ5kJGwEpi7BF6C_1733920359295_completion_certificate.pdf",
    category: "Operations",
  },
  {
    title: "Software Engineer (Problem Solving)",
    provider: "HackerRank",
    description:
      "Validated problem-solving, programming fundamentals, and software engineering knowledge.",
    link: "https://www.hackerrank.com/certificates/a6e98eee5f0d",
    category: "Programming",
  },
  {
    title: "Agile Scrum Methodology",
    provider: "Coursera",
    description:
      "Learned Agile development workflows, sprint planning, Scrum principles, and collaboration practices.",
    link: "https://www.coursera.org/account/accomplishments/verify/AVHAMCERMIP4",
    category: "Project Management",
  },
  {
    title: "Architecting with Google Compute Engine",
    provider: "Google",
    description:
      "Explored cloud infrastructure deployment, virtual machines, networking, and scalable architecture on GCP.",
    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/NK6ULU2LHTLV",
    category: "Cloud",
  },
  {
    title: "Project Management",
    provider: "Coursera",
    description:
      "Learned project planning, task management, team collaboration, risk handling, and core project management principles for successful software delivery.",
    link: "https://www.coursera.org/account/accomplishments/verify/RJY4QSZNYADR",
    category: "Project Management",
  },
];

export const projects: Project[] = [
  {
    title: "Movie Review Sentiment Analysis",
    description:
      "An NLP-based web app that classifies movie reviews as positive, negative, or neutral to help users quickly understand audience sentiment.",
    domain: "Machine Learning",
    techStack: ["Python", "React", "Flask", "Pandas", "Scikit-learn"],
    features: [
      "Text preprocessing pipeline with tokenization and stop-word removal",
      "Trained sentiment model with confidence-based predictions",
      "Interactive frontend for real-time review analysis",
    ],
    githubUrl: "https://github.com/Tanish141/Movie-Recommendation-system-using-Cosine-Similarity",
    liveUrl: "https://github.com/Tanish141",
    bannerGradient: "from-cyan-500 via-sky-500 to-indigo-500",
  },
  {
    title: "Flutter Movie App",
    description:
      "Flickd - Flutter Movie App Flickd is a sleek and modern Flutter application that uses REST APIs to fetch and display movie data. The app provides users with an engaging experience to browse movies, check details, and search by categories.",
    domain: "Movies App (REST API)",
    techStack: ["Flutter", "Riverpod", "Dart", "REST API"],
    features: [
      "REST API integration for fetching real-time movie data and updates",
      "Dynamic UI displaying movie posters, ratings, release dates, and descriptions",
      "Search functionality with category-based filtering such as Popular and Upcoming",
      "Responsive design optimized for mobile, tablet, and desktop devices",
      "Blurred cinematic backgrounds generated dynamically from movie posters",
      "Efficient lazy-loading for smooth scrolling and improved performance",
    ],
    githubUrl: "https://github.com/Tanish141/REST_API_Flutter",
    liveUrl: "https://github.com/Tanish141",
    bannerGradient: "from-emerald-500 via-cyan-500 to-blue-500",
  },
  {
    title: "Emotion Detection in Text Using NLTK",
    description:
      "This project demonstrates emotion detection in text using Python's Natural Language Toolkit (NLTK) and the VADER (Valence Aware Dictionary and sEntiment Reasoner) sentiment analysis tool.",
    domain: "Trust & Safety",
    techStack: ["Python", "Machine Learning", "NLTK"],
    features: [
      "Feature engineering for linguistic and behavioral signals",
      "Binary classification model for fake review prediction",
      "Dashboard interface to inspect and validate flagged content",
    ],
    githubUrl: "https://github.com/Tanish141/Detect-Emotion-in-TExt-Using-Natural-Language-ToolKit",
    liveUrl: "https://github.com/Tanish141",
    bannerGradient: "from-violet-500 via-fuchsia-500 to-pink-500",
  },
  {
    title: "Shuttle Score Application",
    description:
      "A cross-platform scoring app for badminton matches with player tracking, score history, and quick-match analytics.",
    domain: "Sports Utility",
    techStack: ["Flutter", "Firebase", "Dart", "Cloud Functions"],
    features: [
      "Fast score input flow optimized for live match usage",
      "Persistent match records and player performance summaries",
      "Responsive mobile-first UI with offline-friendly behavior",
    ],
    githubUrl: "https://github.com/Tanish141/ShuttleScore_App_Application",
    liveUrl: "https://github.com/Tanish141",
    bannerGradient: "from-amber-500 via-orange-500 to-rose-500",
  },
];

export const experiences: Experience[] = [
  {
    role: "App Developer",
    company: "Zoha Pvt Ltd.",
    duration: "Nov 2025 - Mar 2026",
    location: "Mangalore (Remote)",
    summary:
      "Developed a real-world mobile application with practical business use cases and a complete user-first interface.",
    achievements: [
      "Designed and implemented a complete, responsive UI for production use",
      "Built app flows around real business requirements",
      "Delivered features using Firebase Authentication, Firestore, and Cloud Messaging",
    ],
    technologies: ["Flutter", "Dart", "Firebase", "Figma"],
  },
  {
    role: "Web Developer Intern",
    company: "GAOTek Inc.",
    duration: "Aug 2025 - Feb 2026",
    location: "US (Remote)",
    summary:
      "Contributed to WordPress website development and customization while improving UI quality, functionality, and SEO.",
    achievements: [
      "Implemented responsive components and plugins for client-specific requirements",
      "Optimized websites for performance and better search visibility",
      "Contributed to deployed live websites and ongoing maintenance",
    ],
    technologies: ["WordPress", "MySQL", "HTML", "CSS", "JavaScript", "PHP"],
  },
  {
    role: "Website Testing Intern",
    company: "GAOTek Inc.",
    duration: "Oct 2025 - Dec 2025",
    location: "US (Remote)",
    summary:
      "Performed semantic, responsive, and SEO-focused website testing to improve quality and standards compliance.",
    achievements: [
      "Validated meta titles, descriptions, and heading hierarchy for SEO compliance",
      "Identified layout, padding, and link-structure issues across pages",
      "Reported actionable QA findings using structured testing workflows",
    ],
    technologies: ["Header Checker", "Detailed SEO Extension", "Browser DevTools"],
  },
  {
    role: "Full Stack Android Developer",
    company: "CleanCode",
    duration: "Feb 2025 - Jul 2025",
    location: "Mangalore (Remote)",
    summary:
      "Built a full Flutter event app with booking, notification, and digital ticketing workflows for active users.",
    achievements: [
      "Delivered user registration, event booking, and ticketing features for 2,000+ users",
      "Implemented QR-based digital ticketing and real-time push notifications",
      "Added OTP-based authentication and role-based access control",
    ],
    technologies: ["Flutter", "Dart", "Firebase", "Cloud Messaging", "Figma"],
  },
  {
    role: "Research and Development Intern",
    company: "CodingJr",
    duration: "Feb 2025 - May 2025",
    location: "Bangalore (Remote)",
    summary:
      "Worked on AI-focused research tasks and built prototype interfaces for experimentation and demo workflows.",
    achievements: [
      "Researched AI solution approaches and developed an LLAMA-based copilot prototype",
      "Created responsive HTML/CSS interfaces for project testing",
      "Successfully delivered milestones with strong performance feedback",
    ],
    technologies: ["Python", "LLAMA", "HTML5", "CSS3"],
  },
  {
    role: "AI Content Specialist",
    company: "NewsXPartners",
    duration: "Feb 2025 - Jun 2025",
    location: "US (Remote)",
    summary:
      "Produced AI-enhanced content at scale and improved website search performance through structured SEO practices.",
    achievements: [
      "Published 15-20 AI-enhanced articles daily matching editorial quality targets",
      "Promoted to SEO responsibilities with on-page optimization focus",
      "Improved engagement through strategic internal and external linking",
    ],
    technologies: ["SEO Analytics", "Content Management Systems", "AI Content Tools"],
  },
];
