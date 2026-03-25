import type { FormEvent } from "react";
import { useState } from "react";
import { motion } from "motion/react";
import {
  Menu,
  X,
  Shield,
  BarChart,
  Cpu,
  Award,
  Mail,
  GraduationCap,
  Download,
  ArrowRight,
  Send,
  MapPin,
  ExternalLink,
} from "lucide-react";
import profileImage from "../images/profile.png";
import viennaImage from "../images/vienna_aus.jpg";
import goldMedalImage from "../images/gold_medal.jpg";
import gaitTrainerGif from "../images/papers/gt.gif";
import sharedAutonomyGif from "../images/papers/icra.gif";
import manualPrecisionGif from "../images/papers/human-human.gif";
import reassembleGif from "../images/papers/reassamble.gif";
import variableImpedanceGif from "../images/papers/vilc.gif";

const scholarUrl = "https://scholar.google.com/citations?user=n81CLlAAAAAJ&hl=en";
const cvUrl = "https://shailjadav.github.io/sj_cv.pdf";
const siteUrl = "https://shailjadav.github.io/";
const orcidUrl = "https://orcid.org/0000-0002-9159-1277";
const emailAddress = "shail.jadav@tuwien.ac.at";

const publications = [
  {
    title: "Partner familiarity enhances performance in a manual precision task",
    journal: "Nature Scientific Reports",
    year: "2025",
    authors: "J. Heidersberger, J. Kaiser, S. Jadav, et al.",
    link: "https://doi.org/10.1038/s41598-025-03341-9",
    linkLabel: "Access Article",
  },
  {
    title: "REASSEMBLE: A Multimodal Dataset for Contact-rich Robotic Assembly and Disassembly",
    journal: "Robotics: Science and Systems",
    year: "2025",
    authors: "D. Sliwowski, S. Jadav, S. Stanovcic, et al.",
    link: "https://researchdata.tuwien.ac.at/records/0ewrv-8cb44",
    linkLabel: "View Dataset",
  },
  {
    title: "Shared Autonomy via Variable Impedance Control and Virtual Potential Fields for Encoding Human Demonstrations",
    journal: "ICRA",
    year: "2024",
    authors: "S. V. Jadav, J. Heidersberger, C. Ott, D. Lee",
    link: "https://doi.org/10.1109/ICRA57147.2024.10610761",
    linkLabel: "Open Paper",
  },
  {
    title: "Configuration and force-field aware variable impedance control with faster re-learning",
    journal: "Journal of Intelligent & Robotic Systems",
    year: "2024",
    authors: "S. V. Jadav, H. J. Palanthandalam-Madapusi",
    link: "https://dblp.org/rec/journals/jirs/JadavP24",
    linkLabel: "Open Record",
  },
  {
    title: "A Machine-Learning-Based Method to Detect Degradation of Motor Control Stability",
    journal: "MDPI Applied Sciences",
    year: "2023",
    authors: "V. Shah, D. Vyas, S. Jadav, H. J. Palanthandalam-Madapusi",
    link: "https://doi.org/10.3390/app13179502",
    linkLabel: "Access Article",
  },
  {
    title: "Kinematic Performance of a Customizable Single Degree-of-Freedom Gait Trainer",
    journal: "ASME Journal of Medical Devices",
    year: "2024",
    authors: "S. Jadav, K. S. Karvaje, S. D. Kadam, et al.",
    link: "https://doi.org/10.1115/1.4065120",
    linkLabel: "Open Paper",
  },
];

const honors = [
  {
    title: "Gold Medal for Outstanding Innovation",
    org: "IIT Gandhinagar 13th Convocation",
    year: "2024",
    desc: "Awarded after the Ph.D. in Mechanical Engineering for research innovation in human-inspired learning controllers.",
  },
  {
    title: "DST NIDHI PRAYAS Grant",
    org: "Government of India",
    year: "2023",
    desc: "Supported the development of adaptive motion controllers and translational robotics ideas.",
  },
  {
    title: "IEEE RAS and SPARC Travel Grants",
    org: "International research travel support",
    year: "2023-2024",
    desc: "Enabled international collaborations and conference participation in robotics and control.",
  },
  {
    title: "IITGN Overseas Research Fellowship",
    org: "IIT Gandhinagar",
    year: "2023",
    desc: "Supported the TU Wien research residency; also includes a Boeing BUILD Bootcamp regional win.",
  },
];

const projects = {
  lead: {
    badge: "Manual Precision Study",
    title: "Partner Familiarity in Physical Collaboration",
    description:
      "Studies how repeated haptic collaboration with the same partner improves fluency, predictability, and performance in demanding manual precision tasks.",
    link: "https://doi.org/10.1038/s41598-025-03341-9",
    image: manualPrecisionGif,
    focus: ["Partner Familiarity", "Haptic Coordination", "Human-Human Learning"],
  },
  sharedAutonomy: {
    title: "Shared Autonomy for Co-Manufacturing",
    description:
      "Introduces SALADS, combining variable impedance control and virtual potential fields to encode human demonstrations for collaborative manufacturing tasks.",
    link: "https://doi.org/10.1109/ICRA57147.2024.10610761",
    image: sharedAutonomyGif,
    tags: ["Shared Autonomy", "ICRA 2024"],
  },
  reassemble: {
    title: "REASSEMBLE Dataset",
    description:
      "A multimodal dataset for long-horizon, contact-rich assembly and disassembly with synchronized force, pose, and video streams.",
    link: "https://researchdata.tuwien.ac.at/records/0ewrv-8cb44",
    image: reassembleGif,
  },
  impedance: {
    title: "Force-Field Aware Variable Impedance Control",
    description:
      "Adapts impedance to robot configuration and divergent force fields, enabling faster re-learning and more stable manipulation.",
    link: "https://dblp.org/rec/journals/jirs/JadavP24",
    image: variableImpedanceGif,
  },
  gait: {
    title: "Customizable Gait Trainer",
    description:
      "Demonstrates a cost-effective single degree-of-freedom gait trainer with customizable trajectories for neuromuscular therapy.",
    link: "https://doi.org/10.1115/1.4065120",
    image: gaitTrainerGif,
    tags: ["Rehabilitation Robotics", "Gait Therapy"],
  },
};

const socialLinks = [
  { name: "Google Scholar", icon: GraduationCap, href: scholarUrl },
  { name: "Curriculum Vitae", icon: Download, href: cvUrl },
  { name: "ORCID", icon: Shield, href: orcidUrl },
  { name: "Email", icon: Mail, href: `mailto:${emailAddress}` },
];

const footerLinks = [
  { name: "Curriculum Vitae", href: cvUrl },
  { name: "ORCID", href: orcidUrl },
  { name: "Google Scholar", href: scholarUrl },
  { name: "Personal Site", href: siteUrl },
];

const navItems = ["Home", "Publications", "Projects", "About", "Contact"] as const;

// Custom icons to match the design's Material Symbols
const SecurityIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const AnalyticsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
  </svg>
);

const MemoryIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <rect x="9" y="9" width="6" height="6" />
    <line x1="9" y1="1" x2="9" y2="4" />
    <line x1="15" y1="1" x2="15" y2="4" />
    <line x1="9" y1="20" x2="9" y2="23" />
    <line x1="15" y1="20" x2="15" y2="23" />
    <line x1="20" y1="9" x2="23" y2="9" />
    <line x1="20" y1="15" x2="23" y2="15" />
    <line x1="1" y1="9" x2="4" y2="9" />
    <line x1="1" y1="15" x2="4" y2="15" />
  </svg>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  const handleInquirySubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const fullName = String(formData.get("fullName") ?? "").trim();
    const organization = String(formData.get("organization") ?? "").trim();
    const inquiryType = String(formData.get("inquiryType") ?? "General Inquiry").trim();
    const message = String(formData.get("message") ?? "").trim();

    const subject = fullName ? `${inquiryType} from ${fullName}` : inquiryType;
    const body = [
      fullName ? `Full Name: ${fullName}` : undefined,
      organization ? `Organization: ${organization}` : undefined,
      "",
      "Message:",
      message || "No message provided.",
    ]
      .filter((line) => line !== undefined)
      .join("\n");

    window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="min-h-screen bg-background selection:bg-primary selection:text-white scroll-smooth">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/70 backdrop-blur-3xl border-b border-primary/5">
        <div className="flex justify-between items-center w-full px-5 sm:px-8 py-4 sm:py-6 max-w-screen-2xl mx-auto">
          <a href="#home" className="font-headline text-xl sm:text-2xl font-black tracking-tighter text-primary">
            Shail Jadav
          </a>
          <div className="hidden md:flex gap-10 items-center">
            {navItems.map((item) => (
              <a
                key={item}
                href={item === "Publications" ? scholarUrl : `#${item.toLowerCase()}`}
                target={item === "Publications" ? "_blank" : undefined}
                rel={item === "Publications" ? "noopener noreferrer" : undefined}
                className={`font-label text-xs tracking-widest uppercase transition-colors duration-300 ${
                  item === "Home"
                    ? "text-primary border-b border-primary pb-1"
                    : "text-secondary hover:text-primary"
                }`}
              >
                {item}
              </a>
            ))}
          </div>
          <button
            type="button"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            className="md:hidden flex items-center justify-center text-primary"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div id="mobile-navigation" className="md:hidden border-t border-primary/5 bg-background/95 backdrop-blur-3xl">
            <div className="px-5 py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={item === "Publications" ? scholarUrl : `#${item.toLowerCase()}`}
                  target={item === "Publications" ? "_blank" : undefined}
                  rel={item === "Publications" ? "noopener noreferrer" : undefined}
                  className="font-label text-xs tracking-widest uppercase text-primary py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main className="pt-28 sm:pt-32 pb-16 sm:pb-20 px-5 sm:px-8 max-w-screen-2xl mx-auto">
        {/* Hero Section */}
        <header id="home" className="mb-20 sm:mb-24 md:mb-40 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          <div className="lg:col-span-8">
            <motion.p
              {...fadeIn}
              className="font-label text-xs tracking-[0.2em] uppercase text-secondary mb-6"
            >
              Roboticist • Postdoctoral Research Fellow
            </motion.p>
            <motion.h1
              {...fadeIn}
              transition={{ delay: 0.2 }}
              className="font-headline text-4xl sm:text-5xl md:text-8xl font-black leading-tight tracking-tighter text-primary mb-10 sm:mb-12"
            >
              Enabling robots that move <span className="italic font-normal">with people</span>, not{" "}
              <span className="italic font-normal">around them</span>.
            </motion.h1>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              className="h-px bg-primary/20 mb-12"
            />
          </div>
          <motion.div
            {...fadeIn}
            transition={{ delay: 0.6 }}
            className="lg:col-span-4 relative max-w-sm sm:max-w-md lg:max-w-none mx-auto w-full"
          >
            <div className="aspect-square bg-surface-container-highest rounded-full overflow-hidden border-8 border-white shadow-2xl">
              <img
                src={profileImage}
                alt="Shail Jadav"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-primary text-white p-6 rounded-full shadow-xl">
              <Award className="w-8 h-8" />
            </div>
          </motion.div>
        </header>

        {/* Profile Section */}
        <motion.section
          {...fadeIn}
          className="mb-24 sm:mb-32 bg-surface-container-low p-6 sm:p-8 md:p-20 rounded-xl relative overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center relative z-10">
            <div>
              <h2 className="font-headline text-3xl md:text-4xl font-bold mb-8">Research Profile</h2>
              <p className="text-lg leading-relaxed mb-6">
                I am a Postdoctoral Research Fellow at the Autonomous Systems Lab, Technical
                University of Vienna (TU Wien), where I work with{" "}
                <a
                  href="https://www.tuwien.at/en/etit/ict/asl/team/dongheui-lee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline decoration-1 underline-offset-4 hover:text-secondary transition-colors"
                >
                  Prof. Dongheui Lee
                </a>{" "}
                on safe human-robot collaboration, force-aware manipulation, and learning-based
                robotic systems. My research focuses on developing safe and efficient human-robot
                interaction frameworks grounded in robotics and control theory, with applications in
                robotic manipulators, grasping systems, and contact-rich tasks.
              </p>
              <p className="text-lg leading-relaxed text-secondary italic">
                I received my Ph.D. in Mechanical Engineering from IIT Gandhinagar and have also
                held research residencies at TU Wien and The University of Texas at Austin.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] bg-surface-container-highest overflow-hidden rounded-lg">
                <img
                  src={sharedAutonomyGif}
                  alt="Shared autonomy research"
                  className="w-full h-full object-cover grayscale contrast-125 opacity-90"
                />
              </div>
              <div className="hidden md:block absolute -right-4 top-1/2 -rotate-90 origin-right">
                <span className="font-label text-[10px] tracking-widest uppercase text-secondary">
                  Fig 1.1: Human Collaboration Study
                </span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Selected Publications */}
        <section id="publications" className="mb-32">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-12 gap-8">
            <div>
              <p className="font-label text-xs tracking-[0.2em] uppercase text-secondary mb-4">
                Scholarly Contributions
              </p>
              <h2 className="font-headline text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter text-primary">
                Selected Publications
              </h2>
            </div>
            <a
              href={scholarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-label text-[10px] tracking-widest uppercase text-primary border-b border-primary pb-1 hover:text-secondary hover:border-secondary transition-all"
            >
              View All on Google Scholar
            </a>
          </div>

          <div className="space-y-12">
            {publications.map((pub, i) => (
              <motion.div
                key={pub.title}
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
                className="group border-b border-primary/5 pb-8"
              >
                <div className="flex flex-col md:flex-row justify-between gap-4 mb-4">
                  <h4 className="font-headline text-2xl font-bold group-hover:text-primary transition-colors max-w-2xl">
                    {pub.title}
                  </h4>
                  <span className="font-label text-xs tracking-widest uppercase text-secondary">
                    {pub.year}
                  </span>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-baseline gap-4">
                  <p className="text-sm text-secondary font-body italic">
                    {pub.authors} — <span className="font-bold not-italic">{pub.journal}</span>
                  </p>
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[10px] font-label tracking-widest uppercase text-primary opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all"
                  >
                    {pub.linkLabel} <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Selected Projects */}
        <section id="projects" className="mb-32">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-12 gap-8">
            <div>
              <p className="font-label text-xs tracking-[0.2em] uppercase text-secondary mb-4">
                Research & Technical Execution
              </p>
              <h2 className="font-headline text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter text-primary">
                Selected Projects
              </h2>
            </div>
            <p className="font-body text-sm text-secondary italic max-w-xs md:text-right">
              Recent work across human-robot collaboration, contact-rich manipulation,
              rehabilitation, and adaptive control.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <motion.div {...fadeIn} className="md:col-span-8 group">
              <div className="aspect-[16/9] bg-surface-container-highest overflow-hidden rounded-xl relative mb-8">
                <img
                  src={projects.lead.image}
                  alt={projects.lead.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute bottom-6 left-6 bg-black text-white px-4 py-2 text-[10px] tracking-widest uppercase font-label">
                  {projects.lead.badge}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <h3 className="font-headline text-3xl font-bold mb-4">{projects.lead.title}</h3>
                  <p className="text-secondary leading-relaxed mb-6">{projects.lead.description}</p>
                  <a
                    href={projects.lead.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-label tracking-widest uppercase text-primary hover:gap-4 transition-all"
                  >
                    View Publication <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
                <div>
                  <p className="font-label text-[10px] tracking-widest uppercase text-secondary mb-4">
                    Focus Areas
                  </p>
                  <ul className="text-xs space-y-2 font-body text-primary">
                    {projects.lead.focus.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              {...fadeIn}
              className="md:col-span-4 bg-surface-container-low p-8 rounded-xl border border-black/5 group"
            >
              <p className="font-label text-[10px] tracking-widest uppercase text-secondary mb-4">
                Project 002
              </p>
              <h3 className="font-headline text-2xl font-bold mb-4">{projects.sharedAutonomy.title}</h3>
              <p className="text-sm text-secondary leading-relaxed mb-6">
                {projects.sharedAutonomy.description}
              </p>
              <a
                href={projects.sharedAutonomy.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[10px] font-label tracking-widest uppercase text-primary hover:gap-3 transition-all mb-8"
              >
                Read Paper <ArrowRight className="w-3 h-3" />
              </a>
              <div className="aspect-square bg-surface-container-highest overflow-hidden rounded-lg mb-8">
                <img
                  src={projects.sharedAutonomy.image}
                  alt={projects.sharedAutonomy.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {projects.sharedAutonomy.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-label tracking-widest uppercase border border-primary/10 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              {...fadeIn}
              className="md:col-span-5 bg-surface-container-low p-8 rounded-xl border border-black/5 flex flex-col justify-between group"
            >
              <div>
                <h3 className="font-headline text-2xl font-bold mb-4">{projects.reassemble.title}</h3>
                <p className="text-sm text-secondary leading-relaxed mb-6">
                  {projects.reassemble.description}
                </p>
                <a
                  href={projects.reassemble.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[10px] font-label tracking-widest uppercase text-primary hover:gap-3 transition-all mb-8"
                >
                  View Dataset <ArrowRight className="w-3 h-3" />
                </a>
              </div>
              <div className="aspect-[16/9] bg-black overflow-hidden rounded-lg">
                <img
                  src={projects.reassemble.image}
                  alt={projects.reassemble.title}
                  className="w-full h-full object-cover opacity-80 grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </motion.div>

            <motion.div
              {...fadeIn}
              className="md:col-span-7 bg-white p-8 rounded-xl border border-black/5 shadow-sm flex flex-col md:flex-row gap-8 group"
            >
              <div className="flex-1">
                <h3 className="font-headline text-3xl font-bold mb-6 italic">{projects.impedance.title}</h3>
                <p className="text-sm text-secondary leading-relaxed mb-6">
                  {projects.impedance.description}
                </p>
                <a
                  href={projects.impedance.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[10px] font-label tracking-widest uppercase text-primary hover:gap-3 transition-all mb-8"
                >
                  Explore Methodology <ArrowRight className="w-3 h-3" />
                </a>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-[10px] font-label tracking-widest uppercase text-primary">
                    <Cpu className="w-4 h-4" />
                    Adaptive Manipulation
                  </div>
                  <div className="flex items-center gap-3 text-[10px] font-label tracking-widest uppercase text-primary">
                    <BarChart className="w-4 h-4" />
                    Faster Re-learning
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 aspect-[3/4] bg-surface-container-highest overflow-hidden rounded-lg">
                <img
                  src={projects.impedance.image}
                  alt={projects.impedance.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </motion.div>

            <motion.div
              {...fadeIn}
              className="md:col-span-12 bg-surface-container-low p-8 rounded-xl border border-black/5 flex flex-col md:flex-row gap-8 items-center group"
            >
              <div className="md:w-1/2 aspect-video bg-surface-container-highest overflow-hidden rounded-lg">
                <img
                  src={projects.gait.image}
                  alt={projects.gait.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="md:w-1/2">
                <h3 className="font-headline text-3xl font-bold mb-4">{projects.gait.title}</h3>
                <p className="text-secondary leading-relaxed mb-6">{projects.gait.description}</p>
                <a
                  href={projects.gait.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-label tracking-widest uppercase text-primary hover:gap-4 transition-all mb-8"
                >
                  View Case Study <ArrowRight className="w-4 h-4" />
                </a>
                <div className="flex flex-wrap gap-2">
                  {projects.gait.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-label tracking-widest uppercase border border-primary/10 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Academic Journey */}
        <section id="about" className="mb-32">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/3">
              <h3 className="font-headline text-2xl font-bold md:sticky md:top-32">
                Academic <br />
                Journey
              </h3>
            </div>
            <div className="md:w-2/3 space-y-20">
              <motion.div {...fadeIn} className="group">
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="font-headline text-4xl text-outline-variant group-hover:text-primary transition-colors">
                    01
                  </span>
                  <h4 className="font-headline text-2xl font-bold">Ph.D. at IIT Gandhinagar</h4>
                </div>
                <p className="text-xs font-label tracking-widest uppercase text-secondary mb-6">
                  India • July 2018 — December 2023
                </p>
                <div className="bg-white p-8 border-l border-primary/10 shadow-sm">
                  <p className="text-lg leading-relaxed mb-6">
                    Worked with Prof. Harish Palanthandalam-Madapusi on human-inspired learning
                    controllers and motion planners for robotic manipulators. The doctoral work was
                    recognized at the 13th convocation with the institute gold medal for outstanding
                    innovation in 2024.
                  </p>
                  <div className="flex items-center gap-4 text-sm font-medium text-primary">
                    <Award className="w-5 h-5" />
                    <span>Gold Medalist, IIT Gandhinagar (2024)</span>
                  </div>
                </div>
              </motion.div>

              <motion.div {...fadeIn} className="group">
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="font-headline text-4xl text-outline-variant group-hover:text-primary transition-colors">
                    02
                  </span>
                  <h4 className="font-headline text-2xl font-bold">Research Roles at TU Wien</h4>
                </div>
                <p className="text-xs font-label tracking-widest uppercase text-secondary mb-6">
                  Vienna, Austria • May 2023 — Present
                </p>
                <div className="bg-white p-8 border-l border-primary/10 shadow-sm">
                  <p className="text-lg leading-relaxed">
                    Began at TU Wien as a visiting research scholar working with Prof. Dongheui Lee
                    and Prof. Christian Ott on shared autonomy for human-robot interaction, then
                    continued as a Postdoctoral Research Fellow from July 2024. Current work spans
                    safe human-robot collaboration, force-aware manipulation, and robot learning in
                    the Autonomous Systems Lab.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Recognition & Honors */}
        <section className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <h3 className="font-headline text-3xl md:text-5xl font-black tracking-tighter text-primary mb-12">
                Recognitions & Fellowships
              </h3>
              <div className="space-y-8">
                {honors.map((honor, i) => (
                  <motion.div
                    key={honor.title}
                    {...fadeIn}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-6 items-start group"
                  >
                    <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1 gap-1 sm:gap-4">
                        <h4 className="font-headline text-xl font-bold">{honor.title}</h4>
                        <span className="font-label text-[10px] tracking-widest uppercase text-secondary">
                          {honor.year}
                        </span>
                      </div>
                      <p className="text-xs font-label tracking-widest uppercase text-primary mb-2">
                        {honor.org}
                      </p>
                      <p className="text-sm text-secondary leading-relaxed">{honor.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="aspect-square bg-surface-container-low rounded-2xl p-8 border border-black/5 relative overflow-hidden group">
                <img
                  src={goldMedalImage}
                  alt="Research recognition visual"
                  className="w-full h-full object-cover grayscale opacity-20 absolute inset-0 mix-blend-multiply group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Technical Expertise */}
        <section className="mb-32">
          <h3 className="font-headline text-3xl font-bold mb-12">Technical Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              {...fadeIn}
              className="col-span-1 md:col-span-2 bg-primary p-8 sm:p-10 text-white rounded-lg flex flex-col justify-between min-h-[300px] overflow-hidden relative"
            >
              <div className="relative z-10">
                <SecurityIcon />
                <h4 className="text-2xl font-bold mb-4 mt-4">Safe Human-Robot Collaboration</h4>
                <p className="opacity-80 leading-relaxed max-w-lg">
                  Designing shared autonomy systems, partner-aware interaction strategies, and
                  force-aware controllers for dense collaborative workspaces.
                </p>
              </div>
              <img
                src={sharedAutonomyGif}
                alt="Shared autonomy research"
                className="absolute right-0 bottom-0 w-1/2 h-full object-cover opacity-30 mix-blend-overlay grayscale"
              />
            </motion.div>

            <motion.div
              {...fadeIn}
              className="bg-surface-container-high p-8 sm:p-10 rounded-lg flex flex-col justify-between min-h-[300px]"
            >
              <AnalyticsIcon />
              <div>
                <h4 className="text-2xl font-bold mb-4">Nonlinear Control</h4>
                <p className="text-secondary leading-relaxed">
                  Applying Lyapunov-based design, variable impedance control, and redundancy-aware
                  optimization to manipulation and force interaction problems.
                </p>
              </div>
            </motion.div>

            <motion.div
              {...fadeIn}
              className="bg-surface-container-low p-8 sm:p-10 rounded-lg flex flex-col justify-between min-h-[300px]"
            >
              <MemoryIcon />
              <div>
                <h4 className="text-2xl font-bold mb-4">Robot Learning</h4>
                <p className="text-secondary leading-relaxed">
                  Learning from demonstrations, multimodal datasets, and adaptive interaction
                  patterns to build robots that improve with repeated collaboration.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-32">
          <div className="mb-20">
            <motion.h2
              {...fadeIn}
              className="font-headline text-4xl sm:text-6xl md:text-9xl font-black tracking-tighter text-primary mb-8"
            >
              Let&apos;s shape the next <br /> generation of collaborative robots.
            </motion.h2>
            <motion.p
              {...fadeIn}
              transition={{ delay: 0.2 }}
              className="font-body text-xl md:text-2xl text-secondary leading-relaxed max-w-3xl"
            >
              Email me about research collaborations, visiting students, or speaking invitations.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4 space-y-12">
              <div>
                <p className="font-label text-[10px] tracking-widest uppercase text-secondary mb-4">
                  Primary Contact
                </p>
                <p className="text-xs font-body text-secondary mb-2">Electronic Mail</p>
                <a
                  href={`mailto:${emailAddress}`}
                  className="text-xl sm:text-2xl font-headline font-bold border-b border-primary hover:text-secondary transition-colors break-all sm:break-normal"
                >
                  {emailAddress}
                </a>
              </div>

              <div>
                <p className="text-xs font-body text-secondary mb-2">Research Office</p>
                <p className="text-xl font-headline font-bold">TU Wien Autonomous Systems Lab</p>
                <p className="text-secondary leading-relaxed">
                  Institute of Computer Technology, Vienna, Austria
                </p>
              </div>

              <div className="bg-surface-container-low p-8 rounded-xl border border-black/5">
                <p className="font-label text-[10px] tracking-widest uppercase text-secondary mb-6">
                  Collaborations
                </p>
                <div className="space-y-6">
                  <div>
                    <p className="font-headline font-bold mb-2">Researchers & Peers</p>
                    <p className="text-xs text-secondary leading-relaxed">
                      Open to collaborations in safe human-robot collaboration, force-aware
                      manipulation, and robot learning.
                    </p>
                  </div>
                  <div>
                    <p className="font-headline font-bold mb-2">Visiting Students</p>
                    <p className="text-xs text-secondary leading-relaxed">
                      Please include your CV and a brief note about your research interests and fit.
                    </p>
                  </div>
                </div>
              </div>

              <div className="aspect-video bg-surface-container-highest rounded-xl overflow-hidden relative group">
                <img
                  src={viennaImage}
                  alt="Vienna, Austria"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[8px] font-label tracking-widest uppercase flex items-center gap-2">
                  <MapPin className="w-3 h-3" />
                  Vienna, Austria
                </div>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="bg-white p-8 md:p-12 rounded-xl border border-black/5 shadow-sm">
                <h3 className="font-headline text-3xl font-bold mb-12">Submit an Inquiry</h3>
                <form className="space-y-8" onSubmit={handleInquirySubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-label tracking-widest uppercase text-secondary">
                        Full Name
                      </label>
                      <input
                        name="fullName"
                        type="text"
                        placeholder="Your name"
                        className="w-full border-b border-primary/20 py-3 focus:border-primary outline-none transition-colors font-body"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-label tracking-widest uppercase text-secondary">
                        Organization
                      </label>
                      <input
                        name="organization"
                        type="text"
                        placeholder="University / Lab / Company"
                        className="w-full border-b border-primary/20 py-3 focus:border-primary outline-none transition-colors font-body"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-label tracking-widest uppercase text-secondary">
                      Inquiry Type
                    </label>
                    <select
                      name="inquiryType"
                      className="w-full border-b border-primary/20 py-3 focus:border-primary outline-none transition-colors font-body bg-transparent"
                    >
                      <option>Research Collaboration</option>
                      <option>Visiting Student Inquiry</option>
                      <option>Speaking Invitation</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-label tracking-widest uppercase text-secondary">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Briefly describe the nature of your inquiry..."
                      className="w-full border-b border-primary/20 py-3 focus:border-primary outline-none transition-colors font-body resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto justify-center bg-primary text-white px-8 py-4 rounded-lg font-label text-[10px] tracking-widest uppercase flex items-center gap-3 hover:gap-5 transition-all"
                  >
                    Dispatch Message <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-surface-container-low p-6 rounded-xl border border-black/5 flex flex-col items-center gap-4 hover:bg-white hover:shadow-md transition-all group"
                  >
                    <social.icon className="w-6 h-6 text-secondary group-hover:text-primary transition-colors" />
                    <span className="text-[8px] font-label tracking-widest uppercase text-secondary group-hover:text-primary transition-colors">
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full pt-20 pb-12 bg-surface-container-low">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-5 sm:px-8 max-w-screen-2xl mx-auto border-t border-black/5 pt-12">
          <div>
            <a href="#home" className="font-headline text-lg font-bold text-primary">
              Shail Jadav
            </a>
            <p className="mt-4 font-body text-sm leading-relaxed text-secondary max-w-sm">
              Postdoctoral Research Fellow at TU Wien working on safe human-robot collaboration,
              force-aware manipulation, and learning systems.
            </p>
          </div>
          <div className="flex flex-col md:items-end justify-between">
            <div className="flex flex-wrap gap-8">
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-primary transition-all underline decoration-1 underline-offset-4 font-body text-sm flex items-center gap-2"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <p className="mt-12 text-secondary font-body text-sm leading-relaxed md:text-right">
              © Shail Jadav.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
