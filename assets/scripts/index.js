// mobile menu transformation

const burgerIcon = document.querySelector("#burger");
const navbarMenu = document.querySelector("#nav-links");

// show and hide the menu in mobile mode by clicking the buger button
burgerIcon.addEventListener("click", () => {
    navbarMenu.classList.toggle("is-active");
});