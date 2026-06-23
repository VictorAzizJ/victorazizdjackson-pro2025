/**
 * Renders project-detail.html from projects-data.js based on ?project= slug.
 */
(function () {
  "use strict";

  var projectData = window.projects;
  var categoryData = window.projectCategories;

  function getProjectSlug() {
    return new URLSearchParams(window.location.search).get("project");
  }

  function getCategory(slug) {
    if (!categoryData) return null;
    return categoryData.find(function (cat) {
      return cat.slug === slug;
    });
  }

  function escapeHtml(text) {
    var div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }

  function renderLink(label, url, icon) {
    if (!url) return "";
    return (
      '<li><strong>' +
      escapeHtml(label) +
      '</strong>: <a href="' +
      escapeHtml(url) +
      '" target="_blank" rel="noopener noreferrer"><i class="bi ' +
      icon +
      ' me-1"></i>' +
      escapeHtml(url.replace(/^https?:\/\//, "")) +
      "</a></li>"
    );
  }

  function renderSlides(images, title) {
    return images
      .map(function (img, index) {
        var src = typeof img === "string" ? img : img.src;
        var alt =
          typeof img === "string"
            ? title + " — project screenshot " + (index + 1)
            : img.alt || title;

        return (
          '<div class="swiper-slide">' +
          '<img src="' +
          escapeHtml(src) +
          '" alt="' +
          escapeHtml(alt) +
          '" class="img-fluid" loading="lazy">' +
          "</div>"
        );
      })
      .join("");
  }

  function renderFeatures(features) {
    return features
      .map(function (feature, index) {
        var delay = 400 + index * 100;
        var icon = "bi-check-circle";
        var title = "";
        var description = "";

        if (typeof feature === "string") {
          title = feature;
        } else {
          icon = feature.icon || icon;
          title = feature.title;
          description = feature.description || "";
        }

        return (
          '<div class="col-md-6 col-lg-4">' +
          '<div class="feature-item" data-aos="fade-up" data-aos-delay="' +
          delay +
          '">' +
          '<i class="bi ' +
          escapeHtml(icon) +
          '"></i>' +
          "<h4>" +
          escapeHtml(title) +
          "</h4>" +
          (description
            ? "<p>" + escapeHtml(description) + "</p>"
            : "") +
          "</div></div>"
        );
      })
      .join("");
  }

  function renderTechStack(stack) {
    return stack
      .map(function (tech) {
        return (
          '<span class="project-tech-tag">' + escapeHtml(tech) + "</span>"
        );
      })
      .join("");
  }

  function renderTextOrList(value) {
    if (!value) return "";

    if (Array.isArray(value)) {
      return (
        "<ul class=\"project-detail-list\">" +
        value
          .map(function (item) {
            return "<li>" + escapeHtml(item) + "</li>";
          })
          .join("") +
        "</ul>"
      );
    }

    return "<p>" + escapeHtml(value) + "</p>";
  }

  function renderContributionsDetail(detail) {
    var html = "";

    if (detail.intro) {
      html += "<p>" + escapeHtml(detail.intro) + "</p>";
    }

    (detail.sections || []).forEach(function (section) {
      if (section.paragraphs) {
        section.paragraphs.forEach(function (paragraph) {
          html += "<p>" + escapeHtml(paragraph) + "</p>";
        });
      }

      if (section.title) {
        html += "<p><strong>" + escapeHtml(section.title) + "</strong></p>";
      }

      if (section.items && section.items.length) {
        html += "<ul class=\"project-detail-list\">";
        section.items.forEach(function (item) {
          html += "<li>" + escapeHtml(item) + "</li>";
        });
        html += "</ul>";
      }

      if (section.outro) {
        html += "<p>" + escapeHtml(section.outro) + "</p>";
      }
    });

    return html;
  }

  function renderNarrativeBlock(id, icon, heading, content) {
    return (
      '<div class="project-narrative-block" id="' +
      id +
      '" data-aos="fade-up">' +
      '<h3><i class="bi ' +
      icon +
      ' me-2"></i>' +
      escapeHtml(heading) +
      "</h3>" +
      "<p>" +
      escapeHtml(content) +
      "</p></div>"
    );
  }

  function setVisible(el, visible) {
    if (!el) return;
    el.classList.toggle("d-none", !visible);
  }

  function showLoadError(message) {
    var errorEl = document.getElementById("project-load-error");
    var content = document.getElementById("project-content");
    var notFound = document.getElementById("project-not-found");

    document.title = "Project Error — Victor Jackson";
    setVisible(content, false);
    setVisible(notFound, false);

    if (errorEl) {
      errorEl.textContent = message;
      setVisible(errorEl, true);
    }
  }

  function showNotFound(slug) {
    var notFound = document.getElementById("project-not-found");
    var content = document.getElementById("project-content");
    var errorEl = document.getElementById("project-load-error");
    var messageEl = document.getElementById("not-found-message");

    document.title = "Project Not Found — Victor Jackson";

    if (messageEl) {
      if (slug) {
        messageEl.innerHTML =
          'We couldn\u2019t find a project matching <strong>' +
          escapeHtml(slug) +
          "</strong>.";
      } else {
        messageEl.textContent =
          "No project was specified. Choose a project from the portal to view its case study.";
      }
    }

    setVisible(errorEl, false);
    setVisible(content, false);
    setVisible(notFound, true);
  }

  function initGallerySwiper() {
    if (typeof Swiper === "undefined") return;

    document
      .querySelectorAll(".portfolio-details-slider.init-swiper")
      .forEach(function (swiperElement) {
        if (swiperElement.swiper) return;

        var configEl = swiperElement.querySelector(".swiper-config");
        if (!configEl) return;

        var config = JSON.parse(configEl.textContent.trim());
        new Swiper(swiperElement, config);
      });
  }

  function refreshAnimations() {
    if (typeof AOS !== "undefined") {
      AOS.refresh();
    }
  }

  function renderProject(slug) {
    if (!projectData || !categoryData) {
      showLoadError(
        "Project data failed to load. Make sure assets/js/projects-data.js is available and refresh the page."
      );
      return;
    }

    var project = projectData[slug];

    if (!project) {
      showNotFound(slug);
      return;
    }

    var category = getCategory(project.category);
    var categoryTitle = category ? category.title : project.category;
    var subcategoryRow = project.subcategory
      ? "<li><strong>Type</strong>: " +
        escapeHtml(project.subcategory) +
        "</li>"
      : "";
    var accentColor =
      project.accentColor || (category ? category.accentColor : "#4A90D9");
    var root = document.documentElement;

    root.style.setProperty("--project-accent", accentColor);
    document.title = project.title + " — Victor Jackson";

    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", project.tagline);
    }

    document.getElementById("page-title-heading").textContent = project.title;
    document.getElementById("breadcrumb-project").textContent = project.title;

    var clientRow = project.client
      ? "<li><strong>Client</strong>: " + escapeHtml(project.client) + "</li>"
      : "";

    var statusRow = project.status
      ? "<li><strong>Status</strong>: " +
        '<span class="project-status-badge">' +
        escapeHtml(project.status) +
        "</span></li>"
      : "";

    var linksHtml =
      renderLink("Live Project", project.links.live, "bi-box-arrow-up-right") +
      renderLink("Source Code", project.links.github, "bi-github") +
      renderLink("Case Study", project.links.caseStudy, "bi-journal-text");

    document.getElementById("project-gallery-slides").innerHTML = renderSlides(
      project.images,
      project.title
    );

    document.getElementById("project-info-sidebar").innerHTML =
      "<h3>Project Information</h3>" +
      "<ul>" +
      "<li><strong>Category</strong>: " +
      escapeHtml(categoryTitle) +
      "</li>" +
      subcategoryRow +
      "<li><strong>Date</strong>: " +
      escapeHtml(project.date) +
      "</li>" +
      statusRow +
      clientRow +
      linksHtml +
      "</ul>";

    document.getElementById("project-tagline").textContent = project.tagline;
    document.getElementById("project-overview-text").textContent =
      project.overview;

    document.getElementById("project-narrative-sections").innerHTML =
      renderNarrativeBlock(
        "project-problem",
        "bi-exclamation-triangle",
        "The Problem",
        project.problem
      ) +
      renderNarrativeBlock(
        "project-solution",
        "bi-lightbulb",
        "The Solution",
        project.solution
      ) +
      renderNarrativeBlock(
        "project-role",
        "bi-person-workspace",
        "My Role",
        project.roleDetail || project.role
      );

    document.getElementById("project-tech-stack").innerHTML = renderTechStack(
      project.techStack
    );

    document.getElementById("project-features-grid").innerHTML = renderFeatures(
      project.features
    );

    var architectureSection = document.getElementById(
      "project-architecture-section"
    );
    var architectureContent = document.getElementById(
      "project-architecture-content"
    );

    if (project.architecture && project.architecture.length) {
      architectureContent.innerHTML = renderTextOrList(project.architecture);
      setVisible(architectureSection, true);
    } else {
      setVisible(architectureSection, false);
    }

    var contributionsSection = document.getElementById(
      "project-contributions-section"
    );
    var contributionsContent = document.getElementById(
      "project-contributions-content"
    );

    var contributionsHeading = document.getElementById(
      "project-contributions-heading"
    );

    if (project.contributionsDetail) {
      contributionsContent.innerHTML = renderContributionsDetail(
        project.contributionsDetail
      );
      if (contributionsHeading) {
        contributionsHeading.innerHTML =
          '<i class="bi bi-kanban me-2"></i>My Contributions';
      }
      setVisible(contributionsSection, true);
    } else if (
      project.contributions &&
      (Array.isArray(project.contributions)
        ? project.contributions.length
        : true)
    ) {
      contributionsContent.innerHTML = renderTextOrList(project.contributions);
      if (contributionsHeading) {
        contributionsHeading.innerHTML =
          '<i class="bi bi-kanban me-2"></i>Sprint Contributions';
      }
      setVisible(contributionsSection, true);
    } else {
      setVisible(contributionsSection, false);
    }

    var outcomesHeading = document.getElementById("project-outcomes-heading");
    var outcomesData = project.impact || project.outcomes;

    if (outcomesHeading) {
      outcomesHeading.innerHTML =
        project.impact
          ? '<i class="bi bi-graph-up-arrow me-2"></i>Impact'
          : '<i class="bi bi-graph-up-arrow me-2"></i>Outcomes &amp; Impact';
    }

    document.getElementById("project-outcomes-content").innerHTML =
      renderTextOrList(outcomesData);

    var nextSteps = project.nextSteps || project.improvements;
    var nextStepsSection = document.getElementById(
      "project-next-steps-section"
    );
    var nextStepsContent = document.getElementById("project-next-steps-content");

    if (nextSteps) {
      nextStepsContent.innerHTML = renderTextOrList(nextSteps);
      setVisible(nextStepsSection, true);
    } else {
      setVisible(nextStepsSection, false);
    }

    setVisible(document.getElementById("project-load-error"), false);
    setVisible(document.getElementById("project-not-found"), false);
    setVisible(document.getElementById("project-content"), true);
  }

  function initProjectDetail() {
    try {
      projectData = window.projects;
      categoryData = window.projectCategories;

      var slug = getProjectSlug();

      if (!slug) {
        showNotFound(null);
        return;
      }

      renderProject(slug);
    } catch (error) {
      console.error("Project detail render failed:", error);
      showLoadError(
        "Something went wrong loading this project. Please refresh the page or return to the Project Portal."
      );
    }
  }

  window.initProjectDetail = initProjectDetail;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initProjectDetail);
  } else {
    initProjectDetail();
  }

  window.addEventListener("load", function () {
    initGallerySwiper();
    refreshAnimations();
  }, { once: true });
})();
