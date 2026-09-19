
// Dynamic Greeting based on client hour
const hour = new Date().getHours();
const greetingEl = document.getElementById("greeting");

if (hour < 12) {
    greetingEl.textContent = "Good Morning!";
} else if (hour < 18) {
    greetingEl.textContent = "Good Afternoon!";
} else {
    greetingEl.textContent = "Good Evening!";
}

// Dark/Light Theme Toggle
const themeBtn = document.getElementById("theme-toggle");
themeBtn.addEventListener("click", () => {
    const isDark = document.body.getAttribute("data-theme") === "dark";
    document.body.setAttribute("data-theme", isDark ? "light" : "dark");
    themeBtn.textContent = isDark ? "🌙" : "☀️";
});

// Front-end Form Handling
const contactForm = document.getElementById("contact-form");
const statusMsg = document.getElementById("form-status");

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    statusMsg.textContent = `Thank you, ${name}! Your message has been recorded.`;
    statusMsg.style.color = "var(--primary)";
    contactForm.reset();
});