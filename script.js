// ==============================
// Hamburger Menu Toggle (Responsive Navigation)
// ==============================
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

// Toggle the 'active' class to show/hide nav menu in responsive mode
hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// ==============================
// Highlight Active Navigation Link
// ==============================
document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname.split("/").pop(); // Get current page filename

  const navLinks = document.querySelectorAll(".navigation-container a, .navigation-content a");

  navLinks.forEach(link => {
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage) {
      link.classList.add("active"); // Add 'active' class to highlight the current page
    }
  });
});

// ==============================
// Testimonials Slider Logic
// ==============================

// Array of testimonial objects
const testimonial = [
  {
    quote: "This service is amazing. Highly recommended!",
    name: "Alex Johnson",
    rating: 5,
    avatar: "https://i.pravatar.cc/80?img=1"
  },
  {
    quote: "They really helped my business grow. Great support!",
    name: "Maria Gomez",
    rating: 4,
    avatar: "https://i.pravatar.cc/80?img=5"
  },
  {
    quote: "Professional and quick. Loved working with them.",
    name: "Peter",
    rating: 5,
    avatar: "https://i.pravatar.cc/80?img=3"
  },
  {
    quote: "Affordable and reliable. Would definitely use again.",
    name: "Fatima Noor",
    rating: 4,
    avatar: "https://i.pravatar.cc/80?img=10"
  }
];

// Target the testimonial slider container
const slider = document.getElementById("testimonial-slider");

// Dynamically create testimonial slides
testimonial.forEach((item, index) => {
  const testimonialDiv = document.createElement("div");
  testimonialDiv.className = "testimonial";
  if (index === 0) testimonialDiv.classList.add("active"); // Make first testimonial active by default

  // Generate star ratings according to the ratings mentioned above 
  const stars = "★".repeat(item.rating) + "☆".repeat(5 - item.rating);

  // Build testimonial HTML
  testimonialDiv.innerHTML = `
    <div class="testimonial-content">
      <img src="${item.avatar}" alt="${item.name}" class="avatar" />
      <div class="rating">${stars}</div>
      <p>"${item.quote}"</p>
      <h4>- ${item.name}</h4>
    </div>
  `;

  // Add the testimonial to the slider
  slider.appendChild(testimonialDiv);
});

// ==============================
// Testimonial Navigation Logic
// ==============================
let testimonialData = document.querySelectorAll(".testimonial");
let currentIndex = 0;

// Function to display the testimonial at a given index
const showTestimonial = (i) => {
  testimonialData.forEach((data, index) => {
    data.classList.remove("active");
    if (i === index) data.classList.add("active");
  });
};

// Navigate to previous testimonial
const prevTestimonials = () => {
  currentIndex = (currentIndex - 1 + testimonialData.length) % testimonialData.length;
  showTestimonial(currentIndex);
};

// Navigate to next testimonial
const nextTestimonials = () => {
  currentIndex = (currentIndex + 1) % testimonialData.length;
  showTestimonial(currentIndex);
};
