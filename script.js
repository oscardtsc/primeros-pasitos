const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");
const navLinks = document.querySelectorAll(".main-nav a");
const backToTop = document.querySelector(".back-to-top");

menuToggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

window.addEventListener("scroll", () => {
  backToTop.classList.toggle("show", window.scrollY > 500);
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
