// Obtener elementos del DOM
const inputBusqueda = document.getElementById("input-busqueda");
const botonBuscar = document.getElementById("boton-buscar");
const botonFiltrar = document.getElementById("boton-filtrar");
const filtros = document.getElementById("filtros");
const selectUbicacion = document.getElementById("ubicacion");
const cafeterias = document.querySelectorAll(".contenedor-imagenes > div");

// Mostrar/Ocultar filtros al presionar el botón de filtrar
botonFiltrar.addEventListener("click", () => {
  filtros.classList.toggle("oculto");
});

// Filtrar cafeterías al presionar el botón de buscar
botonBuscar.addEventListener("click", () => {
  const textoBusqueda = inputBusqueda.value.trim().toLowerCase();
  const ubicacionSeleccionada = selectUbicacion.value;

  cafeterias.forEach((cafeteria) => {
    const nombre = cafeteria.querySelector("h1").textContent.toLowerCase();
    const ubicacion = cafeteria.querySelector(".ubicacion p").textContent;

    // Mostrar solo si cumple con los filtros
    if (
      (textoBusqueda === "" || nombre.includes(textoBusqueda)) &&
      (ubicacionSeleccionada === "" || ubicacion === ubicacionSeleccionada)
    ) {
      cafeteria.style.display = "flex"; // Mostrar
    } else {
      cafeteria.style.display = "none"; // Ocultar
    }
  });
});
