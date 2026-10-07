const projects = [
  {
    number: "01",
    title: "Vishwakarma AI",
    status: "Building",
    description:
      "A sovereign, ground-up AI foundation-model platform engineered from mathematical first principles. The project focuses on owning the full intelligence stack rather than depending on black-box hosted models.",
    details:
      "Includes tensor-level implementations of RMSNorm, RoPE, grouped-query causal attention and SwiGLU; an in-house byte-fallback BPE tokenizer; custom optimization; KV-cache inference; SFT and DPO; safety guardrails; deterministic BM25 RAG; persistent memory; sandboxed tools; ReAct agents; and a local FastAPI serving layer with SSE streaming.",
    technologies: ["Python", "PyTorch", "FastAPI", "AI/ML", "RAG", "Agents"],
    links: [
      { label: "GitHub", href: "https://github.com/ajaymishra14/vishwakarma_ai" },
      { label: "Frontend", href: "https://github.com/ajaymishra14/vishwakarma-ai-frontend" },
    ],
  },
  {
    number: "02",
    title: "Landslide Early Warning System",
    status: "Completed",
    description:
      "A real-world early-warning platform designed to process environmental and location-related information to assess landslide risk, visualize risk levels, and support automated alerts for potentially affected areas.",
    details:
      "Built as an end-to-end risk-monitoring application with a comprehensive dashboard, automated warning workflow, cloud deployment, and a modern web interface for communicating environmental risk.",
    technologies: ["Python", "FastAPI", "React", "JavaScript", "Tailwind CSS", "PostgreSQL", "Cloud"],
    links: [
      { label: "Live Demo", href: "https://landslide-early-warning-system.onrender.com" },
      { label: "Code", href: "https://github.com/ajaymishra14/landslide-early-warning-system" },
    ],
  },
  {
    number: "03",
    title: "Proposify AI",
    status: "Founder / Building",
    description:
      "An AI-powered proposal workflow designed to turn client briefs into structured project knowledge and polished proposals with less manual work.",
    details:
      "The product workflow brings together client brief intake, AI extraction, unknowns and clarification, project management, authentication, proposal generation, sharing, and client response workflows.",
    technologies: ["Next.js", "TypeScript", "React", "Prisma", "SQLite", "AI", "Automation"],
    links: [
      { label: "GitHub", href: "https://github.com/ajaymishra14/proposify-ai" },
    ],
  },
];

const capabilities = [
  ["01", "AI & Machine Learning", "Foundation models, inference, RAG, agents, safety, model tooling."],
  ["02", "Full-Stack Engineering", "Modern web products, APIs, databases, authentication and deployment."],
  ["03", "Automation", "Turning repetitive workflows into reliable software systems."],
  ["04", "Real-World Systems", "Building technology around environmental, operational and business problems."],
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell">
        <a className="brand" href="#top">AM<span>.</span></a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="nav-cta" href="https://github.com/ajaymishra14">GitHub ↗</a>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow">FOUNDER · BUILDER · AI / SOFTWARE</p>
          <h1>Building useful technology from the ground up.</h1>
          <p className="hero-text">
            I&apos;m <strong>Ajay Mishra</strong>, Founder of <strong>Proposify AI</strong>.
            I build AI systems, full-stack products, automation and real-world software
            that turn complex problems into practical tools.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#work">Explore my work</a>
            <a className="button secondary" href="mailto:hello@ajaymishra.com">Let&apos;s connect</a>
          </div>
        </div>
        <div className="hero-card">
          <div className="orb"><span>AI</span></div>
          <p className="card-label">CURRENT FOCUS</p>
          <h2>Owning the full stack of intelligence.</h2>
          <p>Models → APIs → products → automation → deployment.</p>
        </div>
      </section>

      <section className="marquee">
        <div className="shell marquee-inner">
          <span>AI SYSTEMS</span><i>✦</i><span>FULL-STACK PRODUCTS</span><i>✦</i>
          <span>AUTOMATION</span><i>✦</i><span>SOFTWARE ENGINEERING</span><i>✦</i>
          <span>REAL-WORLD IMPACT</span>
        </div>
      </section>

      <section className="section shell" id="work">
        <div className="section-head">
          <div>
            <p className="eyebrow">SELECTED WORK</p>
            <h2>Projects built to solve real problems.</h2>
          </div>
          <p className="section-note">A mix of product engineering, AI infrastructure and applied systems.</p>
        </div>

        <div className="projects">
          {projects.map((project) => (
            <article className="project" key={project.title}>
              <div className="project-top">
                <span className="project-number">{project.number}</span>
                <span className="status">{project.status}</span>
              </div>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <p className="project-details">{project.details}</p>
              <div className="tags">
                {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
              </div>
              <div className="project-links">
                {project.links.map((link) => (
                  <a href={link.href} target="_blank" rel="noreferrer" key={link.label}>{link.label} ↗</a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about section shell" id="about">
        <div>
          <p className="eyebrow">ABOUT</p>
          <h2>Founder mindset. Engineer discipline.</h2>
        </div>
        <div className="about-copy">
          <p>
            My work sits at the intersection of <strong>AI, software engineering and automation</strong>.
            I like understanding systems deeply, finding bugs across the stack, and building products
            rather than stopping at prototypes.
          </p>
          <p>
            As Founder of <strong>Proposify AI</strong>, I&apos;m building software around a simple idea:
            AI should remove complexity from real workflows while the underlying technology remains
            understandable, testable and under control.
          </p>
          <p>
            My projects range from sovereign AI infrastructure with Vishwakarma AI to environmental
            risk monitoring with the Landslide Early Warning System. Each project is an opportunity
            to learn, engineer and ship.
          </p>
        </div>
      </section>

      <section className="section capabilities" id="capabilities">
        <div className="shell">
          <div className="section-head">
            <div>
              <p className="eyebrow">CAPABILITIES</p>
              <h2>What I build.</h2>
            </div>
          </div>
          <div className="capability-grid">
            {capabilities.map(([number, title, description]) => (
              <div className="capability" key={title}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta shell" id="contact">
        <p className="eyebrow">START A CONVERSATION</p>
        <h2>Have a problem worth building around?</h2>
        <p>Whether it&apos;s an AI system, a product, automation or a difficult engineering problem, let&apos;s build it.</p>
        <div className="hero-actions">
          <a className="button primary" href="mailto:hello@ajaymishra.com">Get in touch ↗</a>
          <a className="button secondary" href="https://github.com/ajaymishra14" target="_blank" rel="noreferrer">View GitHub ↗</a>
        </div>
      </section>

      <footer className="footer shell">
        <span>© {new Date().getFullYear()} Ajay Mishra</span>
        <span>Founder — Proposify AI</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
