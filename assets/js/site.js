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

const contactBadges = {
  email: "@",
  phone: "TEL",
  location: "LOC"
};

document.addEventListener("DOMContentLoaded", () => {
  syncMeta();
  renderSite();
  setupHeaderState();
  setupMobileMenu();
  setupRevealAnimations();
  setupSkillAnimations();
  setupCounters();
  setupContactForm();
  setupCursor();
  injectCurrentYear();
});

function syncMeta() {
  document.title = siteContent.meta.title;
  const description = document.querySelector('meta[name="description"]');

  if (description) {
    description.setAttribute("content", siteContent.meta.description);
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
      <div class="hero-line" aria-hidden="true"></div>
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
                .map((item) => `<li>${item}</li>`)
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
                      <div class="feature-mark">${feature.mark}</div>
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
                      <strong>${snapshot.value}</strong>
                      <span>${snapshot.label}</span>
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
                    <div class="detail-mark">${card.mark}</div>
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
                    <div>
                      <h3>${item.role}</h3>
                      <p class="timeline-company">${item.company} | ${item.location}</p>
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
                      <strong>${item.value}</strong>
                      <span>${item.label}</span>
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
            <h3>Education</h3>
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
            <h3>Languages</h3>
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
            <h3>Interests</h3>
            <div class="interest-list">
              ${credentials.interests
                .map((item) => `<span class="interest-chip">${item}</span>`)
                .join("")}
            </div>
            <div class="availability-card">
              <p class="availability-kicker">${credentials.availability.kicker}</p>
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
                      <span class="contact-badge">${contactBadges[item.kind] ?? item.kind}</span>
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
  const allLinks = menu.querySelectorAll("a");

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
