const meriendas = [
  "Sándwich de queso",
  "Medialunas",
  "Yogur con granola",
  "Fruta fresca",
  "Galletas caseras",
];

const contenedor = document.querySelector("#contenedor-meriendas");

meriendas.forEach((merienda) => {
  const div = document.createElement("div");
  div.classList.add("tarjeta");
  div.textContent = merienda;
  contenedor.appendChild(div);
});

document.querySelector("#btn-cantidad").addEventListener("click", () => {
  document.querySelector("#cantidad-meriendas").textContent =
    `Total de meriendas: ${meriendas.length}`;
});
