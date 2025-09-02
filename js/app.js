const APP_NOMBRE = "Mundo Formula 1";
const APP_VERSION = "1.0.0";
const ANIO = 2025;

let contadorVisitas = 0;
let usuarioActivo = null;
let esMovil = false;

function sumar(a, b) {
  return a + b;
}

function multiplicar(a, b) {
  return a * b;
}

const mensaje = `Bienvenido a ${APP_NOMBRE} (versión ${APP_VERSION}) - Año ${ANIO}`;
document.getElementById("salida").textContent = mensaje;

const btnVisita = document.getElementById("btnVisita");
const totalVisitas = document.getElementById("totalVisitas");

document.getElementById("btnVisitas").addEventListener("click", () => {
  contadorVisitas++;
  document.getElementById("totalVisitas").textContent = contadorVisitas;
});

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







