import Image from "next/image";
import type { HomepageContent } from "../homepage-data";

export function AcademicHomepage({ content }: { content: HomepageContent }) {
  const isChinese = content.locale === "zh";
  const githubUrl = "https://github.com/CaiChengWang";
  const scholarUrl = "https://scholar.google.com/citations?user=4pGYzJ8AAAAJ&hl=zh-CN&oi=ao";
  const scholarLabel = "Google Scholar";
  const citationLabel = isChinese ? "Google Scholar 引用" : "Google Scholar citations";
  const [featuredPaper, ...otherPapers] = content.publications;
  const scholarSearch = (title: string) =>
    `https://scholar.google.com/scholar?q=${encodeURIComponent(title)}`;

  return (
    <main id="top" lang={content.locale === "zh" ? "zh-CN" : "en"}>
      <a className="skip-link" href="#main-content">
        {content.skipLabel}
      </a>

      <header className="site-header">
        <div className="nav-shell">
          <nav aria-label={content.locale === "zh" ? "主页导航" : "Page navigation"}>
            <ul className="nav-links">
              <li className="home-item">
                <a href="#about">{isChinese ? "主页" : "Homepage"}</a>
              </li>
              {content.nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
              <li>
                <a href={content.alternateLanguageHref}>
                  {content.alternateLanguageLabel}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="page-shell">
        <aside className="profile-sidebar" aria-label={content.profile.name}>
          <Image
            className="profile-avatar"
            src="/profile.jpg"
            alt={content.profile.name}
            width={800}
            height={800}
            priority
            unoptimized
          />
          <div className="profile-content">
            <h1 className="profile-name">{content.profile.name}</h1>
          </div>

          <div className="profile-links-wrapper">
            <ul className="profile-links">
              <li className="profile-description">{content.profile.bio}</li>
              <li>
                <i className="fas fa-map-marker-alt" aria-hidden="true" />
                {content.profile.facts[2].value}
              </li>
              <li>
                <a href="mailto:wcc_wy@163.com">
                  <i className="fas fa-envelope" aria-hidden="true" /> Email
                </a>
              </li>
              <li>
                <a href={githubUrl} target="_blank" rel="noreferrer">
                  <i className="fab fa-github" aria-hidden="true" /> GitHub
                </a>
              </li>
              <li>
                <a href={scholarUrl} target="_blank" rel="noreferrer">
                  <i className="fas fa-graduation-cap" aria-hidden="true" /> {scholarLabel}
                </a>
              </li>
              <li>
                <a href={content.alternateLanguageHref}>
                  <i className="fas fa-language" aria-hidden="true" /> {content.alternateLanguageLabel}
                </a>
              </li>
              <li className="profile-job-status">
                <i className="fas fa-briefcase" aria-hidden="true" />
                {isChinese
                  ? "寻找具身智能方向的工作机会"
                  : "Seeking opportunities in Embodied AI"}
              </li>
            </ul>
            <div className="profile-links-mobile" aria-label={isChinese ? "联系方式" : "Contact links"}>
              <a href="mailto:wcc_wy@163.com" aria-label="Email">
                <i className="fas fa-envelope" aria-hidden="true" />
              </a>
              <a href={githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub">
                <i className="fab fa-github" aria-hidden="true" />
              </a>
              <a href={scholarUrl} target="_blank" rel="noreferrer" aria-label={scholarLabel}>
                <i className="fas fa-graduation-cap" aria-hidden="true" />
              </a>
              <a href={content.alternateLanguageHref} aria-label={content.alternateLanguageLabel}>
                <i className="fas fa-language" aria-hidden="true" />
              </a>
            </div>
          </div>
        </aside>

        <div className="content-column" id="main-content" tabIndex={-1}>
          <section className="about-section" id="about">
            <h2 className="visually-hidden">{content.about.title}</h2>
            <p>
              {content.about.introduction.professionalPrefix}
              <span className="about-institution">
                {content.about.introduction.employer}
                <Image
                  className="company-logo"
                  src="/meituan-logo.png"
                  alt=""
                  width={100}
                  height={100}
                  aria-hidden="true"
                  unoptimized
                />
              </span>
              {content.about.introduction.professionalSuffix}
            </p>
            <p>
              {content.about.introduction.academicPrefix}
              <span className="about-institution">
                {content.about.introduction.institution}
                <Image
                  className="university-logo"
                  src="/zju-logo.png"
                  alt=""
                  width={180}
                  height={180}
                  aria-hidden="true"
                  unoptimized
                />
              </span>
              {content.about.introduction.afterInstitution}
              <span className="about-institution">
                {content.about.introduction.undergraduateInstitution}
                <Image
                  className="university-logo"
                  src="/xidian-logo.png"
                  alt=""
                  width={64}
                  height={64}
                  aria-hidden="true"
                  unoptimized
                />
              </span>
              {content.about.introduction.academicSuffix}
              {content.about.resultPrefix}
              <strong>{content.about.resultStrong}</strong>
              {content.about.resultSuffix}
              <a
                className="scholar-citation-badge"
                href={scholarUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`${citationLabel} 160+`}
              >
                <span>{citationLabel}</span>
                <strong>160+</strong>
              </a>
            </p>
          </section>

          <section className="content-section" id="experience">
            <h2><span aria-hidden="true">💼</span> {content.sectionLabels.experience}</h2>
            {content.internships.map((internship) => (
              <article className="cv-entry" key={internship.company}>
                <div className="entry-heading">
                  <h3>
                    <Image
                      className={`company-logo internship-logo${
                        internship.logo === "/siliconone-logo.png"
                          ? " internship-logo-monochrome"
                          : ""
                      }`}
                      src={internship.logo}
                      alt=""
                      width={100}
                      height={100}
                      aria-hidden="true"
                      unoptimized
                    />
                    {internship.company}
                  </h3>
                  <time>{internship.period}</time>
                </div>
                <p className="entry-role">{internship.role}</p>
                <p>{internship.summary}</p>
                <ul>
                  {internship.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </article>
            ))}
          </section>

          <section className="content-section" id="research">
            <h2><span aria-hidden="true">🔬</span> {content.sectionLabels.research}</h2>
            {content.projects.map((project) => (
              <article className="research-entry" key={project.title}>
                <div className="entry-heading">
                  <h3>{project.title}</h3>
                  <time>{project.period}</time>
                </div>
                <p>{project.description}</p>
                <p className="entry-output">{project.output}</p>
              </article>
            ))}
          </section>

          <section className="content-section" id="publications">
            <h2><span aria-hidden="true">📝</span> {content.sectionLabels.publications}</h2>
            <div className="paper-list">
              <article className="paper-box">
                <div className="paper-box-image">
                  <Image
                    className="paper-figure"
                    src="/featured-paper.jpg"
                    alt={`Graphical abstract for ${featuredPaper.title}`}
                    width={2213}
                    height={877}
                    unoptimized
                  />
                </div>
                <div className="paper-box-text">
                  <h3>
                    <a href={scholarSearch(featuredPaper.title)}>{featuredPaper.title}</a>
                  </h3>
                  <p>{featuredPaper.venue}</p>
                  <strong>{featuredPaper.note}</strong>
                </div>
              </article>
              <ul className="publication-list">
                {otherPapers.map((paper) => (
                  <li key={paper.title}>
                    <a href={scholarSearch(paper.title)}>{paper.title}</a>, {paper.venue}, <strong>{paper.note}</strong>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="content-section" id="honors">
            <h2><span aria-hidden="true">🎖</span> {content.sectionLabels.honors}</h2>
            <ul className="plain-list">
              {content.honors.map((honor) => (
                <li key={honor.text}>
                  {honor.featured ? <strong>{honor.text}</strong> : honor.text}
                </li>
              ))}
            </ul>
          </section>

          <section className="content-section" id="education">
            <h2><span aria-hidden="true">📖</span> {content.sectionLabels.education}</h2>
            <ul className="plain-list education-list">
              {content.education.map((item) => (
                <li key={item.school}>
                  <time>{item.period}</time>, <strong>{item.school}</strong>, {item.degree}
                </li>
              ))}
            </ul>
          </section>

          <section className="content-section" id="skills">
            <h2><span aria-hidden="true">🛠</span> {content.sectionLabels.skills}</h2>
            <dl className="skills-list">
              {content.skills.map((skill) => (
                <div key={skill.label}>
                  <dt>{skill.label}</dt>
                  <dd>{skill.value}</dd>
                </div>
              ))}
            </dl>
          </section>

        </div>
      </div>
    </main>
  );
}
