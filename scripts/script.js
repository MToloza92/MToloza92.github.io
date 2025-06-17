
  const toggle = document.getElementById('toggle-menu');
  const navList = document.getElementById('navbar-list');

  toggle.addEventListener('click', () => {
    navList.classList.toggle('active');
  });

