const toggle = document.getElementById('toggle-menu');
const navList = document.getElementById('navbar-list');
const body = document.body;

toggle.addEventListener('click', () => {
  navList.classList.toggle('active');    // Mostrar/ocultar lista
  body.classList.toggle('menu-open');    // Controla fondo del hero
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    navList.classList.remove('active');
    body.classList.remove('menu-open');
  }
});