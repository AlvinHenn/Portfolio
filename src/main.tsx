import { createRoot } from "react-dom/client";
import { Github, Mail, Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import "./styles.css";

type Skill = {
  name: string;
  rating: number;
};

type Project = {
  year: string;
  title: string;
  description: string;
  tags: string[];
};

const skillGroups: Record<string, Skill[]> = {
  "Languages and core": [
    { name: "Python", rating: 86 },
    { name: "JavaScript", rating: 84 },
    { name: "Java", rating: 82 },
    { name: "TypeScript", rating: 78 },
    { name: "C / C++", rating: 72 },
    { name: "Kotlin", rating: 66 },
    { name: "Swift", rating: 58 },
    { name: "Linux", rating: 74 },
  ],
  "Web, mobile, backend": [
    { name: "ReactJS", rating: 84 },
    { name: "Flutter", rating: 82 },
    { name: "Spring Boot", rating: 78 },
    { name: "PostgreSQL", rating: 76 },
    { name: "MySQL", rating: 74 },
    { name: "Tailwind CSS", rating: 82 },
    { name: "REST API", rating: 78 },
  ],
  "AI and data": [
    { name: "NLP", rating: 78 },
    { name: "Data Preprocessing", rating: 80 },
    { name: "Scikit-learn", rating: 72 },
    { name: "TensorFlow", rating: 62 },
    { name: "PyTorch", rating: 60 },
    { name: "PDDL", rating: 70 },
    { name: "RAG Concepts", rating: 72 },
  ],
};

const projects: Project[] = [
  {
    year: "2025 - 2026",
    title: "Twitter Sentiment Analysis and Stock Market Research",
    description:
      "Built a Python NLP pipeline using FinBERT and SentiStrength to classify financial and general sentiment, then analyzed correlations with stock price movement.",
    tags: ["Python", "NLP", "FinBERT", "Data Analysis"],
  },
  {
    year: "2026",
    title: "ExpenseLab Finance Tracker",
    description:
      "Developing a personal finance web app with TypeScript, authentication, Neon PostgreSQL, secure login flows, dashboard UI, and planned expense analytics.",
    tags: ["TypeScript", "NeonDB", "PostgreSQL", "Dashboard"],
  },
  {
    year: "2026",
    title: "RAG Chatbot Prototype",
    description:
      "Designed a chatbot prototype inspired by Retrieval-Augmented Generation architecture, including role-based messages, mock LLM responses, and retrieval workflow concepts.",
    tags: ["RAG", "AI Apps", "Prompting", "Chat UI"],
  },
  {
    year: "2025",
    title: "PDDL Automated Planning Coursework",
    description:
      "Modeled a lunar lander scenario with actions, states, and goals in PDDL to generate valid automated planning sequences.",
    tags: ["AI Planning", "PDDL", "Automation"],
  },
];

function ratingLabel(value: number): string {
  if (value >= 85) return "Advanced";
  if (value >= 75) return "Strong";
  if (value >= 65) return "Proficient";
  return "Developing";
}

function App() {
  const [navOpen, setNavOpen] = useState(false);
  const year = new Date().getFullYear();

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Phang Lehenn portfolio home">
          <span className="brand-mark">PL</span>
          <span>Phang Lehenn</span>
        </a>
        <button
          className="nav-toggle"
          type="button"
          aria-label={navOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={navOpen}
          onClick={() => setNavOpen((open) => !open)}
        >
          {navOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={navOpen ? "nav-links open" : "nav-links"} aria-label="Primary navigation">
          {["experience", "projects", "skills", "contact"].map((item) => (
            <a key={item} href={`#${item}`} onClick={() => setNavOpen(false)}>
              {item[0].toUpperCase() + item.slice(1)}
            </a>
          ))}
        </nav>
      </header>

      <main id="top">
        <section className="hero section">
          <div className="hero-content">
            <p className="eyebrow">Full-stack mobile app developer</p>
            <h1>Building practical software across web, mobile, backend, and applied AI.</h1>
            <p className="hero-copy">
              Final-year BSc Computer Science student at Heriot-Watt University with hands-on
              experience in React, Spring Boot, Flutter, PostgreSQL, Firebase, and NLP projects.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">
                View Projects
              </a>
              <a className="button secondary" href="mailto:alvinhenn002@gmail.com">
                <Mail size={18} />
                Email Me
              </a>
            </div>
          </div>
          <aside className="profile-panel" aria-label="Profile summary">
            <ProfileItem label="Degree" title="Bachelor (Hons) Computer Science" detail="Second Upper Honours · Final mark 68.2" />
            <ProfileItem label="Focus" title="Backend engineering and applied AI systems" detail="Full-stack apps, mobile features, NLP, and data workflows" />
            <ProfileItem label="Links" title="GitHub: AlvinHenn" detail="Edinburgh, United Kingdom" href="https://github.com/AlvinHenn" />
          </aside>
        </section>

        <section className="stats-band" aria-label="Highlights">
          <Stat value="4.0" label="Foundation CGPA" />
          <Stat value="2025" label="Internship and major team project" />
          <Stat value="7" label="Team members coordinated as liaison" />
          <Stat value="4" label="Languages spoken" />
        </section>

        <section id="experience" className="section">
          <div className="section-heading">
            <p className="eyebrow">Experience</p>
            <h2>Industry and team delivery</h2>
          </div>
          <div className="timeline">
            <Experience
              year="2025"
              title="Internship | Fermion Labs Sdn Bhd"
              body="Developed and optimized Flutter features for a production insurtech application, improving Android user flows and supporting stable releases."
              bullets={[
                "Integrated third-party and native Android SDKs using Flutter Method Channels.",
                "Used Android Studio, Logcat, and debugging tools to diagnose SDK behavior.",
                "Implemented Firebase Remote Config feature toggles for controlled rollouts.",
                "Used Firebase Analytics and explored Firebase Test Lab to support product and testing decisions.",
              ]}
            />
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-heading">
            <p className="eyebrow">Projects</p>
            <h2>Selected work</h2>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <span className="project-year">{project.year}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-heading">
            <p className="eyebrow">Skills</p>
            <h2>Technical rating system</h2>
          </div>
          <div className="skills-layout">
            {Object.entries(skillGroups).map(([group, skills]) => (
              <div className="skill-group" key={group}>
                <h3>{group}</h3>
                <div className="skill-list">
                  {skills.map((skill) => (
                    <SkillRating key={skill.name} skill={skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section split-section">
          <div>
            <p className="eyebrow">Education</p>
            <h2>Academic background</h2>
          </div>
          <div className="education-list">
            <Education title="Bachelor (Hons) Computer Science" detail="Heriot-Watt University · Second Upper Honours · Final mark 68.2, close to First Class Honours" />
            <Education title="Foundation in Business (Computer Science), First Class" detail="Heriot-Watt University · 2023 · CGPA 4.0" />
            <Education
              title="Awards"
              detail="Foundation Excellence Award (2023), Blackberry Career Paths in Cybersecurity (2024), Deputy Principal's Award (2024)"
            />
          </div>
        </section>

        <section className="section split-section">
          <div>
            <p className="eyebrow">Languages</p>
            <h2>Communication</h2>
          </div>
          <div className="language-grid">
            {["English", "Chinese", "Cantonese", "Malay"].map((language) => (
              <span key={language}>{language}</span>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Open to graduate software engineering opportunities.</h2>
          </div>
          <div className="contact-actions">
            <a className="button primary" href="mailto:alvinhenn002@gmail.com">
              <Mail size={18} />
              Email
            </a>
            <a className="button secondary" href="tel:+447884629713">
              <Phone size={18} />
              Phone
            </a>
            <a className="button secondary" href="https://github.com/AlvinHenn" target="_blank" rel="noreferrer">
              <Github size={18} />
              GitHub
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>© {year} Phang Lehenn</span>
        <a href="#top">Back to top</a>
      </footer>
    </>
  );
}

function ProfileItem({ label, title, detail, href }: { label: string; title: string; detail: string; href?: string }) {
  return (
    <div>
      <span className="label">{label}</span>
      <strong>{href ? <a href={href} target="_blank" rel="noreferrer">{title}</a> : title}</strong>
      <span>{detail}</span>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}

function Experience({ year, title, body, bullets }: { year: string; title: string; body: string; bullets: string[] }) {
  return (
    <article className="timeline-item">
      <div className="timeline-date">{year}</div>
      <div className="timeline-body">
        <h3>{title}</h3>
        <p>{body}</p>
        <ul>
          {bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function SkillRating({ skill }: { skill: Skill }) {
  return (
    <div className="skill-row">
      <div className="skill-meta">
        <span>{skill.name}</span>
        <span>{ratingLabel(skill.rating)}</span>
      </div>
      <div className="rating-track" aria-label={`${skill.name} skill rating: ${skill.rating} out of 100`}>
        <div className="rating-fill" style={{ width: `${skill.rating}%` }} />
      </div>
    </div>
  );
}

function Education({ title, detail }: { title: string; detail: string }) {
  return (
    <article>
      <h3>{title}</h3>
      <p>{detail}</p>
    </article>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
