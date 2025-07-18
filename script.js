// Hamburger Menu Toggle
document.getElementById("hamburger").addEventListener("click", function () {
  document.getElementById("navMenu").classList.toggle("active");
});

// Dark/Light Theme Toggle
document.getElementById("themeToggle").addEventListener("click", function () {
  document.body.classList.toggle("dark");
  this.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// FAQ Accordion
const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach((question) => {
  question.addEventListener("click", function () {
    const answer = this.nextElementSibling;
    const isOpen = answer.style.display === "block";
    document.querySelectorAll(".faq-answer").forEach((a) => (a.style.display = "none"));
    answer.style.display = isOpen ? "none" : "block";
  });
});

// Back to Top Button
const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
