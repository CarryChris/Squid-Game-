// SHOW/HIDE NAVBAR
const showNav = document.getElementById("show-nav");
const closeNav = document.getElementById("close-nav");
const navLinks = document.getElementById("nav__links");
//  2 Ways to Show/hide navbar
// showNav.addEventListener("click", () => {
//   navLinks.style.display = "flex";

//   showNav.style.display = "none";
//   closeNav.style.display = "inline-block";
// });
// const closeNavLink = () => {
//   navLinks.style.display = "none";
//   closeNav.style.display = "none";
//   showNav.style.display = "inline-block";
// };

// closeNav.addEventListener("click", closeNavLink);
showNav.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  closeNav.classList.toggle("show");
  showNav.classList.toggle("hide");
});
closeNav.addEventListener("click", () => {
  navLinks.classList.remove("show");
  closeNav.classList.remove("show");
  showNav.classList.remove("hide");
});
