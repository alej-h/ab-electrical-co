// ===== SIGN IN MODAL =====
function signIn() {
  document.getElementById("signInModal").style.display = "block";
}

function closeModal() {
  document.getElementById("signInModal").style.display = "none";
}

// Close modal if clicking outside of it
window.onclick = function (event) {
  const modal = document.getElementById("signInModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

// ===== HAMBURGER MENU =====
function toggleMenu() {
  const ul = document.querySelector(".nav ul");
  ul.classList.toggle("open");
}
