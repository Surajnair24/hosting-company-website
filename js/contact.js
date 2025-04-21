// ==============================
// Hamburger Menu Toggle (Responsive Navigation)
// ==============================

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// ==============================
// Highlight Active Navigation Link
// ==============================

document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname.split("/").pop();

  const navLinks = document.querySelectorAll(".navigation-container a, .navigation-content a");

  navLinks.forEach(link => {
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });
});

// ==============================
// Contact Form Submission Handler
// ==============================

function handleSubmit(event) {
  event.preventDefault(); // Prevent actual form submission

  const successMessage = document.getElementById('success-message');
  const form = document.getElementById('contact-form');

  // Show success message
  successMessage.style.display = 'block';

  // Reset the form fields
  form.reset();

  // Hide success message after 3 seconds
  setTimeout(() => {
    successMessage.style.display = 'none';
  }, 3000);
}
