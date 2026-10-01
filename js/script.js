const hamburger = document .querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

// Asociamos al elemento que hemos selccionado un evento click
hamburger.addEventListener("click", function() {
    console.log("con esto podemos mandar mensajitos con la consola");

    navLinks.classList.toggle("active");
})



// CÁLCULO DE COSTE TOTAL
function costeTotal() {
    let selectExposicion = document.getElementById("exposicion");
    let inputNumero = document.getElementById("numero");
    let spanCoste = document.getElementById("coste");

    let valor = selectExposicion.value;
    let cantidad = parseInt(inputNumero.value) || 0;
    let precio = 0;

    if (valor === "e1") {
        precio = 78.50;
    } else if (valor === "e2") {
        precio = 29.99;
    } else if (valor === "e3") {
        precio = 120.00;
    }

    let total = (precio * cantidad).toFixed(2);
    spanCoste.innerHTML = total + " €";
}

// PROCESAR COMPRA Y MODAL
function comprar() {
    let selectExposicion = document.getElementById("exposicion");
    let textoEntrada = selectExposicion.options[selectExposicion.selectedIndex].text;

    document.getElementById("nom").innerHTML = document.getElementById("nombre").value;
    document.getElementById("corr").innerHTML = document.getElementById("correo").value;
    document.getElementById("num").innerHTML = document.getElementById("numero").value;
    document.getElementById("ex").innerHTML = textoEntrada;
    document.getElementById("ct").innerHTML = document.getElementById("coste").innerHTML;

    document.getElementById("modal").style.display = "flex";
    return false; // Evita el refresco de formulario
}

function cerrarVentana() {
    document.getElementById("modal").style.display = "none";
}

// CARRUSEL DE IMÁGENES
let slideActual = 0;
function cambiarSlide(direccion) {
    let diapositivas = document.getElementsByClassName("slide");
    if (diapositivas.length === 0) return;

    diapositivas[slideActual].classList.remove("active");

    slideActual += direccion;

    if (slideActual >= diapositivas.length) {
        slideActual = 0;
    }
    if (slideActual < 0) {
        slideActual = diapositivas.length - 1;
    }

    diapositivas[slideActual].classList.add("active");
}