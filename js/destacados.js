const botonesVerMas = document.querySelectorAll(".btn-ver-mas");
const contadorElement = document.querySelector("#contador-seleccionadas");

function actualizarContador() {
  const tarjetasSeleccionadas = document.querySelectorAll(
    ".tarjeta-destacada.activa",
  ).length;
  contadorElement.textContent = `Tarjetas seleccionadas: ${tarjetasSeleccionadas}`;
}

botonesVerMas.forEach((boton) => {
  boton.addEventListener("click", () => {
    const tarjeta = boton.parentElement;

    tarjeta.classList.toggle("activa");

    if (tarjeta.classList.contains("activa")) {
      boton.textContent = "Deseleccionar";
    } else {
      boton.textContent = "Seleccionar";
    }

    actualizarContador();
  });
});
