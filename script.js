/* =========================================================
   UPDATE CONTENT
   Add, remove, or change entries.
   ========================================================= */

const PROJECTS = [
  {
    id: "ID",
    title: "Title", 
    tagline: "Tagline",
    tags: ["Tag"],
    shortDesc: "Short description.",
    fullDesc: "Description.",
    github: "https://github.com/",
    tile: 1,
    featured: true
  },
  
];

const ACTIVITIES = [
  {
    period: "Period",
    title: "Title",
    role: "Role",
    desc: "Description"
  },
  
];

const GALLERY_PHOTOS = [
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
