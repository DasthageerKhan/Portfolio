/* ---------- Updated Configuration From Resume Only ---------- */
const defaultConfig = {
  developer_name: "Dasthageer Khan",
  job_title: "Python Developer & UI/UX Designer",
  bio_text:
    "Innovative Computer Applications graduate skilled in Python, automation, and user‑centric design. I craft modern digital interfaces and streamline workflows — now harnessing AI tools to unlock smarter, faster, and more impactful solutions.",

  email_address: "dasthgeerkhan07@gmail.com",
  portfolio_url: "+91 83099 80142",
  portfolio_tel: "+91 8309980142",

  linkedin_url: "https://www.linkedin.com/in/dasthageer-khan-b22513288",
  github_url: "https://github.com/DasthageerKhan",

  primary_color: "#2C9D95",
  secondary_color: "#60CFC6",
  accent_color: "#184A47",
  background_color: "#eaf6f4",
  text_color: "#134e4a",

  resume_file: "resume.pdf"
};

/* ---------- Update Initials ---------- */
function updateProfileInitial(name) {
  const el = document.getElementById("profile-initial");
  if (!el || !name) return;

  const words = name.trim().split(" ");
  let initials = "";

  if (words.length === 1) initials = words[0][0];
  else initials = words[0][0] + words[words.length - 1][0];

  el.textContent = initials.toUpperCase();
}

/* ---------- Apply Color Theme ---------- */
function applyColors(config) {
  const primary = config.primary_color;
  const secondary = config.secondary_color;
  const accent = config.accent_color;
  const bg = config.background_color;
  const text = config.text_color;

  document.body.style.background = `linear-gradient(135deg, ${bg} 0%, ${secondary} 100%)`;

  const existing = document.getElementById("custom-colors");
  if (existing) existing.remove();

  const style = document.createElement("style");
  style.id = "custom-colors";
  style.textContent = `
    .name { 
      background: linear-gradient(135deg, ${primary}, ${secondary});
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .profile-image {
      background: linear-gradient(135deg, ${primary}, ${secondary});
    }
    .btn-primary {
      background: linear-gradient(135deg, ${primary}, ${secondary});
      color: white;
      box-shadow: 0 4px 15px ${primary}40;
    }
    .card-icon, .contact-icon { color: ${primary}; }
    .tech-tag, .skill-item { background: ${primary}1A; color: ${primary}; }
    .project-item, .experience-item { border-left-color: ${primary}; }
    .experience-role { color: ${primary}; }
  `;
  document.head.appendChild(style);

  document
    .querySelectorAll(
      ".card-title, .project-title, .skill-name, .experience-company"
    )
    .forEach((el) => (el.style.color = accent));

  document
    .querySelectorAll(
      ".title, .project-description, .experience-description, .bio"
    )
    .forEach((el) => (el.style.color = text));
}

/* ---------- Apply All Resume Config To DOM ---------- */
function applyConfigToDOM(config) {
  document.getElementById("developer-name").textContent =
    config.developer_name;
  document.getElementById("job-title").textContent = config.job_title;
  document.getElementById("bio-text").textContent = config.bio_text;

  updateProfileInitial(config.developer_name);
  applyColors(config);

  // Update links
  const emailLink = document.getElementById("email-link");
  if (emailLink) {
    emailLink.setAttribute("href", `mailto:${config.email_address}`);
  }

  const portfolioLink = document.getElementById("portfolio-link");
  if (portfolioLink) {
    portfolioLink.setAttribute("href", `tel:${config.portfolio_tel}`);
  }

  const linkedinLink = document.getElementById("linkedin-link");
  if (linkedinLink) {
    linkedinLink.setAttribute("href", config.linkedin_url);
  }

  const githubLink = document.getElementById("github-link");
  if (githubLink && config.github_url !== "#") {
    githubLink.setAttribute("href", config.github_url);
  }

  const resumeLink = document.getElementById("download-resume");
  if (resumeLink) {
    resumeLink.setAttribute("href", config.resume_file);
  }
}

/* ---------- Smooth Scroll for Get In Touch Button ---------- */
function attachUIBehavior() {
  const btn = document.getElementById("hero-getin-btn");
  const contact = document.getElementById("contact-card");

  btn.addEventListener("click", () => {
    contact.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

/* ---------- Initialize ---------- */
document.addEventListener("DOMContentLoaded", function () {
  applyConfigToDOM(defaultConfig);
  attachUIBehavior();
});
