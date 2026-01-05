export function initMenu() {
  const menuBtn = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");

  menuBtn.onclick = () => nav.classList.toggle("active");

  nav.querySelectorAll("a").forEach(link => {
    link.onclick = () => nav.classList.remove("active");
  });
}
const toggle = document.querySelector('.menu-toggle');
const headerRight = document.querySelector('.header-right');

toggle.addEventListener('click', () => {
  headerRight.classList.toggle('active');
});
