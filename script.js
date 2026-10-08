const projects = [
  {
    title: "Jangan Pandang Belakang 2",
    category: "film",
    categoryLabel: "Film",
    meta: "Released 21 November 2024",
    image: "assets/images/jangan-pandang-belakang-2.jpg",
    imageAlt: "Official poster for Jangan Pandang Belakang 2",
    roles: ["VTR technical crew", "3rd assistant camera", "Edited promotional and OST content"],
    director: "Directed by Pierre Andre",
    link: "https://drive.google.com/drive/folders/1RM4dKGMk0e_vhGbLyf4Jf1x93c4dyEWb?usp=sharing"
  },
  {
    title: "Ngesot",
    category: "film",
    categoryLabel: "Film",
    meta: "Released 9 May 2024",
    image: "assets/images/ngesot.jpg",
    imageAlt: "Official poster for Ngesot",
    roles: ["Edited social media promos", "Edited a TMO teaser"],
    director: "Directed by Ayez Shaukat",
    link: "https://drive.google.com/drive/folders/1zLjmy0KZ9Z-CmXHDtelpR46m0f_F35C9?usp=sharing"
  },
  {
    title: "Satu Malam Di Pedajal",
    category: "film",
    categoryLabel: "Film",
    meta: "Released 2025",
    image: "assets/images/satu-malam-di-pedajal.jpg",
    imageAlt: "Official poster for Satu Malam Di Pedajal",
    roles: ["VTR technical crew", "3rd assistant camera", "Edited social media promos"],
    director: "Directed by Pierre Andre",
    link: "https://drive.google.com/drive/folders/13zSuDSIwRVtpRIFz1-p8Z2dZDAt30d0s?usp=sharing"
  },
  {
    title: "Lakhus: Penghulu Jin",
    category: "film",
    categoryLabel: "Film",
    meta: "Coming soon",
    image: "assets/images/lakhus-penghulu-jin.png",
    imageAlt: "Official poster for Lakhus: Penghulu Jin",
    roles: ["VTR technical crew"],
    director: "Directed by Azmir Affandi",
    link: "https://drive.google.com/drive/folders/1zjNylIZDcgIfa5Z7bVD76RsIUE9mEJnF?usp=sharing"
  },
  {
    title: "Nar’sata: Sekutu Setan",
    category: "film",
    categoryLabel: "Film",
    meta: "Coming soon",
    image: "assets/images/narsata-sekutu-setan.jpg",
    imageAlt: "Official poster for Nar’sata: Sekutu Setan",
    roles: ["VTR technical crew"],
    director: "Directed by Pierre Andre",
    link: "https://drive.google.com/drive/folders/1JbypsxhEhh0VaDUfaKG8JnJh4sFbmbx9?usp=sharing"
  },
  {
    title: "Malam Gala Pontianak 200KG",
    category: "film",
    categoryLabel: "Film",
    meta: "Released 5 September 2024",
    image: "assets/images/pontianak-200kg.jpg",
    imageAlt: "Official poster for Pontianak 200KG",
    roles: ["Media photographer at the gala premiere"],
    link: "https://drive.google.com/drive/folders/1i4_yC5GKtoJCPj2trxjMtbaMA7G-V53D?usp=sharing"
  },
  {
    title: "Weekend in Taipei",
    category: "film",
    categoryLabel: "Film",
    meta: "Released 7 November 2024",
    image: "assets/images/weekend-in-taipei.jpg",
    imageAlt: "Official poster for Weekend in Taipei",
    roles: ["Edited a promotional video", "Edited an audience feedback video"],
    link: "https://drive.google.com/drive/folders/1M7nkfv09VQwkRWLnJQGRa2bGstRY5-ba?usp=sharing"
  },
  {
    title: "Pejam",
    category: "film",
    categoryLabel: "Film",
    meta: "Released 4 September 2025",
    image: "assets/images/pejam.jpg",
    imageAlt: "Official poster for Pejam",
    roles: ["Edited the trailer", "Edited an audience feedback video"]
  },
  {
    title: "Jangkar",
    category: "film",
    categoryLabel: "Film",
    meta: "In cinemas 3 December 2026",
    image: "assets/images/jangkar.jpg",
    imageAlt: "Official poster for Jangkar: Forgotten Heroes",
    roles: ["VTR technical crew"]
  },
  {
    title: "Saat Cinta Tergadai",
    category: "ai",
    categoryLabel: "AI content",
    meta: "AI drama · YouTube",
    image: "assets/images/saat-cinta-tergadai.jpg",
    imageAlt: "Scene artwork for Saat Cinta Tergadai",
    roles: [
      "AI script and storyboard",
      "Generated props, locations and wardrobe",
      "Prompt and AI video generation",
      "Final edit and delivery"
    ]
  },
  {
    title: "J&S Surprise Video",
    category: "ai",
    categoryLabel: "AI content",
    meta: "Wedding surprise",
    image: "assets/images/j-s-surprise-video.jpg",
    imageAlt: "Scene artwork for J&S Surprise Video",
    roles: [
      "AI script and storyboard",
      "Generated props, locations and wardrobe",
      "Prompt and AI video generation",
      "Final edit and delivery"
    ]
  },
  {
    title: "Belahan Iblis",
    category: "content",
    categoryLabel: "Short film",
    meta: "Post-production",
    image: "assets/images/belahan-iblis.jpg",
    imageAlt: "Artwork for Belahan Iblis",
    roles: ["Offline and online edit", "Subtitles", "SFX and music", "Graphics"],
    link: "https://drive.google.com/drive/folders/1eEhHBecEXWgc4NQyFqIWh3-NKBlqujXM?usp=sharing"
  },
  {
    title: "Bunga Salju",
    category: "content",
    categoryLabel: "Drama · Astro Ria",
    meta: "Promo editing",
    image: "assets/images/bunga-salju.jpg",
    imageAlt: "Official artwork for Bunga Salju",
    roles: ["Edited daily promo clips", "Edited weekly TV promos for Astro"],
    link: "https://drive.google.com/drive/folders/1oNMVrDyGASDphP2S0zUGs_2YVRCrr7qV?usp=sharing"
  },
  {
    title: "Sayangku Cikgu Hania",
    category: "content",
    categoryLabel: "Drama · RTM",
    meta: "Promo editing",
    image: "assets/images/sayangku-cikgu-hania.jpg",
    imageAlt: "Official artwork for Sayangku Cikgu Hania",
    roles: ["Edited episodic promotional videos"],
    link: "https://drive.google.com/drive/folders/1mxMM1S7QFa8eTTHXRkDTR_J-l8RpLqZm?usp=sharing"
  },
  {
    title: "Bila Takdir Melarang Cinta",
    category: "content",
    categoryLabel: "Drama · iQIYI",
    meta: "Promo & trailer editing",
    image: "assets/images/bila-takdir-melarang-cinta.jpg",
    imageAlt: "Official poster for Bila Takdir Melarang Cinta",
    roles: ["Edited episodic highlights", "Edited the trailer"],
    link: "https://drive.google.com/drive/folders/1bvvrgm4TbyeiCsn-rWwVJn6lV1bcHMuz?usp=sharing"
  },
  {
    title: "Dendam Seorang Madu",
    category: "content",
    categoryLabel: "Drama · Astro",
    meta: "Campaign editing",
    image: "assets/images/dendam-seorang-madu.jpg",
    imageAlt: "Official artwork for Dendam Seorang Madu",
    roles: ["Edited the trailer", "Edited character teasers", "Edited weekly trailers and daily clips"],
    link: "https://drive.google.com/drive/folders/1nMuUqhi490vyLJSnhVtpyOTxoYep3awQ?usp=sharing"
  },
  {
    title: "Thariq Ridzwan",
    category: "content",
    categoryLabel: "Drama · Astro",
    meta: "Weekly trailer editing",
    image: "assets/images/thariq-ridzwan.jpg",
    imageAlt: "Official artwork for Thariq Ridzwan",
    roles: ["Edited weekly trailers"],
    link: "https://drive.google.com/drive/folders/1crUZEc_zl6nYFNhREmBsUBFdASP3gJ8Z?usp=sharing"
  },
  {
    title: "Safira",
    category: "content",
    categoryLabel: "Drama · iQIYI",
    meta: "Episodic & branded editing",
    image: "assets/images/safira.jpg",
    imageAlt: "Official poster for Safira",
    roles: ["Edited episodic content", "Edited Mentos and Safi product-placement videos"],
    link: "https://drive.google.com/drive/folders/1K3phpWcARPmFmnuoie7QQjR7fGNWJlN1?usp=sharing"
  },
  {
    title: "TVS: SITC",
    category: "content",
    categoryLabel: "Drama · TV Sarawak",
    meta: "Episodes 5 & 7",
    image: "assets/images/tvs-sitc.jpg",
    imageAlt: "Official poster for SITC",
    roles: ["Edited episodes 5 and 7", "Offline and online edit", "Trailer and teaser editing"]
  },
  {
    title: "Stesen Cinta: BHPetrol",
    category: "content",
    categoryLabel: "Television commercial",
    meta: "Drama-format TVC",
    image: "assets/images/stesen-cinta-bhpetrol.jpg",
    imageAlt: "Official poster for Stesen Cinta: BHPetrol",
    roles: ["Production sound / audioman"]
  },
  {
    title: "Secebis Kasih Ayah",
    category: "content",
    categoryLabel: "Drama Lit · YouTube",
    meta: "Production & post",
    image: "assets/images/secebis-kasih-ayah.jpg",
    imageAlt: "Official poster for Secebis Kasih Ayah",
    roles: ["Production sound / audioman", "Edited the trailer"]
  },
  {
    title: "Bila Raya Ibu Tiada",
    category: "content",
    categoryLabel: "Drama Lit · YouTube",
    meta: "Production & post",
    image: "assets/images/bila-raya-ibu-tiada.jpg",
    imageAlt: "Official artwork for Bila Raya Ibu Tiada",
    roles: ["Production sound / audioman", "Edited the trailer"]
  },
  {
    title: "Hanyut Dalam Rasa",
    category: "content",
    categoryLabel: "Drama Lit · YouTube",
    meta: "Trailer editing",
    image: "assets/images/hanyut-dalam-rasa.jpg",
    imageAlt: "Official poster for Hanyut Dalam Rasa",
    roles: ["Edited the trailer"]
  },
  {
    title: "Top50",
    category: "content",
    categoryLabel: "Gameshow · YouTube",
    meta: "Production & editing",
    image: "assets/images/top50.jpg",
    imageAlt: "Artwork for the Top50 gameshow",
    roles: ["Production sound / audioman", "Edited the content"],
    link: "https://drive.google.com/drive/folders/11pGSmZkNHcPz3EA9YnOPB5hu5DTJA2qO?usp=sharing"
  },
  {
    title: "10 Hari Cinta",
    category: "content",
    categoryLabel: "Reality show · YouTube",
    meta: "Production & offline edit",
    image: "assets/images/10-hari-cinta.jpg",
    imageAlt: "Official artwork for 10 Hari Cinta",
    roles: ["Production sound and technical crew", "Offline content edit"],
    link: "https://drive.google.com/drive/folders/1JuFf69M72mSocCQ6NoHF2BCGz7lGqdpX?usp=sharing"
  },
  {
    title: "Jaecoo",
    category: "content",
    categoryLabel: "Branded social media",
    meta: "Automotive content",
    image: "assets/images/jaecoo.jpg",
    imageAlt: "Jaecoo social media campaign artwork",
    roles: ["Edited branded social media content"],
    link: "https://drive.google.com/drive/folders/1hukBd-7PMNMZZQSzZdNrvqxhLKY-F-MF?usp=sharing"
  }
];

const grid = document.querySelector("#project-grid");
const filters = [...document.querySelectorAll(".filter")];
const projectCount = document.querySelector("#project-count");
const modal = document.querySelector("#project-modal");
const modalVisual = document.querySelector("#modal-visual");
const modalCategory = document.querySelector("#modal-category");
const modalTitle = document.querySelector("#modal-title");
const modalMeta = document.querySelector("#modal-meta");
const modalRoles = document.querySelector("#modal-roles");
const modalDirector = document.querySelector("#modal-director");
const modalLink = document.querySelector("#modal-link");
const modalClose = document.querySelector(".modal-close");
const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const header = document.querySelector(".site-header");

const escapeHTML = (value) =>
  String(value).replace(/[&<>'"]/g, (character) => {
    const entities = { "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" };
    return entities[character];
  });

function cardMarkup(project, index) {
  const visual = project.image
    ? `<img class="project-image" src="${project.image}" alt="${escapeHTML(project.imageAlt)}" loading="lazy">`
    : `<div class="project-placeholder" aria-hidden="true"><span>${escapeHTML(project.title)}</span></div>`;

  return `
    <article class="project-card reveal" data-category="${project.category}" data-index="${index}">
      ${visual}
      <div class="project-shade" aria-hidden="true"></div>
      <span class="project-index" aria-hidden="true">${String(index + 1).padStart(2, "0")}</span>
      <div class="project-info">
        <p class="project-category">${escapeHTML(project.categoryLabel)}</p>
        <h3>${escapeHTML(project.title)}</h3>
        <p>${escapeHTML(project.meta)}</p>
      </div>
      <button class="project-open" type="button" aria-label="View details for ${escapeHTML(project.title)}"></button>
    </article>`;
}

function renderProjects(filter = "all") {
  const selected = projects
    .map((project, index) => ({ project, index }))
    .filter(({ project }) => filter === "all" || project.category === filter);

  grid.innerHTML = selected.map(({ project, index }) => cardMarkup(project, index)).join("");
  projectCount.textContent = String(selected.length).padStart(2, "0");

  grid.querySelectorAll(".project-card").forEach((card) => {
    const open = () => openProject(Number(card.dataset.index));
    card.addEventListener("click", (event) => {
      if (!event.target.closest("a")) open();
    });
  });

  observeReveals(grid);
}

function openProject(index) {
  const project = projects[index];
  modalCategory.textContent = project.categoryLabel;
  modalTitle.textContent = project.title;
  modalMeta.textContent = project.meta;
  modalRoles.innerHTML = project.roles.map((role) => `<li>${escapeHTML(role)}</li>`).join("");
  modalDirector.textContent = project.director || "";
  modalDirector.hidden = !project.director;

  modalVisual.classList.toggle("is-placeholder", !project.image);
  modalVisual.style.backgroundImage = project.image ? `url("${project.image}")` : "";
  modalVisual.innerHTML = project.image ? "" : `<span>${escapeHTML(project.title)}</span>`;

  if (project.link) {
    modalLink.href = project.link;
    modalLink.hidden = false;
  } else {
    modalLink.removeAttribute("href");
    modalLink.hidden = true;
  }

  document.body.classList.add("modal-open");
  if (typeof modal.showModal === "function") {
    modal.showModal();
  } else {
    modal.setAttribute("open", "");
  }
}

function closeProject() {
  document.body.classList.remove("modal-open");
  if (typeof modal.close === "function") modal.close();
  else modal.removeAttribute("open");
}

filters.forEach((button) => {
  button.addEventListener("click", () => {
    filters.forEach((item) => {
      const active = item === button;
      item.classList.toggle("is-active", active);
      item.setAttribute("aria-pressed", String(active));
    });
    renderProjects(button.dataset.filter);
  });
});

modalClose.addEventListener("click", closeProject);
modal.addEventListener("click", (event) => {
  if (event.target === modal) closeProject();
});
modal.addEventListener("close", () => document.body.classList.remove("modal-open"));

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  siteNav.classList.toggle("is-open", !isOpen);
  document.body.classList.toggle("modal-open", !isOpen);
});

siteNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("modal-open");
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && siteNav.classList.contains("is-open")) {
    siteNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("modal-open");
  }
});

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -35px" }
);

function observeReveals(root = document) {
  root.querySelectorAll(".reveal:not(.is-visible)").forEach((element, index) => {
    element.style.transitionDelay = `${Math.min(index % 4, 3) * 70}ms`;
    revealObserver.observe(element);
  });
}

document.documentElement.classList.add("motion-ready");
renderProjects();
observeReveals();

const updateHeader = () => header.classList.toggle("is-scrolled", window.scrollY > 24);
window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

document.querySelector("#current-year").textContent = new Date().getFullYear();
