// tombol scroll ke rekomendasi kuliner
const ctaButton = document.getElementById("ctaButton");
ctaButton.addEventListener("click", () => {
    document.getElementById("artikel").scrollIntoView({ behavior: "smooth" });
});
// animasi card muncul saat scroll
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.2 });

cards.forEach(card => observer.observe(card));
const toggleBtn = document.getElementById("darkToggle");

if (localStorage.getItem("mode") === "dark") {
  document.body.classList.add("dark");
  toggleBtn.textContent = "☀️";
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    toggleBtn.textContent = "☀️";
    localStorage.setItem("mode", "dark");
  } else {
    toggleBtn.textContent = "🌙";
    localStorage.setItem("mode", "light");
  }
});