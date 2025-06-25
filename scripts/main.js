import { frontend, backend, bases_datos, otros } from './arreglos.js';

function renderHabilidades(habilidades, containerId) {
  const container = document.getElementById(containerId);
  container.classList.add("u-flex", "u-center", "u-gap-2", );

  habilidades.forEach(skill => {
    const li = document.createElement("ul");

    const img = document.createElement("img");
    img.src = skill.imagen;
    img.alt = skill.nombre;
    img.classList.add("svg_img", "svg_effect");

    const progress = document.createElement("div");
    progress.classList.add("progress");
    progress.style.setProperty("--level", skill.porcentaje);
    progress.innerHTML = `<span>${skill.nombre}</span>`;

    li.appendChild(img);
    li.appendChild(progress);
    container.appendChild(li);
  });
}

// Renderizar cada bloque
renderHabilidades(frontend, "frontend");
renderHabilidades(backend, "backend");
renderHabilidades(bases_datos, "bases-datos");
renderHabilidades(otros, "otros");
