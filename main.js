/* Small progressive enhancements; no external scripts, tracking or form service. */
(function () {
  "use strict";
  document.querySelectorAll("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });

  var video = document.getElementById("hero-video");
  var toggle = document.querySelector(".video-toggle");
  if (video && toggle) {
    var motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    video.muted = true;
    function updateLabel() { toggle.textContent = video.paused ? "Play video" : "Pause video"; }
    function applyMotionPreference() {
      if (motion.matches) {
        video.pause();
        video.removeAttribute("autoplay");
        toggle.hidden = true;
      } else {
        toggle.hidden = false;
        video.play().catch(updateLabel);
      }
      updateLabel();
    }
    toggle.addEventListener("click", function () {
      if (video.paused) { video.play().catch(updateLabel); } else { video.pause(); }
    });
    video.addEventListener("play", updateLabel);
    video.addEventListener("pause", updateLabel);
    video.addEventListener("error", function () { video.hidden = true; toggle.hidden = true; });
    var source = video.querySelector("source");
    if (source) source.addEventListener("error", function () { video.hidden = true; toggle.hidden = true; });
    if (motion.addEventListener) motion.addEventListener("change", applyMotionPreference);
    applyMotionPreference();
  }

  var projects = window.YAGO_PORTFOLIO || [];
  var list = document.getElementById("project-list");
  var preview = document.getElementById("project-preview");
  var previewImage = document.getElementById("preview-image");
  if (list && projects.length) {
    list.replaceChildren();
    projects.forEach(function (project) {
      var item = document.createElement("li");
      var link = document.createElement("a");
      link.className = "project-row";
      link.href = "work.html?piece=" + encodeURIComponent(project.id);
      [["project-number", project.id], ["project-name", project.title], ["project-status", project.caption]].forEach(function (pair) {
        var span = document.createElement("span"); span.className = pair[0]; span.textContent = pair[1]; link.appendChild(span);
      });
      function showPreview() {
        if (!preview || !previewImage || !window.matchMedia("(hover: hover) and (min-width: 810px)").matches) return;
        previewImage.src = project.image;
        preview.hidden = false;
      }
      function hidePreview() { if (preview) preview.hidden = true; }
      link.addEventListener("pointerenter", showPreview);
      link.addEventListener("pointerleave", hidePreview);
      link.addEventListener("focus", showPreview);
      link.addEventListener("blur", hidePreview);
      item.appendChild(link); list.appendChild(item);
    });
  }

  var title = document.getElementById("project-title");
  if (title && projects.length) {
    var id = new URLSearchParams(window.location.search).get("piece") || projects[0].id;
    var project = projects.find(function (item) { return item.id === id; });
    if (project) {
      title.textContent = project.title;
      document.title = project.title + " — Yago Mongelli";
      document.getElementById("project-description").textContent = project.description;
      var image = document.getElementById("project-image"); image.src = project.image; image.alt = project.alt;
      document.getElementById("project-caption").textContent = project.caption;
    } else {
      title.textContent = "Project not found";
      document.getElementById("project-description").textContent = "Choose a project from the collection.";
      document.querySelector(".work-figure").hidden = true;
    }
  }
}());
