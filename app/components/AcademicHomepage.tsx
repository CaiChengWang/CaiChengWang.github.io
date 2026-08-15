import Image from "next/image";
import type { HomepageContent } from "../homepage-data";

export function AcademicHomepage({ content }: { content: HomepageContent }) {
  const isChinese = content.locale === "zh";
  const scholarUrl = "https://scholar.google.com/citations?user=4pGYzJ8AAAAJ&hl=zh-CN&oi=ao";
  const scholarLabel = isChinese ? "Google 学术 · 引用 160+" : "Google Scholar · 160+ citations";
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
            <p className="profile-bio">{content.profile.bio}</p>
          </div>

          <div className="profile-links-wrapper">
            <ul className="profile-links">
              <li className="profile-description">
                {content.profile.degree}
                <Image
                  className="zju-logo"
                  src="/zju-logo.png"
                  alt=""
                  width={180}
                  height={180}
                  aria-hidden="true"
                  unoptimized
                />
              </li>
              <li>
                <i className="fas fa-map-marker-alt" aria-hidden="true" />
                {content.profile.facts[2].value}
              </li>
              <li>
                <i className="fas fa-bullseye" aria-hidden="true" />
                {content.profile.facts[0].value}
              </li>
              <li>
                <i className="fas fa-calendar-alt" aria-hidden="true" />
                {content.profile.facts[1].value}
              </li>
              <li>
                <a href="mailto:wcc_wy@163.com">
                  <i className="fas fa-envelope" aria-hidden="true" /> Email
                </a>
              </li>
              <li>
                <a href="tel:+8618154090862">
                  <i className="fas fa-phone" aria-hidden="true" /> 181 5409 0862
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
            </ul>
            <div className="profile-links-mobile" aria-label={isChinese ? "联系方式" : "Contact links"}>
              <a href="mailto:wcc_wy@163.com" aria-label="Email">
                <i className="fas fa-envelope" aria-hidden="true" />
              </a>
              <a href="tel:+8618154090862" aria-label={isChinese ? "电话" : "Phone"}>
                <i className="fas fa-phone" aria-hidden="true" />
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
            {content.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p>
              {content.about.resultPrefix}
              <strong>{content.about.resultStrong}</strong>
              {content.about.resultSuffix}
            </p>
          </section>

          <section className="content-section" id="experience">
            <h2><span aria-hidden="true">💼</span> {content.sectionLabels.experience}</h2>
            {content.internships.map((internship) => (
              <article className="cv-entry" key={internship.company}>
                <div className="entry-heading">
                  <h3>{internship.company}</h3>
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
                <div className="paper-box-image" aria-hidden="true">
                  <div className="paper-image-placeholder">
                    <span className="paper-badge">{featuredPaper.abbr}</span>
                    <strong>{featuredPaper.abbr}</strong>
                  </div>
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
                <li key={honor}>{honor}</li>
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
