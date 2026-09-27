const hamburger = document .querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

// Asociamos al elemento que hemos selccionado un evento click
hamburger.addEventListener("click", function() {
    console.log("con esto podemos mandar mensajitos con la consola");

    navLinks.classList.toggle("active");
})