/* =========================================================
   UPDATE CONTENT
   Add, remove, or change entries.
   ========================================================= */

const PROJECTS = [
  /*
  Template to fill in project explanation.
  {
  id: ,
  title: ,
  tagline: ,
  tags: [],
  shortDesc: ,
  fullDesc: `<u>Situation</u> <br>    
                Hypothetical: Fake Situation<br> 
                Real: Real situation<br> 
                <u>Task</u> 
                <br> Explain your specific responsibility or the goal you were trying to achieve. <br>
               <u>Action</u> 
               <br> Describe the steps you personally took to address the task or challenge. <br>
                <u>Result</u> <br>
                 Share the outcome of your actions, emphasizing measurable achievements, lessons learned, and how the experience strengthened your skills.`,
  github: ,
  tile: ,
  featured: false

  }

  */
  {
    id: "FraudDashboard",
    title: "Fraud Scoring Dashboard", 
    tagline: "Real-Time Fraud Detection System Microservice",
    tags: [, "ML/AI","Fintech", "FastAPI"],
    shortDesc: "An event-driven, microservices-based transaction risk scoring platform, inspired by production systems like Stripe Radar.",
    fullDesc: `<u>Situation</u> <br>    
                Hypothetical: Digital payment platform processes transactions in real time and wants to be able to flag potential fraud within milliseconds without slowing down checkout for users.<br> 
                Real: Intention to explore event-driven microservices, asynchronous ML inference, and containerized service orchestration.<br> 
                <u>Task</u> 
                <br> 
                Built a system that ingests transactions asynchronously, scores them with a trained ML model, and surfaces results on a live dashboard without adding latency to the ingestion path.
                <br>
               <u>Action</u> 
               <br> Built a FastAPI endpoint that validates and publishes transactions to Kafka, decoupling ingestion from inference by a trained XGBoost classifier using scikit-learn.
                    Serialized using joblib for train/inference parity then a Kafka consumer worker scores streaming events and persists results to PostgreSQL with visualisation on an auto-refreshing Streamlit dashboard. 
                    The full stack was containerized with Docker Compose.
                <br>
                <u>Result</u> <br>
                 Achieved 76.8% recall (43/56) on held-out validation data, confirmed via confusion matrix, with a working end-to-end asynchronous pipeline from ingestion to live visualization.`,
    github: "https://github.com/ari117-i9/Real-Time-Fraud-Detection-System",
    tile: 1,
    featured: true
  },

  {
    id: "Scala",
    title: "Inventory CRUD App",
    tagline: "Full Stack CRUD App Personal Project",
    tags: ["MVC", "React", "Express.js"],
    shortDesc: "A full-stack CRUD application for managing grocery store inventory.",
    fullDesc: `<u>Situation</u> <br>    
                  Hypothetical: Small businesses like grocery stores need a simple internal tool to track product stock, pricing, and availability.<br> 
                  Real: This project was a personal learning exercise to practice full-stack CRUD architecture, REST API design, and MVC separation of concerns.<br> 
                  <u>Task</u> 
                  <br> Built a full-stack inventory app allowing a user to view, add, update, and delete grocery products through a REST API. <br>
                <u>Action</u> 
                <br> Built a Node.js/Express backend with 5 REST endpoints, using Mongoose schemas with required-field validation and centralized error-handling middleware wrapped with express-async-handler. 
                     Built a React (Vite + Tailwind) frontend with React Router across 4 views, using Axios to consume the API, toast notifications for feedback, and CORS restricted to a single trusted frontend origin. <br>
                  <u>Result</u> <br>
                  Delivered a working full CRUD flow across 5 endpoints and 4 frontend views, deepening hands-on understanding of REST API design, MVC structure, and basic API security practices like schema validation and origin restriction.`,
    github: "https://github.com/ari117-i9/Grocery-CRUD-APP",
    tile: 2,
    featured: true
  },

  {
    id: "PantryFlow",
    title: "PantryFlow - ScalaFX Application",
    tagline: "Food Pantry Inventory & Demand Tracker",
    tags: ["MVC", "Scala 3", "OOP"],
    shortDesc: " Scala 3 / ScalaFX desktop application built for a food pantry coordinator, addressing UN SDG 1 (\"No Poverty\").",
    fullDesc: `<u>Situation</u> <br>    
                  Hypothetical: Food pantry needs to track donated inventory, expiration dates, and beneficiary needs to minimize waste while prioritizing urgent cases.<br> 
                  Real: Build a standalone ScalaFX desktop application that demonstrates the advanced OOP and third-party library skills  have acquired across the semester.<br> 
                  <u>Task</u> 
                  <br> Built a desktop app to manage pantry inventory, beneficiary registration, requests, and generate waste-minimizing distribution plans. <br>
                <u>Action</u> 
                <br> Built a ScalaFX MVC application with one FXML view and controller per tab, persisting data using ScalikeJDBC to an embedded Derby database. Implemented a DistributionPlanner allocation algorithm 
                     prioritizing near expiry stock and higher urgency requests, splitting shortages proportionally by household size and used Claude and Gemini as drafting tools throughout, manually correcting compile errors and design flaws before acceptance. <br>
                  <u>Result</u> <br>
                  Delivered a working four tab CRUD application with cascading deletes, full-text search, and a functioning distribution algorithm, deepening hands-on understanding of MVC design, database persistence, and allocation-algorithm logic.`,
    github: "https://github.com/ari117-i9/OOP_Final_Project",
    tile: 3,
    featured: true
  },
  
];

const ACTIVITIES = [
  /*
  Template to fill in activities description.
  {
    period: "Period",
    title: "Title",
    role: "Role",
    desc: "Description"
  },
  */
  {
    period: "Period",
    title: "Title",
    role: "Role",
    desc: "Description"
  },
  
];

const GALLERY_PHOTOS = [
  /*
  Template to fill in image info.
  {
    { id: "g1", label: "Label", tile: 1 }
  },
  */
  { id: "g1", label: "Label", tile: 1 }  
];

/* =========================================================
   HELPERS
   ========================================================= */

function initials(title) {
  return title
    .split(" ")
    .map(w => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function catalogNo(index) {
  return "No. " + String(index + 1).padStart(2, "0");
}

function tileClass(tile) {
  return "tile-tint-" + tile;
}

/* =========================================================
   RENDER: PROJECT CARDS (shared by featured + full grid)
   ========================================================= */

function projectCardHTML(project, index) {
  return `
    <article class="project-card">
      <div class="project-tile ${tileClass(project.tile)}">
        <span class="catalog-no">${catalogNo(index)}</span>
        ${initials(project.title)}
      </div>
      <div class="project-body">
        <h3>${project.title}</h3>
        <p class="project-tagline">${project.tagline}</p>
        <div class="tag-row">
          ${project.tags.map(t => `<span class="tag-chip">${t}</span>`).join("")}
        </div>
        <p class="project-desc">${project.shortDesc}</p>
        <div class="card-links">
          <a href="#project-${project.id}" class="text-link">Details →</a>
          <a href="${project.github}" class="text-link" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
        </div>
      </div>
    </article>
  `;
}

function renderFeatured() {
  const el = document.getElementById("featuredGrid");
  const featured = PROJECTS.filter(p => p.featured);
  el.innerHTML = featured
    .map(p => projectCardHTML(p, PROJECTS.indexOf(p)))
    .join("");
}

function renderProjectsGrid() {
  const el = document.getElementById("projectsGrid");
  el.innerHTML = PROJECTS.map((p, i) => projectCardHTML(p, i)).join("");
}

function renderDropdown() {
  const el = document.getElementById("projectsDropdown");
  el.innerHTML = PROJECTS
    .map(p => `<li><a href="#project-${p.id}">${p.title}</a></li>`)
    .join("");
}

function renderProjectDetail(id) {
  const el = document.getElementById("projectDetailContent");
  const index = PROJECTS.findIndex(p => p.id === id);
  const project = PROJECTS[index];

  if (!project) {
    el.innerHTML = `<p>Couldn't find that project. <a href="#projects" class="text-link">Back to all projects</a></p>`;
    return;
  }

  el.innerHTML = `
    <div class="detail-head">
      <div class="detail-tile ${tileClass(project.tile)}">${initials(project.title)}</div>
      <div class="detail-copy">
        <p class="catalog-no">${catalogNo(index)}</p>
        <h1>${project.title}</h1>
        <p class="project-tagline">${project.tagline}</p>
        <div class="tag-row">
          ${project.tags.map(t => `<span class="tag-chip">${t}</span>`).join("")}
        </div>
        <a href="${project.github}" class="btn btn--primary" target="_blank" rel="noopener noreferrer">GitHub →</a>
      </div>
    </div>
    <div class="detail-desc">
      <p>${project.fullDesc}</p>
    </div>
  `;
}

/* =========================================================
   RENDER: EXTRACURRICULARS
   ========================================================= */

function renderActivities() {
  const el = document.getElementById("activityList");
  el.innerHTML = ACTIVITIES.map(a => `
    <div class="activity">
      <p class="activity-period">${a.period}</p>
      <div>
        <h3>${a.title}</h3>
        <p class="activity-role">${a.role}</p>
        <p>${a.desc}</p>
      </div>
    </div>
  `).join("");
}

function galleryItemHTML(photo) {
  return `
    <button class="gallery-item ${tileClass(photo.tile)}" data-photo="${photo.id}" aria-label="View photo: ${photo.label}">
      <span>${photo.label}</span>
    </button>
  `;
}

function renderGalleries() {
  document.getElementById("homeGallery").innerHTML =
    GALLERY_PHOTOS.slice(0, 4).map(galleryItemHTML).join("");
  document.getElementById("extracurricularGallery").innerHTML =
    GALLERY_PHOTOS.map(galleryItemHTML).join("");
}

/* =========================================================
   NAVIGATION / ROUTING
   ========================================================= */

const PAGE_IDS = ["home", "projects", "extracurriculars"];

function showPage(pageId) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("page--active"));
  const target = document.getElementById("page-" + pageId);
  (target || document.getElementById("page-home")).classList.add("page--active");

  document.querySelectorAll(".nav-link").forEach(link => {
    const linkPage = link.dataset.page;
    const isActive = linkPage === pageId || (pageId === "project-detail" && linkPage === "projects");
    link.classList.toggle("is-active", isActive);
  });

  window.scrollTo(0, 0);
}

function route() {
  const hash = location.hash.replace("#", "");
  closeDropdown();
  closeMobileMenu();

  if (hash.startsWith("project-")) {
    const id = hash.replace("project-", "");
    renderProjectDetail(id);
    showPage("project-detail");
  } else if (PAGE_IDS.includes(hash)) {
    showPage(hash);
  } else {
    showPage("home");
  }
}

/* =========================================================
   DROPDOWN MENU
   ========================================================= */

const dropdownWrap = document.querySelector(".nav-item--dropdown");
const dropdownToggle = document.getElementById("dropdownToggle");

function openDropdown() {
  dropdownWrap.classList.add("is-open");
  dropdownToggle.setAttribute("aria-expanded", "true");
}
function closeDropdown() {
  dropdownWrap.classList.remove("is-open");
  dropdownToggle.setAttribute("aria-expanded", "false");
}
function toggleDropdown() {
  dropdownWrap.classList.contains("is-open") ? closeDropdown() : openDropdown();
}

dropdownToggle.addEventListener("click", e => {
  e.preventDefault();
  e.stopPropagation();
  toggleDropdown();
});

document.addEventListener("click", e => {
  if (!dropdownWrap.contains(e.target)) closeDropdown();
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeDropdown();
});

/* =========================================================
   MOBILE MENU
   ========================================================= */

const menuToggle = document.getElementById("menuToggle");
const siteNav = document.getElementById("siteNav");

function closeMobileMenu() {
  siteNav.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
}
menuToggle.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

/* =========================================================
   LIGHTBOX
   ========================================================= */

const lightbox = document.getElementById("lightbox");
const lightboxTile = document.getElementById("lightboxTile");
const lightboxCaption = document.getElementById("lightboxCaption");
const lightboxClose = document.getElementById("lightboxClose");
const lightboxBackdrop = document.getElementById("lightboxBackdrop");
let lastFocusedEl = null;

function openLightbox(photo) {
  lastFocusedEl = document.activeElement;
  lightboxTile.className = "lightbox-tile " + tileClass(photo.tile);
  lightboxCaption.textContent = photo.label;
  lightbox.hidden = false;
  lightboxClose.focus();
}

function closeLightbox() {
  lightbox.hidden = true;
  if (lastFocusedEl) lastFocusedEl.focus();
}

document.addEventListener("click", e => {
  const item = e.target.closest(".gallery-item");
  if (item) {
    const photo = GALLERY_PHOTOS.find(p => p.id === item.dataset.photo);
    if (photo) openLightbox(photo);
  }
});

lightboxClose.addEventListener("click", closeLightbox);
lightboxBackdrop.addEventListener("click", closeLightbox);
document.addEventListener("keydown", e => {
  if (e.key === "Escape" && !lightbox.hidden) closeLightbox();
});

/* =========================================================
   INIT
   ========================================================= */

renderFeatured();
renderProjectsGrid();
renderDropdown();
renderActivities();
renderGalleries();

window.addEventListener("hashchange", route);
route();
