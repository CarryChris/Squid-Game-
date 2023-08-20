import "./navbar.js";
import "./games.js";
import "./about.js";
import "./contact.js";
// SMOOTH SCROLL TO LINKS
document.addEventListener("DOMContentLoaded", function () {
  const smoothScrollLinks = document.querySelectorAll(".smooth-scroll");

  smoothScrollLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const target = document.getElementById(link.getAttribute("data-target"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
});
