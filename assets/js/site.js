import { siteContent } from "./site-data.js";

const socialIcons = {
  whatsapp: `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M20.52 3.48A11.81 11.81 0 0 0 12.07 0C5.5 0 .16 5.35.16 11.91c0 2.09.55 4.12 1.59 5.92L0 24l6.33-1.66a11.87 11.87 0 0 0 5.73 1.48h.01c6.56 0 11.91-5.34 11.92-11.91a11.8 11.8 0 0 0-3.47-8.43Zm-8.45 18.33h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.75.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.27c0-5.45 4.43-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.89 7c0 5.45-4.44 9.88-9.87 9.88Zm5.41-7.43c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.18.2-.35.22-.65.08-.3-.15-1.25-.47-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.19-.3.29-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.91-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.07c.15.2 2.1 3.21 5.09 4.5.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35Z" />
    </svg>
  `,
  instagram: `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M7.05.07C8.33.01 8.74 0 12 0s3.67.01 4.95.07c4.35.2 6.78 2.62 6.98 6.98.06 1.28.07 1.69.07 4.95s-.01 3.67-.07 4.95c-.2 4.35-2.62 6.78-6.98 6.98-1.28.06-1.69.07-4.95.07s-3.67-.01-4.95-.07c-4.36-.2-6.78-2.63-6.98-6.98C.01 15.67 0 15.26 0 12s.01-3.67.07-4.95C.27 2.7 2.69.27 7.05.07ZM12 2.16c-3.2 0-3.58.01-4.85.07-3.25.15-4.77 1.69-4.92 4.92-.06 1.27-.07 1.65-.07 4.85s.01 3.58.07 4.85c.15 3.23 1.67 4.77 4.92 4.92 1.27.06 1.65.07 4.85.07s3.58-.01 4.85-.07c3.25-.15 4.77-1.69 4.92-4.92.06-1.27.07-1.65.07-4.85s-.01-3.58-.07-4.85c-.15-3.23-1.67-4.77-4.92-4.92-1.27-.06-1.65-.07-4.85-.07Zm0 3.68A6.16 6.16 0 1 1 12 18.16 6.16 6.16 0 0 1 12 5.84Zm0 10.16A4 4 0 1 0 12 8a4 4 0 0 0 0 8Zm6.41-11.84a1.44 1.44 0 1 1 0 2.88 1.44 1.44 0 0 1 0-2.88Z" />
    </svg>
  `
};

const contentIcons = {
  scissors: `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <circle cx="6.25" cy="6.25" r="2.25" />
      <circle cx="6.25" cy="17.75" r="2.25" />
      <path d="M20 4 8.2 14.2" />
      <path d="M20 20 8.2 9.8" />
    </svg>
  `,
  crown: `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="m3 18 1.7-8 4.3 3L12 6l3 7 4.3-3L21 18Z" />
      <path d="M5 20h14" />
    </svg>
  `,
  users: `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M16.5 19a4.5 4.5 0 0 0-9 0" />
      <circle cx="12" cy="8" r="3" />
      <path d="M20 18a3.5 3.5 0 0 0-3-3.46" />
      <path d="M17 4.8a3 3 0 0 1 0 6" />
    </svg>
  `,
  clock: `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <circle cx="12" cy="12" r="8" />
      <path d="M12 7.7v4.8l3.2 1.9" />
    </svg>
  `,
  store: `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M4 9.5 5.4 4h13.2L20 9.5" />
      <path d="M5 10.5V20h14v-9.5" />
      <path d="M9.5 20v-5h5V20" />
    </svg>
  `,
  globe: `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <circle cx="12" cy="12" r="8" />
      <path d="M4.5 12h15" />
      <path d="M12 4a12 12 0 0 1 0 16" />
      <path d="M12 4a12 12 0 0 0 0 16" />
    </svg>
  `,
  award: `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <circle cx="12" cy="8.5" r="4.5" />
      <path d="m9.6 12.3-1.3 7 3.7-2.1 3.7 2.1-1.3-7" />
    </svg>
  `,
  palette: `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M12 4.2c-4.8 0-8.8 3.5-8.8 8 0 4 2.9 6.6 6.2 6.6h1.8a1.8 1.8 0 0 0 0-3.6h-.8a1.8 1.8 0 0 1 0-3.6h1.7c4.8 0 8.7-2.3 8.7-5.8 0-4-4.1-7.6-8.8-7.6Z" />
      <circle cx="7.8" cy="10" r="1" />
      <circle cx="10.5" cy="8.2" r="1" />
      <circle cx="13.6" cy="8.1" r="1" />
    </svg>
  `,
  shield: `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M12 3.8 6 6.1v4.8c0 4.1 2.3 7.7 6 9.3 3.7-1.6 6-5.2 6-9.3V6.1Z" />
      <path d="m9.4 12 1.7 1.8 3.5-3.7" />
    </svg>
  `,
  spark: `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8Z" />
      <path d="m18.2 4.8.6 1.6 1.6.6-1.6.6-.6 1.6-.6-1.6-1.6-.6 1.6-.6Z" />
    </svg>
  `,
  briefcase: `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <rect x="4" y="7" width="16" height="11" rx="2" />
      <path d="M9 7V5.8C9 4.8 9.8 4 10.8 4h2.4C14.2 4 15 4.8 15 5.8V7" />
      <path d="M4 11.5h16" />
    </svg>
  `,
  mail: `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="m5.2 7 6.8 5.3L18.8 7" />
    </svg>
  `,
  phone: `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M7 4.8h3l1.1 3.9-1.8 1.8a14.4 14.4 0 0 0 4.2 4.2l1.8-1.8 3.9 1.1v3c0 .9-.7 1.7-1.7 1.7A13.5 13.5 0 0 1 5.3 6.5C5.3 5.5 6 4.8 7 4.8Z" />
    </svg>
  `,
  pin: `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M12 20s6-5.6 6-10a6 6 0 1 0-12 0c0 4.4 6 10 6 10Z" />
      <circle cx="12" cy="10" r="2.2" />
    </svg>
  `,
  book: `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M6 5.2h9.3a2.7 2.7 0 0 1 2.7 2.7V19H8.5A2.5 2.5 0 0 0 6 21Z" />
      <path d="M6 5.2v15.6" />
      <path d="M8.8 8.3h6.2" />
    </svg>
  `
};

const contactBadges = {
  email: "mail",
  phone: "phone",
  location: "pin"
};

document.addEventListener("DOMContentLoaded", () => {
  syncMeta();
  renderSite();
  setupHeaderState();
  setupMobileMenu();
  setupScrollTopButton();
  setupRevealAnimations();
  setupSkillAnimations();
  setupCounters();
  setupContactForm();
  setupCursor();
  injectCurrentYear();
});

function syncMeta() {
  const { meta } = siteContent;
  const previewImage = getAbsoluteUrl(meta.previewImage, meta.siteUrl);

  document.title = meta.title;
  updateMetaTag('meta[name="description"]', meta.description);
  updateMetaTag('meta[name="theme-color"]', meta.themeColor);
  updateMetaTag('meta[property="og:title"]', meta.title);
  updateMetaTag('meta[property="og:description"]', meta.description);
  updateMetaTag('meta[property="og:url"]', meta.siteUrl);
  updateMetaTag('meta[property="og:image"]', previewImage);
  updateMetaTag('meta[property="og:image:url"]', previewImage);
  updateMetaTag('meta[property="og:image:secure_url"]', previewImage);
  updateMetaTag('meta[property="og:image:alt"]', meta.previewImageAlt);
  updateMetaTag('meta[name="twitter:title"]', meta.title);
  updateMetaTag('meta[name="twitter:description"]', meta.description);
  updateMetaTag('meta[name="twitter:url"]', meta.siteUrl);
  updateMetaTag('meta[name="twitter:image"]', previewImage);
  updateMetaTag('meta[name="twitter:image:alt"]', meta.previewImageAlt);

  const canonical = document.querySelector('link[rel="canonical"]');

  if (canonical) {
    canonical.setAttribute("href", meta.siteUrl);
  }
}

function renderSite() {
  renderHeader();
  renderHero();
  renderStats();
  renderAbout();
  renderSkills();
  renderExperience();
  renderInstagram();
  renderCredentials();
  renderContact();
  renderFooter();
  renderSocialDock();
}

function renderHeader() {
  const links = renderNavLinks(siteContent.navigation);
  const header = document.getElementById("site-header");

  header.innerHTML = `
    <div class="site-header-wrap">
      <nav class="site-nav" id="navbar" aria-label="Primary">
        <a class="nav-logo" href="#hero">${siteContent.brand.shortName}</a>
        <div class="nav-desktop">
          <ul class="nav-links">${links}</ul>
        </div>
        <div class="nav-actions">
          <a class="nav-cta" href="#contact">Hire Me</a>
          <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-menu">
            <span></span>
            <span></span>
            <span></span>
            <span class="sr-only">Toggle menu</span>
          </button>
        </div>
      </nav>
      <div class="mobile-menu" id="mobile-menu">
        <ul class="mobile-links">${links}</ul>
        <a class="mobile-cta" href="#contact">Hire Me</a>
      </div>
    </div>
  `;
}

function renderHero() {
  const hero = siteContent.hero;
  const root = document.getElementById("hero-root");

  root.innerHTML = `
    <section class="hero-section" id="hero">
      <div class="hero-grid" aria-hidden="true"></div>
      <div class="shell">
        <div class="hero-layout">
          <div class="hero-copy">
            <p class="eyebrow reveal">${hero.eyebrow}</p>
            <h1 class="hero-title reveal">
              ${hero.titleLead}<br />
              <em>${hero.titleAccent}</em>
            </h1>
            <p class="hero-subtitle reveal">${hero.subtitle}</p>
            <p class="hero-text reveal">${hero.description}</p>
            <div class="hero-actions reveal">
              <a class="btn btn-primary" href="${hero.primaryCta.href}">${hero.primaryCta.label}</a>
              <a class="btn btn-secondary" href="${hero.secondaryCta.href}">
                <span></span>${hero.secondaryCta.label}
              </a>
            </div>
            <ul class="hero-highlights reveal">
              ${hero.highlights
                .map((item) => {
                  const highlight = typeof item === "string" ? { label: item, icon: "spark" } : item;
                  return `<li>${renderContentIcon(highlight.icon)}<span>${highlight.label}</span></li>`;
                })
                .join("")}
            </ul>
          </div>
          <div class="hero-media reveal">
            <div class="hero-frame">
              <div class="hero-photo">
                <img src="${hero.portrait}" alt="${siteContent.brand.fullName}" />
              </div>
              <div class="hero-badge">
                <strong>${hero.badge.value}</strong>
                <span>${hero.badge.label}</span>
              </div>
            </div>
            <p class="hero-side-label">${hero.sideLabel}</p>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderStats() {
  const root = document.getElementById("stats-root");

  root.innerHTML = `
    <section class="stats-section" aria-label="Quick facts">
      <div class="shell">
        <div class="stats-grid">
          ${siteContent.stats
            .map(
              (item) => `
                <article class="stat-card reveal">
                  <span class="stat-icon">${renderContentIcon(item.icon)}</span>
                  <div class="stat-value" data-target="${item.value}" data-suffix="${item.suffix}">0</div>
                  <p class="stat-label">${item.label}</p>
                </article>
              `
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function renderAbout() {
  const about = siteContent.about;
  const root = document.getElementById("about-root");

  root.innerHTML = `
    <section class="content-section" id="about">
      <div class="shell">
        <div class="two-column-grid about-grid">
          <div class="stack reveal">
            ${renderSectionIntro(about.tag, about.title, about.lead)}
            <div class="feature-grid">
              ${about.features
                .map(
                  (feature) => `
                    <article class="feature-card reveal">
                      <div class="feature-mark">${renderContentIcon(feature.icon)}<span>${feature.mark}</span></div>
                      <h3>${feature.title}</h3>
                      <p>${feature.description}</p>
                    </article>
                  `
                )
                .join("")}
            </div>
          </div>
          <aside class="quote-panel reveal">
            <blockquote>${about.quote}</blockquote>
            <p class="quote-signature">${about.signature}</p>
            <div class="snapshot-row">
              ${about.snapshots
                .map(
                  (snapshot) => `
                    <div class="snapshot-card">
                      <div class="snapshot-top">
                        <span class="snapshot-icon">${renderContentIcon(snapshot.icon)}</span>
                        <span>${snapshot.label}</span>
                      </div>
                      <strong>${snapshot.value}</strong>
                    </div>
                  `
                )
                .join("")}
            </div>
          </aside>
        </div>
      </div>
    </section>
  `;
}

function renderSkills() {
  const skills = siteContent.skills;
  const root = document.getElementById("skills-root");

  root.innerHTML = `
    <section class="content-section" id="skills">
      <div class="shell">
        <div class="two-column-grid skills-grid">
          <div class="stack reveal">
            ${renderSectionIntro(skills.tag, skills.title, skills.lead)}
            <div class="skills-list" id="skills-list">
              ${skills.bars
                .map(
                  (skill) => `
                    <div class="skill-row">
                      <div class="skill-meta">
                        <span>${skill.label}</span>
                        <span>${skill.value}%</span>
                      </div>
                      <div class="skill-bar">
                        <div class="skill-fill" data-width="${skill.value}"></div>
                      </div>
                    </div>
                  `
                )
                .join("")}
            </div>
          </div>
          <div class="card-grid reveal">
            ${skills.cards
              .map(
                (card) => `
                  <article class="detail-card">
                    <div class="detail-mark">${renderContentIcon(card.icon)}<span>${card.mark}</span></div>
                    <h3>${card.title}</h3>
                    <p>${card.description}</p>
                  </article>
                `
              )
              .join("")}
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderExperience() {
  const experience = siteContent.experience;
  const root = document.getElementById("experience-root");

  root.innerHTML = `
    <section class="content-section" id="experience">
      <div class="shell">
        <div class="section-heading reveal">
          ${renderSectionIntro(experience.tag, experience.title)}
        </div>
        <div class="timeline-list">
          ${experience.items
            .map(
              (item) => `
                <article class="timeline-item reveal">
                  <div class="timeline-dot" aria-hidden="true"></div>
                  <div class="timeline-top">
                    <div class="timeline-role">
                      <span class="timeline-icon">${renderContentIcon(item.icon)}</span>
                      <div>
                        <h3>${item.role}</h3>
                        <p class="timeline-company">${item.company} | ${item.location}</p>
                      </div>
                    </div>
                    <p class="timeline-period">${item.period}</p>
                  </div>
                  <ul class="timeline-points">
                    ${item.tasks.map((task) => `<li>${task}</li>`).join("")}
                  </ul>
                </article>
              `
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function renderInstagram() {
  const instagram = siteContent.instagram;
  const root = document.getElementById("instagram-root");

  root.innerHTML = `
    <section class="content-section accent-section">
      <div class="shell">
        <div class="accent-layout">
          <div class="stack reveal">
            ${renderSectionIntro(instagram.tag, instagram.title, instagram.description)}
            <div class="mini-stats">
              ${instagram.stats
                .map(
                  (item) => `
                    <div class="mini-stat">
                      <div class="mini-stat-top">
                        <span class="mini-stat-icon">${renderContentIcon(item.icon)}</span>
                        <span>${item.label}</span>
                      </div>
                      <strong>${item.value}</strong>
                    </div>
                  `
                )
                .join("")}
            </div>
          </div>
          <a class="btn btn-instagram reveal" href="${instagram.href}" target="_blank" rel="noopener">
            ${socialIcons.instagram}
            <span>${instagram.ctaLabel}</span>
          </a>
        </div>
      </div>
    </section>
  `;
}

function renderCredentials() {
  const credentials = siteContent.credentials;
  const root = document.getElementById("credentials-root");

  root.innerHTML = `
    <section class="content-section" id="credentials">
      <div class="shell">
        <div class="section-heading reveal">
          ${renderSectionIntro(credentials.tag, credentials.title)}
        </div>
        <div class="profile-grid">
          <article class="profile-card reveal">
            <div class="profile-heading">
              <span class="profile-icon">${renderContentIcon("book")}</span>
              <h3>Education</h3>
            </div>
            <div class="edu-list">
              ${credentials.education
                .map(
                  (item) => `
                    <div class="edu-item">
                      <strong>${item.name}</strong>
                      <span>${item.school}</span>
                      <small>${item.year}</small>
                    </div>
                  `
                )
                .join("")}
            </div>
          </article>
          <article class="profile-card reveal">
            <div class="profile-heading">
              <span class="profile-icon">${renderContentIcon("globe")}</span>
              <h3>Languages</h3>
            </div>
            <div class="language-list">
              ${credentials.languages
                .map(
                  (item) => `
                    <div class="language-row">
                      <div class="language-text">
                        <strong>${item.name}</strong>
                        <span>${item.level}</span>
                      </div>
                      <div class="language-dots" aria-label="${item.level}">
                        ${Array.from({ length: 5 }, (_, index) => {
                          const filled = index < item.score ? " filled" : "";
                          return `<span class="dot${filled}"></span>`;
                        }).join("")}
                      </div>
                    </div>
                  `
                )
                .join("")}
            </div>
          </article>
          <article class="profile-card reveal">
            <div class="profile-heading">
              <span class="profile-icon">${renderContentIcon("spark")}</span>
              <h3>Interests</h3>
            </div>
            <div class="interest-list">
              ${credentials.interests
                .map((item) => `<span class="interest-chip">${item}</span>`)
                .join("")}
            </div>
            <div class="availability-card">
              <div class="availability-heading">
                <span class="availability-icon">${renderContentIcon(credentials.availability.icon)}</span>
                <p class="availability-kicker">${credentials.availability.kicker}</p>
              </div>
              <strong>${credentials.availability.title}</strong>
              <span>${credentials.availability.note}</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  `;
}

function renderContact() {
  const contact = siteContent.contact;
  const root = document.getElementById("contact-root");

  root.innerHTML = `
    <section class="content-section" id="contact">
      <div class="shell">
        <div class="two-column-grid contact-grid">
          <div class="stack reveal">
            ${renderSectionIntro(contact.tag, contact.title, contact.lead)}
            <div class="contact-list">
              ${contact.items
                .map(
                  (item) => `
                    <a class="contact-item" href="${item.href}" ${
                      item.kind === "location" ? 'target="_blank" rel="noopener"' : ""
                    }>
                      <span class="contact-badge">${renderContentIcon(contactBadges[item.kind] ?? "spark")}</span>
                      <span class="contact-copy">
                        <strong>${item.label}</strong>
                        <span>${item.value}</span>
                      </span>
                    </a>
                  `
                )
                .join("")}
            </div>
          </div>
          <div class="form-card reveal">
            <form id="contact-form" novalidate>
              <div class="form-row">
                <label>
                  <span>First Name</span>
                  <input name="firstName" type="text" placeholder="Your name" />
                </label>
                <label>
                  <span>Last Name</span>
                  <input name="lastName" type="text" placeholder="Your surname" />
                </label>
              </div>
              <label>
                <span>Email Address</span>
                <input name="email" type="email" placeholder="you@example.com" />
              </label>
              <label>
                <span>Subject</span>
                <input name="subject" type="text" placeholder="Collaboration, job offer..." />
              </label>
              <label>
                <span>Message</span>
                <textarea name="message" rows="6" placeholder="Tell me about your project or opportunity..."></textarea>
              </label>
              <p class="form-note">${contact.form.note}</p>
              <button class="btn btn-primary form-submit" type="submit">${contact.form.submitLabel}</button>
              <p class="form-feedback" id="form-feedback" aria-live="polite"></p>
            </form>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderFooter() {
  const root = document.getElementById("site-footer");

  root.innerHTML = `
    <div class="shell footer-shell">
      <div>
        <p class="footer-brand">${siteContent.brand.fullName}</p>
        <p class="footer-copy"><span data-year></span> | ${siteContent.footer.copy}</p>
      </div>
      <div class="footer-links">
        ${siteContent.footer.links
          .map(
            (link) => `
              <a href="${link.href}" ${
                link.href.startsWith("http") ? 'target="_blank" rel="noopener"' : ""
              }>${link.label}</a>
            `
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderSocialDock() {
  const root = document.getElementById("social-dock");

  root.innerHTML = `
    <button class="scroll-top" id="scroll-top" type="button" aria-label="Back to top">
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M12 4.3 4.15 12.14l1.41 1.42 5.44-5.45V20h2V8.11l5.45 5.45 1.41-1.42z" />
      </svg>
      <span class="sr-only">Back to top</span>
    </button>
    <div class="social-dock" aria-label="Social links">
      ${siteContent.social
        .map(
          (item) => `
            <a class="social-link social-${item.kind}" href="${getSocialHref(item)}" target="_blank" rel="noopener" aria-label="${item.label}">
              <span class="social-tooltip">${item.label}</span>
              ${socialIcons[item.kind]}
            </a>
          `
        )
        .join("")}
    </div>
  `;
}

function setupScrollTopButton() {
  const button = document.getElementById("scroll-top");

  if (!button) {
    return;
  }

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  const syncButtonState = () => {
    button.classList.toggle("visible", window.scrollY > 320);
  };

  button.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion.matches ? "auto" : "smooth"
    });
  });

  syncButtonState();
  window.addEventListener("scroll", syncButtonState, { passive: true });
}

function renderNavLinks(links) {
  return links
    .map((link) => `<li><a href="${link.href}">${link.label}</a></li>`)
    .join("");
}

function getSocialHref(item) {
  if (item.kind !== "whatsapp") {
    return item.href;
  }

  const currentUrl = window.location.href;
  const text = `${item.message} Link: ${currentUrl}`;
  return `https://wa.me/${item.phone}?text=${encodeURIComponent(text)}`;
}

function renderContentIcon(iconName) {
  return contentIcons[iconName] ?? contentIcons.spark;
}

function updateMetaTag(selector, value) {
  const tag = document.querySelector(selector);

  if (tag && value) {
    tag.setAttribute("content", value);
  }
}

function getAbsoluteUrl(pathOrUrl, baseUrl = window.location.origin) {
  return new URL(pathOrUrl, baseUrl).href;
}

function renderSectionIntro(tag, title, lead = "") {
  return `
    <p class="section-tag">${tag}</p>
    <h2 class="section-title">${title}</h2>
    <div class="section-line" aria-hidden="true"></div>
    ${lead ? `<p class="section-lead">${lead}</p>` : ""}
  `;
}

function setupHeaderState() {
  const navbar = document.getElementById("navbar");

  const syncScrolledState = () => {
    navbar.classList.toggle("scrolled", window.scrollY > 32);
  };

  syncScrolledState();
  window.addEventListener("scroll", syncScrolledState, { passive: true });
}

function setupMobileMenu() {
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.getElementById("mobile-menu");

  if (!toggle || !menu) {
    return;
  }

  const allLinks = menu.querySelectorAll("a");
  const isMenuOpen = () => document.body.classList.contains("menu-open");

  const closeMenu = () => {
    document.body.classList.remove("menu-open");
    toggle.setAttribute("aria-expanded", "false");
  };

  toggle.addEventListener("click", () => {
    const nextState = toggle.getAttribute("aria-expanded") !== "true";
    document.body.classList.toggle("menu-open", nextState);
    toggle.setAttribute("aria-expanded", String(nextState));
  });

  allLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("pointerdown", (event) => {
    if (!isMenuOpen()) {
      return;
    }

    const target = event.target;

    if (!(target instanceof Node)) {
      return;
    }

    if (menu.contains(target) || toggle.contains(target)) {
      return;
    }

    closeMenu();
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });
}

function setupRevealAnimations() {
  const items = document.querySelectorAll(".reveal, .timeline-item, .stat-card");

  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.18 }
  );

  items.forEach((item) => observer.observe(item));
}

function setupSkillAnimations() {
  const container = document.getElementById("skills-list");

  if (!container || !("IntersectionObserver" in window)) {
    document.querySelectorAll(".skill-fill").forEach((bar) => {
      bar.style.width = `${bar.dataset.width}%`;
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.querySelectorAll(".skill-fill").forEach((bar, index) => {
          window.setTimeout(() => {
            bar.style.width = `${bar.dataset.width}%`;
          }, index * 80);
        });

        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.35 }
  );

  observer.observe(container);
}

function setupCounters() {
  const counters = document.querySelectorAll(".stat-value");

  if (!counters.length) {
    return;
  }

  const animate = (element) => {
    const target = Number(element.dataset.target);
    const suffix = element.dataset.suffix ?? "";
    let current = 0;
    const increment = Math.max(1, Math.floor(target / 24));

    const timer = window.setInterval(() => {
      current = Math.min(current + increment, target);
      element.textContent = `${current}${suffix}`;

      if (current >= target) {
        window.clearInterval(timer);
      }
    }, 50);
  };

  if (!("IntersectionObserver" in window)) {
    counters.forEach(animate);
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        animate(entry.target);
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.55 }
  );

  counters.forEach((counter) => observer.observe(counter));
}

function setupContactForm() {
  const form = document.getElementById("contact-form");
  const feedback = document.getElementById("form-feedback");

  if (!form || !feedback) {
    return;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const subject = (data.get("subject") || "").toString().trim();
    const message = (data.get("message") || "").toString().trim();
    const firstName = (data.get("firstName") || "").toString().trim();
    const lastName = (data.get("lastName") || "").toString().trim();
    const email = (data.get("email") || "").toString().trim();
    const fullName = [firstName, lastName].filter(Boolean).join(" ").trim();

    if (!subject || !message || !email) {
      feedback.textContent = "Please fill in your email, subject, and message first.";
      return;
    }

    const body = [
      `Name: ${fullName || "Not provided"}`,
      `Email: ${email}`,
      "",
      message
    ].join("\n");

    const mailto = `mailto:emusef4@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    feedback.textContent = "Your email app should open with the message prepared.";
  });
}

function setupCursor() {
  if (!window.matchMedia("(pointer: fine)").matches) {
    document.documentElement.classList.add("touch-input");
    return;
  }

  const cursor = document.getElementById("cursor");
  const ring = document.getElementById("cursor-ring");

  if (!cursor || !ring) {
    return;
  }

  let mouseX = 0;
  let mouseY = 0;
  let ringX = 0;
  let ringY = 0;

  document.addEventListener("mousemove", (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
    cursor.style.left = `${mouseX}px`;
    cursor.style.top = `${mouseY}px`;
  });

  const animateRing = () => {
    ringX += (mouseX - ringX) * 0.16;
    ringY += (mouseY - ringY) * 0.16;
    ring.style.left = `${ringX}px`;
    ring.style.top = `${ringY}px`;
    window.requestAnimationFrame(animateRing);
  };

  animateRing();

  document.querySelectorAll("a, button, input, textarea, .feature-card, .detail-card, .interest-chip").forEach((element) => {
    element.addEventListener("mouseenter", () => {
      cursor.classList.add("cursor-active");
      ring.classList.add("cursor-active");
    });

    element.addEventListener("mouseleave", () => {
      cursor.classList.remove("cursor-active");
      ring.classList.remove("cursor-active");
    });
  });
}

function injectCurrentYear() {
  document.querySelectorAll("[data-year]").forEach((item) => {
    item.textContent = new Date().getFullYear();
  });
}
