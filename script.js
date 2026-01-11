document.addEventListener("DOMContentLoaded", () => {
  const cta = document.querySelector(".cta-button");
  cta.style.opacity = 0;
  cta.style.transform = "scale(0.95)";

  setTimeout(() => {
    cta.style.transition = "opacity 0.8s ease, transform 0.8s ease";
    cta.style.opacity = 1;
    cta.style.transform = "scale(1)";
  }, 400);
});
