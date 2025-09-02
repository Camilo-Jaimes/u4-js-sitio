const APP_NOMBRE = "Mundo Formula 1";
const APP_VERSION = "1.0.0";
const ANIO = 2025;

const mensaje = `Bienvenido a ${APP_NOMBRE} (versión ${APP_VERSION}) - Año ${ANIO}`;
document.getElementById("salida").textContent = mensaje;

document.addEventListener("DOMContentLoaded", () => {
  function mostrarHora() {
    const reloj = document.getElementById("reloj");
    if (!reloj) return;

    const ahora = new Date();
    let horas = ahora.getHours().toString().padStart(2, "0");
    let minutos = ahora.getMinutes().toString().padStart(2, "0");
    let segundos = ahora.getSeconds().toString().padStart(2, "0");

    reloj.textContent = `${horas}:${minutos}:${segundos}`;
  }

  setInterval(mostrarHora, 1000);
  mostrarHora();
});

document.addEventListener("DOMContentLoaded", () => {
  function cambiarColor(color) {
    document.body.style.backgroundColor = color;
  }

  document.getElementById("btn-rojo")?.addEventListener("click", () => cambiarColor("red"));
  document.getElementById("btn-verde")?.addEventListener("click", () => cambiarColor("green"));
  document.getElementById("btn-azul")?.addEventListener("click", () => cambiarColor("blue"));
});

document.addEventListener("DOMContentLoaded", () => {
  const paginaActual = document.body.dataset.page;
  const enlaces = document.querySelectorAll("nav a[data-page]");

  enlaces.forEach(enlace => {
    if (enlace.dataset.page === paginaActual) {
      enlace.classList.add("activo");
    } else {
      enlace.classList.remove("activo");
    }
  });
});

let contadorVisitas = parseInt(localStorage.getItem("contadorVisitas")) || 0;

const totalVisitas = document.getElementById("totalVisitas");
if (totalVisitas) {
  totalVisitas.textContent = contadorVisitas;
}

const btnVisitas = document.getElementById("btnVisitas");
if (btnVisitas) {
  btnVisitas.addEventListener("click", () => {
    contadorVisitas++;
    localStorage.setItem("contadorVisitas", contadorVisitas);
    if (totalVisitas) {
      totalVisitas.textContent = contadorVisitas;
    }
  });
}
