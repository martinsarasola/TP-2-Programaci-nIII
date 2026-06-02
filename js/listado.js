const productos = [
  { nombre: "Hamburguesa clásica", categoria: "comida", precio: 8000 },
  { nombre: "Papas fritas", categoria: "comida", precio: 4500 },
  { nombre: "Sandwich de jamón", categoria: "comida", precio: 6000 },
  { nombre: "Limonada", categoria: "bebida", precio: 3000 },
  { nombre: "Café", categoria: "bebida", precio: 2500 },
  { nombre: "Jugo natural", categoria: "bebida", precio: 3500 },
];

const contenedor = document.querySelector("#contenedor-listado");
const btnTodos = document.querySelector("#btn-todos");
const btnComida = document.querySelector("#btn-comida");

function mostrarProductos(lista) {
  contenedor.innerHTML = "";

  lista.forEach((producto) => {
    const card = document.createElement("article");
    card.classList.add("tarjeta");

    card.innerHTML = `
      <h3>${producto.nombre}</h3>
      <p>Categoría: ${producto.categoria}</p>
      <p>Precio: $${producto.precio}</p>
    `;

    contenedor.appendChild(card);
  });
}

btnTodos.addEventListener("click", () => {
  mostrarProductos(productos);
});

btnComida.addEventListener("click", () => {
  const productosFiltrados = productos.filter((producto) => {
    return producto.categoria === "comida";
  });
  mostrarProductos(productosFiltrados);
});

mostrarProductos(productos);
