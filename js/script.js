// ===============================
// Dark / Light Theme Toggle
// ===============================

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});


// ===============================
// Contact Form Interaction
// ===============================

const contactForm = document.getElementById("contactForm");
const message = document.getElementById("message");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault(); // prevent page refresh

  const name = document.getElementById("name").value.trim();

  message.textContent = "Thank you, " + name + "! Your message has been sent (demo).";

  contactForm.reset();
});
