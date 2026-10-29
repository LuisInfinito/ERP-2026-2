"use strict";
// Catálogo visual: agregar áreas solo cuando el equipo acuerde su alcance.
const catalogo = [
  { nombre: "Comercial", descripcion: "Clientes, cotizaciones y ventas", icono: "↗", etapa: "Primera área" },
  { nombre: "Logística", descripcion: "Organización de la siguiente área", icono: "▦", etapa: "Próxima área" }
];
const acceso = document.querySelector("#acceso");
const aplicaciones = document.querySelector("#aplicaciones");
const nombre = document.querySelector("#nombre");
const rol = document.querySelector("#rol");
const buscar = document.querySelector("#buscar");
const estado = document.querySelector("#estado");
function dibujar() {
  const lista = catalogo.filter(m => m.nombre.toLocaleLowerCase("es").normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(buscar.value.trim().toLocaleLowerCase("es").normalize("NFD").replace(/[\u0300-\u036f]/g, "")));
  const contenedor = document.querySelector("#modulos");
  contenedor.replaceChildren();
  for (const modulo of lista) {
    const boton = document.createElement("button");
    boton.type = "button";
    boton.className = "modulo";
    for (const [clase, texto] of [["icono", modulo.icono], ["nombre", modulo.nombre], ["descripcion", modulo.descripcion], ["etapa", modulo.etapa]]) {
      const elemento = document.createElement("span");
      elemento.className = clase;
      elemento.textContent = texto;
      if (clase === "icono") elemento.setAttribute("aria-hidden", "true");
      boton.append(elemento);
    }
    boton.addEventListener("click", () => { estado.textContent = `${modulo.nombre}: pantalla pendiente de implementación. Este avance incluye únicamente el acceso y el selector de aplicaciones.`; });
    contenedor.append(boton);
  }
  document.querySelector("#sin-resultados").hidden = lista.length !== 0;
}
document.querySelector("#formulario-acceso").addEventListener("submit", e => {
  e.preventDefault();
  if (!nombre.value.trim() || !rol.value) {
    document.querySelector("#error").textContent = "Escribe tu nombre y selecciona un rol.";
    nombre.focus();
    return;
  }
  document.querySelector("#error").textContent = "";
  document.querySelector("#identidad").textContent = `${nombre.value.trim()} · ${rol.value}`;
  acceso.hidden = true;
  aplicaciones.hidden = false;
  dibujar();
  document.querySelector("#titulo-aplicaciones").focus();
});
buscar.addEventListener("input", () => { estado.textContent = ""; dibujar(); });
document.querySelector("#salir").addEventListener("click", () => {
  aplicaciones.hidden = true;
  acceso.hidden = false;
  document.querySelector("#formulario-acceso").reset();
  document.querySelector("#identidad").textContent = "";
  buscar.value = "";
  estado.textContent = "";
  nombre.focus();
});
// La sesión existe solo en memoria: recargar vuelve al acceso.
