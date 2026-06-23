/**
 * Renders the Project Portal section on index.html from projects-data.js.
 */
(function () {
  "use strict";

  function escapeHtml(text) {
    var div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }

  function getFeaturedTitle(category) {
    var project = window.projects[category.featuredProject];
    return project ? getProjectTitle(project) : category.featuredProject;
  }

  function getProjectAccent(slug) {
    var project = window.projects[slug];
    if (!project) return "#4A90D9";
    if (project.accentColor) return project.accentColor;

    var category = window.projectCategories.find(function (cat) {
      return cat.slug === project.category;
    });

    return category ? category.accentColor : "#4A90D9";
  }

  function getCategoryTitle(categorySlug) {
    var category = window.projectCategories.find(function (cat) {
      return cat.slug === categorySlug;
    });
    return category ? category.title : categorySlug;
  }

  function getProjectTitle(project) {
    return project.displayTitle || project.title;
  }

  function renderProjectCard(slug) {
    var project = window.projects[slug];
    if (!project) return "";

    var accent = getProjectAccent(slug);
    var categoryTitle = getCategoryTitle(project.category);
    var projectTitle = getProjectTitle(project);
    var subcategoryHtml = project.subcategory
      ? '<span class="portal-project-card-subcategory">' +
        escapeHtml(project.subcategory) +
        "</span>"
      : "";
    var pilotBadge = project.piloting
      ? '<span class="portal-pilot-badge">Piloting</span>'
      : "";

    return (
      '<div class="col-md-6 col-lg-4">' +
      '<article class="portal-project-card" style="--portal-accent: ' +
      escapeHtml(accent) +
      '">' +
      '<div class="portal-project-card-header">' +
      '<span class="portal-project-card-category">' +
      escapeHtml(categoryTitle) +
      "</span>" +
      subcategoryHtml +
      pilotBadge +
      "</div>" +
      "<h4>" +
      escapeHtml(projectTitle) +
      "</h4>" +
      '<p class="portal-project-card-tagline">' +
      escapeHtml(project.tagline) +
      "</p>" +
      '<ul class="portal-project-card-details">' +
      "<li><strong>Status</strong> " +
      escapeHtml(project.status) +
      "</li>" +
      "<li><strong>Role</strong> " +
      escapeHtml(project.role) +
      "</li>" +
      "</ul>" +
      '<a href="project-detail.html?project=' +
      escapeHtml(slug) +
      '" class="portal-project-card-cta">Read Case Study <i class="bi bi-arrow-right"></i></a>' +
      "</article></div>"
    );
  }

  function renderFeaturedCardsSection() {
    var archiveCategory = window.projectCategories.find(function (cat) {
      return cat.slug === "archives-memory";
    });

    if (!archiveCategory || !archiveCategory.projects.length) return "";

    var cards = archiveCategory.projects
      .map(function (slug) {
        return renderProjectCard(slug);
      })
      .join("");

    return (
      '<div class="portal-featured-section" data-aos="fade-up" data-aos-delay="125">' +
      '<div class="portal-featured-section-header">' +
      "<h3>Archives &amp; Memory — Featured Work</h3>" +
      "<p>" +
      escapeHtml(archiveCategory.tagline) +
      "</p></div>" +
      '<div class="row gy-4">' +
      cards +
      "</div></div>"
    );
  }

  function renderProjectChip(slug, isFeatured) {
    var project = window.projects[slug];
    if (!project) return "";

    var accent = getProjectAccent(slug);
    var chipClass =
      "portal-project-chip" + (isFeatured ? " portal-project-chip--featured" : "");
    var pilotBadge = project.piloting
      ? '<span class="portal-pilot-badge">Piloting</span>'
      : "";

    return (
      '<a href="project-detail.html?project=' +
      escapeHtml(slug) +
      '" class="' +
      chipClass +
      '" style="--portal-accent: ' +
      escapeHtml(accent) +
      '">' +
      '<span class="portal-project-chip-name">' +
      escapeHtml(getProjectTitle(project)) +
      "</span>" +
      pilotBadge +
      "</a>"
    );
  }

  function renderCategoryCard(category) {
    var featuredTitle = getFeaturedTitle(category);
    var projectChips = category.projects
      .map(function (slug) {
        return renderProjectChip(slug, slug === category.featuredProject);
      })
      .join("");

    return (
      '<div class="col-lg-6 col-xl-4">' +
      '<article class="portal-card portal-card-category" style="--portal-accent: ' +
      escapeHtml(category.accentColor) +
      '">' +
      '<div class="portal-card-icon"><i class="bi ' +
      escapeHtml(category.icon) +
      '"></i></div>' +
      '<div class="portal-card-body">' +
      "<h3>" +
      escapeHtml(category.title) +
      "</h3>" +
      '<p class="portal-card-tagline">' +
      escapeHtml(category.tagline) +
      "</p>" +
      '<p class="portal-card-featured">Featured: <span>' +
      escapeHtml(featuredTitle) +
      "</span></p>" +
      '<div class="portal-project-list">' +
      projectChips +
      "</div>" +
      '<a href="project-detail.html?project=' +
      escapeHtml(category.featuredProject) +
      '" class="portal-card-link">Explore Category <i class="bi bi-arrow-right"></i></a>' +
      "</div></article></div>"
    );
  }

  function renderPilotingStrip() {
    var pilotSlugs = Object.keys(window.projects || {}).filter(function (slug) {
      return window.projects[slug].piloting;
    });

    if (!pilotSlugs.length) return "";

    var chips = pilotSlugs
      .map(function (slug) {
        return renderProjectChip(slug, false);
      })
      .join("");

    return (
      '<div class="portal-piloting-strip" data-aos="fade-up" data-aos-delay="150">' +
      '<div class="portal-piloting-label"><i class="bi bi-rocket-takeoff me-2"></i>Currently Piloting</div>' +
      '<div class="portal-project-list portal-project-list--inline">' +
      chips +
      "</div></div>"
    );
  }

  function initPortal() {
    var grid = document.getElementById("portal-grid");
    if (!grid || !window.projectCategories || !window.projects) return;

    grid.innerHTML = window.projectCategories
      .map(renderCategoryCard)
      .join("");

    var stripContainer = document.getElementById("portal-piloting-strip");
    if (stripContainer) {
      stripContainer.innerHTML = renderPilotingStrip();
    }

    var featuredContainer = document.getElementById("portal-featured-cards");
    if (featuredContainer) {
      featuredContainer.innerHTML = renderFeaturedCardsSection();
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initPortal);
  } else {
    initPortal();
  }
})();
