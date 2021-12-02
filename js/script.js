const btnNavEl = document.querySelector(".btn-nav");
const headerEl = document.querySelector(".primary-header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
