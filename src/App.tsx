import profileImage from "../images/profile.png";
import goldMedalImage from "../images/gold_medal.jpg";
import gaitTrainerGif from "../images/papers/gt.gif";
import sharedAutonomyGif from "../images/papers/icra.gif";
import manualPrecisionGif from "../images/papers/human-human.gif";
import reassembleGif from "../images/papers/reassamble.gif";
import variableImpedanceGif from "../images/papers/vilc.gif";
import graspingGif from "../images/papers/grasping.gif";
import pdeyeGif from "../images/papers/PDEYE4.gif";
import lopalImage from "../images/papers/lopal.png";
import continuumGif from "../images/papers/continuum.gif";

const scholarUrl = "https://scholar.google.com/citations?user=n81CLlAAAAAJ&hl=en";
const cvUrl = "https://shailjadav.github.io/sj_cv.pdf";
const orcidUrl = "https://orcid.org/0000-0002-9159-1277";
const linkedinUrl = "https://www.linkedin.com/in/shailjadav/";
const emailAddress = "shail.jadav@tuwien.ac.at";

type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: string;
  links: { label: string; href: string }[];
  image?: string;
  imageFit?: "cover" | "contain";
  blurb?: string;
};

const publications: Publication[] = [
  {
    title: "Monocular Vision Based Control Framework for Grasping",
    authors: "S. Jadav, D. Lee",
    venue: "IEEE/ASME International Conference on Advanced Intelligent Mechatronics (AIM)",
    year: "2026",
    links: [
      { label: "arXiv", href: "https://arxiv.org/abs/2607.07897" },
      { label: "Project Page", href: "https://tuwien-asl.github.io/softSIGHT/" },
    ],
    image: graspingGif,
    blurb:
      "A unified monocular vision-based framework that grasps both soft and rigid objects using only an RGB camera and a standard position-controlled gripper, guided by language-based stiffness priors.",
  },
  {
    title: "LOPAL: Local Performance-Aware Active Learning from Imperfect Demonstrations",
    authors: "J. Heidersberger, S. Jadav, D. Lee",
    venue: "IEEE Robotics and Automation Letters (RA-L)",
    year: "2026",
    links: [
      { label: "Paper", href: "https://ieeexplore.ieee.org/document/11538996" },
      { label: "arXiv", href: "https://arxiv.org/abs/2606.16888" },
    ],
    image: lopalImage,
    imageFit: "contain",
    blurb:
      "An active learning approach that uses local demonstration-quality estimates to guide shared-autonomy corrections, improving learning from imperfect human demonstrations.",
  },
  {
    title:
      "Trajectory tracking of multi-section tendon-driven continuum robots using virtual actuation space control",
    authors: "M. M. Firdaus, S. Jadav, M. Vadali",
    venue: "Robotica",
    year: "2026",
    links: [{ label: "Paper", href: "https://doi.org/10.1017/S026357472610318X" }],
    image: continuumGif,
    blurb:
      "A virtual actuation space framework that simplifies kinematic modeling and control of multi-section tendon-driven continuum robots, reducing computation while improving tracking precision.",
  },
  {
    title: "Partner familiarity enhances performance in a manual precision task",
    authors:
      "J. Heidersberger, J. Kaiser, S. Jadav, L. Mihić Zidar, A. Curioni, L. Johannsen, D. Lee",
    venue: "Nature Scientific Reports",
    year: "2025",
    links: [
      { label: "Paper", href: "https://doi.org/10.1038/s41598-025-03341-9" },
      { label: "PDF", href: "https://www.nature.com/articles/s41598-025-03341-9.pdf" },
    ],
    image: manualPrecisionGif,
    blurb:
      "Studies how repeated haptic collaboration with the same partner improves fluency, predictability, and performance in demanding manual precision tasks.",
  },
  {
    title: "REASSEMBLE: A Multimodal Dataset for Contact-rich Robotic Assembly and Disassembly",
    authors: "D. Sliwowski, S. Jadav, S. Stanovcic, J. Orbik, J. Heidersberger, D. Lee",
    venue: "Robotics: Science and Systems (RSS)",
    year: "2025",
    links: [
      { label: "Dataset", href: "https://researchdata.tuwien.ac.at/records/0ewrv-8cb44" },
      { label: "arXiv", href: "https://arxiv.org/abs/2502.05086" },
      { label: "Project Page", href: "https://tuwien-asl.github.io/REASSEMBLE_page/" },
    ],
    image: reassembleGif,
    blurb:
      "A multimodal dataset for long-horizon, contact-rich assembly and disassembly with synchronized force, pose, and video streams.",
  },
  {
    title:
      "Shared Autonomy via Variable Impedance Control and Virtual Potential Fields for Encoding Human Demonstrations",
    authors: "S. Jadav, J. Heidersberger, C. Ott, D. Lee",
    venue: "IEEE International Conference on Robotics and Automation (ICRA)",
    year: "2024",
    links: [
      { label: "Paper", href: "https://doi.org/10.1109/ICRA57147.2024.10610761" },
      { label: "arXiv", href: "https://arxiv.org/abs/2403.12720" },
      { label: "Project Page", href: "https://shailjadav.github.io/SALADS/" },
    ],
    image: sharedAutonomyGif,
    blurb:
      "Introduces SALADS, combining variable impedance control and virtual potential fields to encode human demonstrations for collaborative manufacturing tasks.",
  },
  {
    title: "Configuration and Force-field Aware Variable Impedance Control with Faster Re-learning",
    authors: "S. Jadav, H. J. Palanthandalam-Madapusi",
    venue: "Journal of Intelligent & Robotic Systems",
    year: "2024",
    links: [{ label: "Paper", href: "https://doi.org/10.1007/s10846-023-02022-x" }],
    image: variableImpedanceGif,
    blurb:
      "Adapts impedance to robot configuration and divergent force fields, enabling faster re-learning and more stable manipulation.",
  },
  {
    title:
      "Kinematic Performance of a Customizable Single Degree-of-Freedom Gait Trainer for Cost-Effective Therapy Aimed at Neuromuscular Impairments",
    authors:
      "S. Jadav, K. S. Karvaje, S. D. Kadam, V. Vashista, J. Sulzer, A. Deshpande, H. J. Palanthandalam-Madapusi",
    venue: "ASME Journal of Medical Devices",
    year: "2024",
    links: [{ label: "Paper", href: "https://doi.org/10.1115/1.4065120" }],
    image: gaitTrainerGif,
    blurb:
      "A cost-effective single degree-of-freedom gait trainer with customizable trajectories for neuromuscular therapy.",
  },
  {
    title:
      "A Machine-Learning-Based Method to Detect Degradation of Motor Control Stability with Implications to Diagnosis of Presymptomatic Parkinson's Disease: A Simulation Study",
    authors: "V. V. Shah, S. Jadav, S. Goyal, H. J. Palanthandalam-Madapusi",
    venue: "MDPI Applied Sciences",
    year: "2023",
    links: [{ label: "Paper", href: "https://doi.org/10.3390/app13179502" }],
    image: pdeyeGif,
  },
];

const news = [
  {
    year: "2026",
    text: "Began serving as Associate Editor for the IEEE-RAS International Conference on Humanoid Robots (Humanoids) 2026.",
  },
  {
    year: "2026",
    text: "Began serving as Session Chair at the IEEE/ASME International Conference on Advanced Intelligent Mechatronics (AIM) 2026.",
  },
  {
    year: "2026",
    text: "“LOPAL: Local Performance-Aware Active Learning from Imperfect Demonstrations” published in IEEE Robotics and Automation Letters.",
    link: "https://ieeexplore.ieee.org/document/11538996",
  },
  {
    year: "2026",
    text: "“Trajectory tracking of multi-section tendon-driven continuum robots using virtual actuation space control” published in Robotica.",
    link: "https://doi.org/10.1017/S026357472610318X",
  },
  {
    year: "2026",
    text: "“Monocular Vision Based Control Framework for Grasping” accepted at the IEEE/ASME International Conference on Advanced Intelligent Mechatronics (AIM) 2026.",
    link: "https://arxiv.org/abs/2607.07897",
  },
  {
    year: "2025",
    text: "“Partner familiarity enhances performance in a manual precision task” published in Nature Scientific Reports.",
    link: "https://doi.org/10.1038/s41598-025-03341-9",
  },
  {
    year: "2025",
    text: "“REASSEMBLE: A Multimodal Dataset for Contact-rich Robotic Assembly and Disassembly” presented at Robotics: Science and Systems (RSS).",
    link: "https://arxiv.org/abs/2502.05086",
  },
  {
    year: "2024",
    text: "Awarded the IIT Gandhinagar Gold Medal for Outstanding Innovation at the 13th Convocation.",
  },
  {
    year: "2024",
    text: "Began a Postdoctoral Research Fellowship at the TU Wien Autonomous Systems Lab.",
  },
  {
    year: "2024",
    text: "“Shared Autonomy via Variable Impedance Control and Virtual Potential Fields for Encoding Human Demonstrations” (SALADS) presented at ICRA.",
    link: "https://arxiv.org/abs/2403.12720",
  },
];

const honors = [
  {
    year: "2024",
    title: "Gold Medal for Outstanding Innovation",
    org: "IIT Gandhinagar, 13th Convocation",
    desc: "Presented on 29 June 2024 to an outstanding graduating student across all disciplines at IIT Gandhinagar, in recognition of innovation during doctoral studies.",
    image: goldMedalImage,
  },
  {
    year: "2024",
    title: "IEEE RAS Student Travel Grant",
    org: "IEEE Robotics and Automation Society",
    desc: "Awarded roughly USD 2,500 to support attending ICRA 2024 in Japan.",
  },
  {
    year: "2022–2023",
    title: "NIDHI-PRAYAS Grant",
    org: "Department of Science and Technology, Government of India",
    desc: "Awarded roughly INR 700,000 to develop an analog adaptive motor driver for robots, which has since progressed toward commercialization.",
  },
  {
    year: "2023",
    title: "IITGN Overseas Research Fellowship",
    org: "IIT Gandhinagar",
    desc: "Awarded roughly INR 650,000 to fund a research residency at the TU Wien Autonomous Systems Lab on shared autonomy for human-robot interaction, which led to the ICRA 2024 paper on SALADS.",
  },
  {
    year: "2023",
    title: "Boeing BUILD — Regional Finalist",
    org: "Boeing",
    desc: "Recognized as a regional finalist in Boeing's University Innovation Leadership Development program, for the same analog adaptive motor driver project supported by the NIDHI-PRAYAS grant.",
  },
  {
    year: "2019",
    title: "SPARC Student Travel Grant",
    org: "Department of Science and Technology, Government of India",
    desc: "Awarded roughly INR 400,000 to fund a research visit to The University of Texas at Austin, working with Prof. James Sulzer on locomotor adaptation using a single-degree-of-freedom gait trainer.",
  },
];

const quickLinks = [
  { name: "Email", href: `mailto:${emailAddress}` },
  { name: "CV", href: cvUrl },
  { name: "Google Scholar", href: scholarUrl },
  { name: "ORCID", href: orcidUrl },
  { name: "LinkedIn", href: linkedinUrl },
];

function SectionHeading({ children }: { children: string }) {
  return (
    <h2 className="font-bold text-text mb-5 pb-2 border-b border-border">{children}</h2>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-background text-text">
      <main className="max-w-3xl mx-auto px-6 py-14 sm:py-16">
        {/* About: name + email align with the bio column, photo sits below on its own row */}
        <section id="about" className="mb-14 grid grid-cols-1 sm:grid-cols-[14rem_1fr] gap-x-8 gap-y-6">
          <div className="hidden sm:block" aria-hidden="true" />
          <header>
            <h1 className="text-5xl font-bold text-text mb-3">Shail Jadav</h1>
            <p>
              <span className="font-bold">email:</span>{" "}
              <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
            </p>
          </header>

          <div className="shrink-0 flex flex-col items-center text-center">
            <img
              src={profileImage}
              alt="Shail Jadav"
              className="w-48 h-48 sm:w-full sm:h-auto sm:aspect-[4/5] rounded-md object-cover border border-border"
            />
            <p className="mt-4 leading-relaxed">
              <a href={cvUrl} target="_blank" rel="noopener noreferrer">CV</a> |{" "}
              <a href={scholarUrl} target="_blank" rel="noopener noreferrer">Google Scholar</a>
              <br />
              <a href={orcidUrl} target="_blank" rel="noopener noreferrer">ORCID</a> |{" "}
              <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </p>
          </div>
          <div>
            <p className="leading-relaxed text-justify mb-4">
              I am a Postdoctoral Research Fellow at the Autonomous Systems Lab,{" "}
              <a href="https://www.tuwien.at/" target="_blank" rel="noopener noreferrer">
                Technical University of Vienna (TU Wien)
              </a>
              , where I work with{" "}
              <a
                href="https://www.tuwien.at/en/etit/ict/asl/team/dongheui-lee"
                target="_blank"
                rel="noopener noreferrer"
              >
                Prof. Dongheui Lee
              </a>{" "}
              on safe human-robot collaboration, force-aware manipulation, and learning-based robotic
              systems. My research focuses on developing safe and efficient human-robot interaction
              frameworks grounded in robotics and control theory, with applications in robotic
              manipulators, grasping systems, and contact-rich tasks.
            </p>
            <p className="leading-relaxed text-justify mb-4">
              I received my Ph.D. in Mechanical Engineering from{" "}
              <a href="https://iitgn.ac.in/" target="_blank" rel="noopener noreferrer">
                IIT Gandhinagar
              </a>
              , advised by{" "}
              <a href="https://harish.people.iitgn.ac.in/" target="_blank" rel="noopener noreferrer">
                Prof. Harish Palanthandalam-Madapusi
              </a>
              , and have held research residencies at TU Wien and{" "}
              <a href="https://www.utexas.edu/" target="_blank" rel="noopener noreferrer">
                The University of Texas at Austin
              </a>
              .
            </p>
            <p className="leading-relaxed text-justify">
              <span className="font-bold">Research interests:</span> safe human-robot collaboration,
              shared autonomy, variable impedance control, force-aware manipulation, and robot learning.
            </p>
          </div>
        </section>

        {/* News */}
        <section id="news" className="mb-14">
          <SectionHeading>News</SectionHeading>
          <ul className="space-y-3">
            {news.map((item, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-secondary shrink-0">[{item.year}]</span>
                <span className="leading-relaxed text-justify">
                  {item.link ? (
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      {item.text}
                    </a>
                  ) : (
                    item.text
                  )}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Publications */}
        <section id="publications" className="mb-14">
          <div className="flex items-baseline justify-between mb-5 pb-2 border-b border-border">
            <h2 className="font-bold text-text">Publications</h2>
            <a href={scholarUrl} target="_blank" rel="noopener noreferrer" className="whitespace-nowrap">
              Full list on Google Scholar
            </a>
          </div>
          <div className="space-y-10">
            {publications.map((pub) => (
              <div key={pub.title} className="flex gap-5">
                {pub.image ? (
                  <img
                    src={pub.image}
                    alt=""
                    className={`hidden sm:block w-56 h-40 rounded-lg border border-border shrink-0 ${
                      pub.imageFit === "contain" ? "object-contain bg-surface p-2" : "object-cover"
                    }`}
                  />
                ) : null}
                <div className="min-w-0">
                  <p className="leading-relaxed mb-1">
                    <a
                      href={pub.links[0].href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold"
                    >
                      {pub.title}
                    </a>
                  </p>
                  <p className="text-secondary leading-relaxed mb-1">
                    {pub.authors} &mdash; <em>{pub.venue}</em>, {pub.year}
                  </p>
                  {pub.blurb ? <p className="leading-relaxed text-justify mb-1">{pub.blurb}</p> : null}
                  <p className="flex flex-wrap gap-x-2 gap-y-1">
                    {pub.links.map((l, i) => (
                      <span key={l.label} className="flex items-center gap-2 whitespace-nowrap">
                        {i > 0 ? <span>|</span> : null}
                        <a href={l.href} target="_blank" rel="noopener noreferrer">
                          {l.label}
                        </a>
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Honors */}
        <section id="honors" className="mb-14">
          <SectionHeading>Honors &amp; Awards</SectionHeading>
          <ul className="space-y-6">
            {honors.map((honor) => (
              <li key={honor.title}>
                <p className="leading-relaxed">
                  <span className="font-bold">{honor.title}</span>{" "}
                  <span className="text-secondary">&mdash; {honor.org}, {honor.year}</span>
                </p>
                <p className="leading-relaxed text-justify">{honor.desc}</p>
                {honor.image ? (
                  <img
                    src={honor.image}
                    alt=""
                    className="mt-3 w-full max-w-sm mx-auto block rounded-lg object-cover border border-border"
                  />
                ) : null}
              </li>
            ))}
          </ul>
        </section>

        {/* Contact */}
        <section id="contact" className="mb-4">
          <SectionHeading>Contact</SectionHeading>
          <p className="leading-relaxed text-justify mb-4">
            I welcome inquiries about research collaborations, visiting-student positions, and
            speaking invitations. The fastest way to reach me is by email.
          </p>
          <p className="mb-1">
            <span className="font-bold">Email:</span> <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
          </p>
          <p>
            <span className="font-bold">Office:</span>{" "}
            <span>TU Wien Autonomous Systems Lab, Institute of Computer Technology, Vienna, Austria</span>
          </p>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="max-w-3xl mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between gap-3 text-secondary">
          <p>&copy; {new Date().getFullYear()} Shail Jadav</p>
          <div className="flex flex-wrap gap-x-2 gap-y-1">
            {quickLinks.map((link, i) => (
              <span key={link.name} className="flex items-center gap-2">
                {i > 0 ? <span>|</span> : null}
                <a href={link.href}>{link.name}</a>
              </span>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
