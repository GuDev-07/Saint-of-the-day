// MENU HAMBURGUER PARA CELULAR
const menuToggle = document.getElementById('menuToggle');
const navbarLinks = document.querySelector('.navbar-links');
const navLinks = document.querySelectorAll('.navbar-links a');
const closeMenu = document.querySelector('.close-menu a');

menuToggle.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
});

closeMenu.addEventListener('click', () => {
  navbarLinks.classList.remove('active');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navbarLinks.classList.remove('active');
  });
});
