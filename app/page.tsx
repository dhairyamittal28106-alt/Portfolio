import Image from "next/image";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, MapPin, Terminal, Cpu, GraduationCap, BriefcaseBusiness, CalendarDays } from "lucide-react";
import { achievements, certifications, education, experience, profile, projects, skills } from "@/data/content";
import ScrollReveal from "@/components/ScrollReveal";

const featured = projects.slice(0, 2);

export default function Home() {
  return (
    <main className="desktop-shell">
      <header className="topbar">
        <a className="brand" href="#home"><span className="brand-mark">dm</span><span>{profile.name}</span></a>
        <div className="topbar-center"><span className="system-dot" /> Available for opportunities <span className="topbar-divider">/</span> Chandigarh, IN</div>
        <nav className="top-nav" aria-label="Main navigation">
          <a href="#work">Work</a><a href="#about">About</a><a href="#experience">Experience</a><a href="#contact">Contact</a>
          <a className="resume-link" href="/resume.pdf" download="Dhairya_Mittal_Resume.pdf">Resume <ArrowUpRight size={14} /></a>
        </nav>
      </header>

      <div className="workspace" id="home">
        <aside className="rail"><span className="rail-label">PORTFOLIO · 2026</span><a href="#home" className="rail-item active"><Terminal size={17}/><span>Overview</span></a><a href="#work" className="rail-item"><span className="rail-glyph">⌘</span><span>Projects</span></a><a href="#about" className="rail-item"><Cpu size={17}/><span>About me</span></a><a href="#experience" className="rail-item"><BriefcaseBusiness size={17}/><span>Experience</span></a><a href="#contact" className="rail-item"><Mail size={17}/><span>Get in touch</span></a><div className="rail-bottom"><a href={profile.github} aria-label="GitHub" target="_blank" rel="noreferrer"><Github size={17}/></a><a href={profile.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer"><Linkedin size={17}/></a></div></aside>

        <div className="content-area">
          <section className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow"><span className="prompt-symbol">~/</span> dhairya / portfolio</p>
              <h1>Thoughtful software.<br/><span>Built to work.</span></h1>
              <p className="hero-description">I’m Dhairya, a computer science undergraduate building backend systems, cloud applications, and useful AI products.</p>
              <div className="hero-actions"><a className="button button-primary" href="#work">Explore my work <ArrowDown size={15}/></a><a className="button button-quiet" href={`mailto:${profile.email}`}>Get in touch <ArrowUpRight size={15}/></a></div>
              <div className="hero-meta"><span><MapPin size={14}/>{profile.location}</span><span className="meta-separator"/><span>Computer Science · 2024—2028</span></div>
            </div>
            <div className="profile-window">
              <div className="window-bar"><div className="window-controls"><i/><i/><i/></div><span>~/home/dhairya/about.txt</span><span className="window-action">···</span></div>
              <div className="profile-body"><div className="profile-heading"><div className="avatar-frame"><Image src="/assets/avatar.png" alt={profile.name} fill sizes="80px"/></div><div><p className="profile-name">Dhairya Mittal</p><p className="profile-role">Developer &amp; builder</p></div><span className="online-indicator" title="Available"/></div>
                <div className="code-rule"/><div className="terminal-lines"><p><span className="code-muted">01</span> <span className="code-key">const</span> <span className="code-var">focus</span> = [</p><p><span className="code-muted">02</span> &nbsp;<span className="code-string">&quot;backend engineering&quot;</span>,</p><p><span className="code-muted">03</span> &nbsp;<span className="code-string">&quot;cloud infrastructure&quot;</span>,</p><p><span className="code-muted">04</span> &nbsp;<span className="code-string">&quot;applied AI&quot;</span></p><p><span className="code-muted">05</span> ];</p></div>
                <div className="profile-foot"><span><span className="system-dot"/> Open to collaboration</span><span>IN · IST</span></div>
              </div>
            </div>
          </section>

          <ScrollReveal><section className="section-block" id="work"><div className="section-heading"><div><p className="eyebrow">SELECTED WORK <span className="heading-index">/ 01</span></p><h2>Projects</h2></div><a className="text-link" href={`${profile.github}?tab=repositories`} target="_blank" rel="noreferrer">All repositories <ArrowUpRight size={15}/></a></div>
            <div className="project-grid">{featured.map((project, index) => <article className="project-card" key={project.title}><a className="project-image" href={project.live && project.live !== "#" ? project.live : project.github || "#"} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`}>
              {project.image ? <Image src={project.image} alt={`${project.title} preview`} fill sizes="(max-width: 800px) 100vw, 50vw" className={project.fit === "contain" ? "contain-image" : "cover-image"}/> : <div className="project-placeholder"><span>0{index + 1}</span><Terminal size={34}/></div>}<span className="image-open"><ArrowUpRight size={17}/></span></a>
              <div className="project-info"><div className="project-title-line"><span className="project-number">0{index + 1}</span><h3>{project.title}</h3><a href={project.github || "#"} target="_blank" rel="noreferrer" aria-label={`GitHub: ${project.title}`}><ArrowUpRight size={16}/></a></div><p>{project.description}</p><div className="tag-list">{project.tech.slice(0, 4).map((tech) => <span key={tech}>{tech}</span>)}</div></div></article>)}</div>
          </section></ScrollReveal>

          <ScrollReveal><section className="about-grid section-block" id="about"><div className="about-copy"><p className="eyebrow">A LITTLE CONTEXT <span className="heading-index">/ 02</span></p><h2>Curious by nature.<br/><span>Practical by design.</span></h2><p>I enjoy taking a problem from its first sketch to a working product. My work spans APIs, cloud workflows, and computer vision, with a focus on making the underlying engineering understandable and dependable.</p><p>Currently studying Computer Science at Amity University Punjab. Outside coursework, I build projects, compete in hackathons, and keep sharpening my fundamentals.</p><a className="text-link about-link" href="/resume.pdf" download="Dhairya_Mittal_Resume.pdf">Read my resume <ArrowUpRight size={15}/></a></div>
            <div className="about-details"><div className="detail-panel"><div className="panel-title"><GraduationCap size={16}/> Education</div>{education.map((item) => <div className="education-row" key={item.school}><div><h3>{item.school}</h3><p>{item.degree}</p></div><span>{item.year}</span></div>)}</div><div className="detail-panel skills-panel"><div className="panel-title"><Cpu size={16}/> Tools I use</div><div className="skill-cloud">{skills.slice(0, 18).map((skill) => <span key={skill}>{skill}</span>)}</div></div></div>
          </section></ScrollReveal>

          <ScrollReveal><section className="experience-section section-block" id="experience"><div className="section-heading"><div><p className="eyebrow">EXPERIENCE <span className="heading-index">/ 03</span></p><h2>Where I’ve contributed</h2></div><BriefcaseBusiness size={18} className="section-icon"/></div><div className="experience-grid">{experience.map((item, i) => <article className="experience-card" key={item.organization}><div className="experience-card-top"><span className="experience-index">0{i + 1}</span><span className="experience-type">{item.type}</span></div><h3>{item.role}</h3><p className="experience-org">{item.organization}</p><p className="experience-description">{item.description}</p><div className="experience-period"><CalendarDays size={14}/>{item.period}</div></article>)}</div></section></ScrollReveal>

          <ScrollReveal><section className="recognition section-block"><div className="section-heading"><div><p className="eyebrow">MILESTONES <span className="heading-index">/ 04</span></p><h2>Along the way</h2></div></div><div className="recognition-grid"><div className="detail-panel"><div className="panel-title">Hackathons &amp; competitions</div>{achievements.map((item, i) => <div className="list-row" key={item}><span>{String(i + 1).padStart(2, "0")}</span><p>{item}</p></div>)}</div><div className="detail-panel"><div className="panel-title">Certifications</div>{certifications.map((item, i) => <div className="list-row" key={item}><span>0{i + 1}</span><p>{item}</p></div>)}</div></div></section></ScrollReveal>

          <footer className="contact-footer" id="contact"><div><p className="eyebrow">HAVE A GOOD PROBLEM? <span className="heading-index">/ 05</span></p><h2>Let’s make something<br/><span>that matters.</span></h2><p className="footer-caption">For opportunities, collaborations, or a good technical conversation.</p></div><div className="contact-actions"><a className="button button-primary" href={`mailto:${profile.email}`}><Mail size={16}/> Say hello <ArrowUpRight size={15}/></a><a href={profile.github} target="_blank" rel="noreferrer"><Github size={17}/> GitHub</a><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn</a></div></footer>
          <div className="bottomline"><span>© 2026 Dhairya Mittal</span><span>Designed &amp; built with care <span className="bottom-prompt">$</span></span><span>Chandigarh, India</span></div>
        </div>
      </div>
    </main>
  );
}
