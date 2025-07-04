import { frontend, backend, bases_datos, otros } from './arreglos.js';
// Funcion que rettorna proomesa al cargar imagen
function cargarImagen(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;

    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`Error al cargar la imagen: ${src}`));
  });
}


async function renderHabilidades(habilidades, containerId) {
  const container = document.getElementById(containerId);
  container.classList.add("u-flex", "u-center", "u-gap-2", "u-wrap");

  for (const skill of habilidades) {
    const li = document.createElement("ul");

    try {
      const img = await cargarImagen(skill.imagen);
      img.alt = skill.nombre;
      img.classList.add("svg_img", "svg_effect");
      li.appendChild(img);
    } catch (error) {
      console.error(error.message);
      const fallback = document.createElement("span");
      fallback.textContent = `❌ ${skill.nombre}`;
      fallback.style.color = "crimson";
      li.appendChild(fallback);
    }

    const progress = document.createElement("div");
    progress.classList.add("progress");
    progress.style.setProperty("--level", skill.porcentaje);
    progress.innerHTML = `<span>${skill.nombre}</span>`;

    li.appendChild(progress);
    container.appendChild(li);
  }
}


// Renderizar cada bloque
renderHabilidades(frontend, "frontend");
renderHabilidades(backend, "backend");
renderHabilidades(bases_datos, "bases-datos");
renderHabilidades(otros, "otros");
