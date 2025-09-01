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

btnVisita.addEventListener("click", () => {
  contadorVisitas++;
  totalVisitas.textContent = contadorVisitas;
});