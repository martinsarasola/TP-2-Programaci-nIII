const botones = document.querySelectorAll(".btn-destacar");

botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    const tarjeta = boton.parentElement;

    tarjeta.classList.toggle("destacado");

    if (tarjeta.classList.contains("destacado")) {
      boton.textContent = "Quitar destacado";
    } else {
      boton.textContent = "Destacar";
    }
  });
});
