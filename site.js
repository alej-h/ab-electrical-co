/* ===========================================
   AB ELECTRIC CO. — site interactions
   =========================================== */

/* ===== HAMBURGER MENU ===== */
function toggleMenu() {
  const button = document.querySelector(".hamburger");
  const ul = document.querySelector(".nav ul");
  if (!ul || !button) return;

  const isOpen = ul.classList.toggle("open");
  button.setAttribute("aria-expanded", isOpen ? "true" : "false");
  button.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
}

/* ===== DROPDOWN TOGGLES (keyboard accessible) ===== */
document.addEventListener("DOMContentLoaded", function () {
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach(function (dropdown) {
    const toggle = dropdown.querySelector(".dropdown-toggle");
    const menu = dropdown.querySelector(".drop-downcontent");
    if (!toggle || !menu) return;

    toggle.addEventListener("click", function (e) {
      e.preventDefault();
      const isExpanded = toggle.getAttribute("aria-expanded") === "true";
      // Close other open dropdowns
      dropdowns.forEach(function (other) {
        const otherToggle = other.querySelector(".dropdown-toggle");
        if (otherToggle && otherToggle !== toggle) {
          otherToggle.setAttribute("aria-expanded", "false");
        }
      });
      toggle.setAttribute("aria-expanded", isExpanded ? "false" : "true");
    });

    // Close on Escape key
    dropdown.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        toggle.setAttribute("aria-expanded", "false");
        toggle.focus();
      }
    });
  });

  // Close dropdowns when clicking outside
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".dropdown")) {
      dropdowns.forEach(function (dropdown) {
        const toggle = dropdown.querySelector(".dropdown-toggle");
        if (toggle) toggle.setAttribute("aria-expanded", "false");
      });
    }
  });
});

// Gallery Click to Advance
const viewer = document.querySelector('.viewer');
const imgs = viewer.querySelectorAll('img');
const dots = document.querySelectorAll('.dot');
let current = 0;

viewer.addEventListener('click', function() {
  imgs[current].classList.remove('active');
  dots[current].classList.remove('active');
  current++;
  if (current === imgs.length) {
    current = 0;
  }
  imgs[current].classList.add('active');
  dots[current].classList.add('active');
});