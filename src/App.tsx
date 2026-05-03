import pfpUrl from "../assets/pfp.jpg";
import "./App.css";

const projects = [
  {
    title: "WikiLive — MTS True Tech Hack",
    tech: 'Winner of the “Best Solution in Track” nomination. Kubernetes deployment, monitoring and observability, GitHub Actions, Docker-based infrastructure, and a Telegram bot tied to the cluster.',
    href: "https://github.com/motor-screwdriver/mts-true-tech-hack-26",
    linkLabel: "GitHub",
  },
  {
    title: "URFU Cyber Battle — CTF winner (Blue Team)",
    tech: "Winner of the Blue Team track: digital forensics, incident analysis, and report writing.",
    href: "https://ucsbattle.ru/",
    linkLabel: "Website",
  },
  {
    title: "EvOps",
    tech: "CI/CD with GitHub Actions, Docker and Docker Compose, Ubuntu server setup and deployment, automated changelog with git-cliff",
    href: "https://github.com/evops-sum25/evops",
    linkLabel: "GitHub",
  },
  {
    title: "Distributed PDF System",
    tech: "CI/CD with GitHub Actions, Grafana & Prometheus, Docker, Nginx reverse proxy, Ubuntu server setup and deployment",
    href: "https://github.com/quintet-sdr/dps",
    linkLabel: "GitHub",
  },
  {
    title: "InnoWiki",
    tech: "Docker, deployment and server setup, CI (OWASP ZAP, Linters, Stress tests, SAST Analysis, SonarQube scan), Monitoring (Grafana & Prometheus)",
    href: "https://github.com/quintet-sdr/sqrs-innowiki",
    linkLabel: "GitHub",
  },
  {
    title: "Elect.Gen",
    tech: "GitLab CI/CD pipelines, unit tests, deployment to Ubuntu server",
    href: "https://gitlab.pg.innopolis.university/sdr-sum24/elect-gen",
    linkLabel: "GitLab",
  },
  {
    title: "VNEDREID Hackathon - ChatOps",
    tech: "Docker, Docker Compose, Kubernetes (kubespray), Python (Aiogram)",
    href: "https://github.com/ilyalinhnguyen/chatops-go-to-sleep",
    linkLabel: "GitHub",
  },
  {
    title:
      "The Hackathon of Center of Popular Science Tourism at Innopolis University",
    tech: "Deployment, Docker, reverse proxy, server setup",
    href: "https://github.com/quintet-sdr/hackathon-cpst",
    linkLabel: "GitHub",
  },
] as const;

function SectionHead({
  step,
  icon,
  label,
}: {
  step: string;
  icon: string;
  label: string;
}) {
  return (
    <header className="section__head">
      <span className="section__step">{step}</span>
      <h2 className="section__title">
        <span className="section__pill">
          <span className="section__pill-icon" aria-hidden>
            {icon}
          </span>
          {label}
        </span>
      </h2>
    </header>
  );
}

type SkillIcon = { slug: string; color: string };

type SkillEntry = {
  id: string;
  label: string;
  icons: SkillIcon[];
};

function skillIconSrc(slug: string, color: string) {
  return `https://cdn.simpleicons.org/${slug}/${color}`;
}

const coreSkills: SkillEntry[] = [
  {
    id: "python",
    label: "Python",
    icons: [{ slug: "python", color: "3776AB" }],
  },
  {
    id: "cpp",
    label: "C / C++",
    icons: [{ slug: "cplusplus", color: "00599C" }],
  },
  {
    id: "docker",
    label: "Docker",
    icons: [{ slug: "docker", color: "2496ED" }],
  },
  {
    id: "gha",
    label: "GitHub Actions",
    icons: [{ slug: "githubactions", color: "2088FF" }],
  },
  {
    id: "gitlab",
    label: "GitLab CI",
    icons: [{ slug: "gitlab", color: "FC6D26" }],
  },
  {
    id: "postgres",
    label: "PostgreSQL",
    icons: [{ slug: "postgresql", color: "4169E1" }],
  },
  {
    id: "bash",
    label: "Bash",
    icons: [{ slug: "gnubash", color: "4EAA25" }],
  },
  {
    id: "mongo",
    label: "MongoDB",
    icons: [{ slug: "mongodb", color: "47A248" }],
  },
  {
    id: "grafana",
    label: "Grafana",
    icons: [{ slug: "grafana", color: "F46800" }],
  },
  {
    id: "prometheus",
    label: "Prometheus",
    icons: [{ slug: "prometheus", color: "E6522C" }],
  },
  {
    id: "nginx",
    label: "Nginx",
    icons: [{ slug: "nginx", color: "009639" }],
  },
  {
    id: "caddy",
    label: "Caddy",
    icons: [{ slug: "caddy", color: "1F97F0" }],
  },
  {
    id: "k8s",
    label: "Kubernetes · k3s",
    icons: [
      { slug: "kubernetes", color: "326CE5" },
      { slug: "k3s", color: "FFC619" },
    ],
  },
];

const moreSkills: SkillEntry[] = [
  {
    id: "js",
    label: "JavaScript",
    icons: [{ slug: "javascript", color: "F7DF1E" }],
  },
  {
    id: "ts",
    label: "TypeScript",
    icons: [{ slug: "typescript", color: "3178C6" }],
  },
  {
    id: "htmlcss",
    label: "HTML · CSS",
    icons: [
      { slug: "html5", color: "E34F26" },
      { slug: "css", color: "1572B6" },
    ],
  },
  {
    id: "aiogram",
    label: "Aiogram",
    icons: [{ slug: "telegram", color: "26A5E4" }],
  },
  {
    id: "ansible",
    label: "Ansible",
    icons: [{ slug: "ansible", color: "EE0000" }],
  },
  {
    id: "terraform",
    label: "Terraform",
    icons: [{ slug: "terraform", color: "844FBA" }],
  },
  {
    id: "argocd",
    label: "ArgoCD",
    icons: [{ slug: "argo", color: "EF7B4D" }],
  },
];

const linuxSkills: SkillEntry[] = [
  {
    id: "linux-user",
    label: "Linux power user",
    icons: [{ slug: "linux", color: "FCC624" }],
  },
  {
    id: "ubuntu",
    label: "Ubuntu servers",
    icons: [{ slug: "ubuntu", color: "E95420" }],
  },
  {
    id: "arch",
    label: "Arch Linux",
    icons: [{ slug: "archlinux", color: "1793D1" }],
  },
  {
    id: "net",
    label: "Networking",
    icons: [{ slug: "cisco", color: "1BA0D7" }],
  },
];

function SkillBadge({ entry }: { entry: SkillEntry }) {
  return (
    <span className="skill-badge">
      <span className="skill-badge__icons">
        {entry.icons.map((ic, i) => (
          <img
            key={`${entry.id}-${ic.slug}-${i}`}
            className="skill-badge__icon"
            src={skillIconSrc(ic.slug, ic.color)}
            alt=""
            width={16}
            height={16}
            loading="lazy"
            decoding="async"
          />
        ))}
      </span>
      <span className="skill-badge__label">{entry.label}</span>
    </span>
  );
}

function SkillCard({
  title,
  items,
  layout,
}: {
  title: string;
  items: readonly SkillEntry[];
  layout: "grid" | "list";
}) {
  return (
    <div className={`card card--skills card--skills-${layout}`}>
      <div className="card__title">{title}</div>
      <div
        className={
          layout === "grid" ? "skill-badges skill-badges--grid" : "skill-badges skill-badges--list"
        }
      >
        {items.map((item) => (
          <SkillBadge key={item.id} entry={item} />
        ))}
      </div>
    </div>
  );
}

export function App() {
  return (
    <div className="shell">
      <div className="shell__backdrop" aria-hidden>
        <div className="shell__aurora" />
        <div className="shell__grid" />
        <div className="shell__shine" />
      </div>
      <div className="page">
        <header className="hero">
          <div className="hero__avatar">
            <img
              src={pfpUrl}
              alt="Nguyen Ilya-Linh Quang Hungovich"
              width={120}
              height={120}
            />
          </div>
          <h1 className="hero__name">Nguyen Ilya-Linh Quang Hungovich</h1>
          <p className="hero__subtitle">
            Software development &amp; administration
          </p>
        </header>

        <section className="section">
          <div className="section__panel">
            <SectionHead step="01" icon="✉️" label="Contact" />
            <ul className="links">
              <li>
                <span className="muted">Location</span> Innopolis, Russia
              </li>
              <li>
                <span className="muted">Email</span>{" "}
                <a href="mailto:ilyalinhnguyen@gmail.com">
                  ilyalinhnguyen@gmail.com
                </a>
              </li>
              <li>
                <span className="muted">Telegram</span>{" "}
                <a href="https://t.me/pickpusha" target="_blank" rel="noreferrer">
                  @pickpusha
                </a>
              </li>
              <li>
                <span className="muted">GitHub</span>{" "}
                <a
                  href="https://github.com/ilyalinhnguyen"
                  target="_blank"
                  rel="noreferrer"
                >
                  @ilyalinhnguyen
                </a>
              </li>
              <li>
                <span className="muted">LinkedIn</span>{" "}
                <a
                  href="https://www.linkedin.com/in/ilya-linh-nguyen/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ilya-Linh Nguyen
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section className="section">
          <div className="section__panel">
            <SectionHead step="02" icon="🎓" label="Education" />
            <div className="card card--flush">
              <div className="card__title">ANO VO University of Innopolis</div>
              <div className="card__meta">
                Innopolis, Russia · August 2023 – July 2027, Bachelor&apos;s
                degree
              </div>
              <p className="card__body">
                Program: Computer Science and Computing Technology. Current GPA:
                4.2 / 5.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section__panel">
            <SectionHead step="03" icon="🛠️" label="Skills" />
            <div className="skills">
              <SkillCard layout="grid" title="Core technologies" items={coreSkills} />
              <div className="skills__pair">
                <SkillCard
                  layout="list"
                  title="Also experienced with"
                  items={moreSkills}
                />
                <SkillCard layout="list" title="Linux" items={linuxSkills} />
              </div>
            </div>
          </div>
        </section>

        <section className="section section--last">
          <div className="section__panel">
            <SectionHead step="04" icon="🖥️" label="Projects & hackathons" />
            <div className="projects">
              {projects.map((p) => (
                <article key={p.title} className="project">
                  <div className="project__head">
                    <h3 className="project__title">{p.title}</h3>
                    <a
                      className="project__badge"
                      href={p.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {p.linkLabel}
                    </a>
                  </div>
                  <p className="project__tech">{p.tech}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
