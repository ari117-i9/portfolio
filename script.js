const PROFILE_IMAGE = '/images/profile.jpeg';

const PROJECTS = [
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
    featured: true,
  },
  {
    id: "CRUD",
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
    featured: true,
  },
  {
    id: "PantryFlow",
    title: "PantryFlow - ScalaFX Application",
    tagline: "Food Pantry Inventory & Demand Tracker",
    tags: ["AI-Assisted", "Scala 3", "OOP"],
    shortDesc: " Scala 3 / ScalaFX desktop application built for a food pantry coordinator, addressing UN SDG 1 (\"No Poverty\").",
    fullDesc: `<u>Situation</u> <br>    
                  Hypothetical: Food pantry needs to track donated inventory, expiration dates, and beneficiary needs to minimize waste while prioritizing urgent cases.<br> 
                  Real: Final Assignment for subject PRG2104:Object Oriented Programming to build a standalone ScalaFX desktop application that demonstrates the advanced OOP and third-party library skills acquired across the semester.<br> 
                  <u>Task</u> 
                  <br> Built a desktop app to manage pantry inventory, beneficiary registration, requests, and generate waste-minimizing distribution plans. <br>
                <u>Action</u> 
                <br> Built a ScalaFX MVC application with one FXML view and controller per tab, persisting data using ScalikeJDBC to an embedded Derby database. Implemented a DistributionPlanner allocation algorithm 
                     prioritizing near expiry stock and higher urgency requests, splitting shortages proportionally by household size and used Claude and Gemini as drafting tools throughout, manually correcting compile errors and design flaws before acceptance. <br>
                  <u>Result</u> <br>
                  Delivered a working four tab CRUD application with cascading deletes, full-text search, and a functioning distribution algorithm, deepening hands-on understanding of MVC design, database persistence, and allocation-algorithm logic.`,
    github: "https://github.com/ari117-i9/OOP_Final_Project",
    tile: 3,
    featured: true,
  },
];

const ACTIVITIES = [
  {
    period: "12th Mar. 2026",
    title: "A Product Manager’s Perspective",
    role: "Education Department Lead - Sunway Tech Club",
    desc: `Organised a product management talk for 16 students detailing daily responsibilities, essential skill sets, and 
          career roadmaps. Provided a look at the pros and cons of the profession to help participants transition from career 
          uncertainty to informed strategic alignment. 
`
  },

  {
    period: "29th Nov. 2025",
    title: "Malaysia Fight League (MFL) x Cloud November Fight Card",
    role: "Fighter - Amateur Muay Thai Category",
    desc: `By incorporating lesson learned from the previous loss, achieved a major success for the amateur debut with a 
          second round technical knockout (TKO) with renewed passion to further improve and achieve even bette results.`
  },

  {
    period: "26th Nov. 2025",
    title: "Portfolio Lab: Create your Personal E-Portfolio with the Power of AI",
    role: "Education Department Lead - Sunway Tech Club",
    desc: `Organised a personal portfolio Workshop for 32 Sunway students focused on prompt engineering, the STAR method, and personal 
          branding aligned with SDG 4 and SDG 8. Equipped participants with career-relevant portfolio components and practical 
          guidance on setting up GitHub Pages to enhance long-term employability.`
  },

  {
    period: "1st Nov. 2025",
    title: "Django Girls Kuala Lumpur 2025 Workshop",
    role: "Workshop Mentor",
    desc: `Mentored 30 female learners at a Django Girls workshop, helping them build and deploy live blog applications 
          using Python and Django. Collaboated with participants through debugging, reinforcing how critical careful 
          code inspection is for resolving technical errors.`
  },

  {
    period: "27th Sep. 2025",
    title: "Amazon Web Serivces (AWS) Community Day Malaysia 2025",
    role: "Volunteer - Sunway Tech Club",
    desc: `Volunteered at AWS Community Day, an annual event of technical discussions and workshops led by industry leaders and 
          expert AWS users. Contributed by managing venue logistics, attendee registration, and the distribution of event 
          merchandise.`
  },

  {
    period: "17th-18th May 2025",
    title: "Sunway Open Day",
    role: "Student Volunteer",
    desc: `Volunteered at Sunway's May Open Day to guide enquiring students and their families across the campus to 
          meet to a programme counsellor that is available. `
  },

  {
    period: "14th Dec. 2024",
    title: "Shark's Annual Smoker Fights",
    role: "Fighter - Kickboxing Category",
    desc: `Participated at Shark's annual members-only event as a test of grit. Suffered a dissapointing loss but gained meaningful lessons in drive, 
          intentional effort and time management through the preparation and the loss itself.`
  },
];

const GALLERY_PHOTOS = [
  { id: "g1", label: "MFL x Cloud", tile: 1, image: './images/MFL_2.jpeg' },   
  { id: "g2", label: "Portfolio Lab", tile: 2, image: './images/portfolioLabGroup.png' },
  { id: "g3", label: "Django Girls Workshop", tile: 3, image: './images/djangoGirls.jpg' }, 
  { id: "g4", label: "Sunway Open Day", tile: 4, image: './images/OpenDay.jpeg' },
  { id: "g7", label: "MFL x Cloud", tile: 5, image: './images/MFL_1.jpeg' },
  { id: "g5", label: "Portfolio Lab", tile: 6, image: './images/portfolioLabMain.png' },
  { id: "g7", label: "A Product Manager's Perspective", tile: 7, image: './images/productManager.png' },
  { id: "g6", label: "AWS Community Day 2025", tile: 8, image: './images/AWS.jpeg' },
  { id: "g8", label: "Shark's Annual Smokers (2025)", tile: 9, image: './images/Smokers.jpeg' },
];

/* =========================================================
   HELPERS
   ========================================================= */

function initials(title) {
  return title
    .split(" ")
    .map((w) => w[0])
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
      <div class="project-body">
        <h3>${project.title}</h3>
        <p class="project-tagline">${project.tagline}</p>
        <div class="tag-row">
          ${project.tags.map((t) => `<span class="tag-chip">${t}</span>`).join("")}
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
  const featured = PROJECTS.filter((p) => p.featured);
  el.innerHTML = featured
    .map((p) => projectCardHTML(p, PROJECTS.indexOf(p)))
    .join("");
}

function renderProjectsGrid() {
  const el = document.getElementById("projectsGrid");
  el.innerHTML = PROJECTS.map((p, i) => projectCardHTML(p, i)).join("");
}

function renderDropdown() {
  const el = document.getElementById("projectsDropdown");
  el.innerHTML = PROJECTS.map(
    (p) => `<li><a href="#project-${p.id}">${p.title}</a></li>`,
  ).join("");
}

function renderProjectDetail(id) {
  const el = document.getElementById("projectDetailContent");
  const index = PROJECTS.findIndex((p) => p.id === id);
  const project = PROJECTS[index];

  if (!project) {
    el.innerHTML = `<p>Couldn't find that project. <a href="#projects" class="text-link">Back to all projects</a></p>`;
    return;
  }

  const detailTileInner = project.image
    ? `<img src="${project.image}" alt="${project.title} screenshot">`
    : initials(project.title);
  const detailTileClasses = project.image ? "" : " " + tileClass(project.tile);

  el.innerHTML = `
    <div class="detail-head">
      <div class="detail-copy">
        <p class="catalog-no">${catalogNo(index)}</p>
        <h1>${project.title}</h1>
        <p class="project-tagline">${project.tagline}</p>
        <div class="tag-row">
          ${project.tags.map((t) => `<span class="tag-chip">${t}</span>`).join("")}
        </div>
        <a href="${project.github}" class="btn btn--primary" target="_blank" rel="noopener noreferrer">View on GitHub ↗</a>
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
  el.innerHTML = ACTIVITIES.map(
    (a) => `
    <div class="activity">
      <p class="activity-period">${a.period}</p>
      <div>
        <h3>${a.title}</h3>
        <p class="activity-role">${a.role}</p>
        <p>${a.desc}</p>
      </div>
    </div>
  `,
  ).join("");
}

function galleryItemHTML(photo) {
  const img = photo.image
    ? `<img src="${photo.image}" alt="${photo.label}">`
    : "";
  const classes = photo.image ? "" : " " + tileClass(photo.tile);
  return `
    <button class="gallery-item${classes}" data-photo="${photo.id}" aria-label="View photo: ${photo.label}">
      ${img}
      <span>${photo.label}</span>
    </button>
  `;
}

function renderGalleries() {
  document.getElementById("homeGallery").innerHTML = GALLERY_PHOTOS.slice(0, 4)
    .map(galleryItemHTML)
    .join("");
  document.getElementById("extracurricularGallery").innerHTML =
    GALLERY_PHOTOS.map(galleryItemHTML).join("");
}

/* =========================================================
   NAVIGATION / ROUTING
   ========================================================= */

const PAGE_IDS = ["home", "projects", "extracurriculars"];

function showPage(pageId) {
  document
    .querySelectorAll(".page")
    .forEach((p) => p.classList.remove("page--active"));
  const target = document.getElementById("page-" + pageId);
  (target || document.getElementById("page-home")).classList.add(
    "page--active",
  );

  document.querySelectorAll(".nav-link").forEach((link) => {
    const linkPage = link.dataset.page;
    const isActive =
      linkPage === pageId ||
      (pageId === "project-detail" && linkPage === "projects");
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

dropdownToggle.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  toggleDropdown();
});

document.addEventListener("click", (e) => {
  if (!dropdownWrap.contains(e.target)) closeDropdown();
});

document.addEventListener("keydown", (e) => {
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
  if (photo.image) {
    lightboxTile.className = "lightbox-tile";
    lightboxTile.innerHTML = `<img src="${photo.image}" alt="${photo.label}">`;
  } else {
    lightboxTile.className = "lightbox-tile " + tileClass(photo.tile);
    lightboxTile.innerHTML = "";
  }
  lightboxCaption.textContent = photo.label;
  lightbox.hidden = false;
  lightboxClose.focus();
}

function closeLightbox() {
  lightbox.hidden = true;
  if (lastFocusedEl) lastFocusedEl.focus();
}

document.addEventListener("click", (e) => {
  const item = e.target.closest(".gallery-item");
  if (item) {
    const photo = GALLERY_PHOTOS.find((p) => p.id === item.dataset.photo);
    if (photo) openLightbox(photo);
  }
});

lightboxClose.addEventListener("click", closeLightbox);
lightboxBackdrop.addEventListener("click", closeLightbox);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !lightbox.hidden) closeLightbox();
});

/* =========================================================
   RENDER: PROFILE PHOTO
   ========================================================= */

function renderProfilePhoto() {
  if (!PROFILE_IMAGE) return;
  document.getElementById("heroPortrait").innerHTML =
    `<img src="${PROFILE_IMAGE}" alt="">`;
}

/* =========================================================
   INIT
   ========================================================= */

renderProfilePhoto();
renderFeatured();
renderProjectsGrid();
renderDropdown();
renderActivities();
renderGalleries();

window.addEventListener("hashchange", route);
route();
