const productos = [
  {
    nombre: "Hamburguesa clásica",
    categoria: "comida",
    precio: 8000,
  },
  {
    nombre: "Papas fritas",
    categoria: "comida",
    precio: 4500,
  },
  {
    nombre: "Limonada",
    categoria: "bebida",
    precio: 3000,
  },
  {
    nombre: "Café",
    categoria: "bebida",
    precio: 2500,
  },
];

const contenedor = document.querySelector("#contenedor-listado");
const filtroCategoria = document.querySelector("#filtro-categoria");

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

filtroCategoria.addEventListener("change", () => {
  const categoriaSeleccionada = filtroCategoria.value;

  if (categoriaSeleccionada === "todos") {
    mostrarProductos(productos);
  } else {
    const productosFiltrados = productos.filter((producto) => {
      return producto.categoria === categoriaSeleccionada;
    });

    mostrarProductos(productosFiltrados);
  }
});

mostrarProductos(productos);
