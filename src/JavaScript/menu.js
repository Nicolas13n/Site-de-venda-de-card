const toggleMenu = document.querySelector('.menuIcon');
const menu = document.querySelector('.menuMobile');
const close = document.querySelector('.close');

toggleMenu.addEventListener('click', () => {
  if (menu.classList.contains('active')) {
    toggleMenu.classList.add('active');
  } else {
    menu.classList.add('active');
    toggleMenu.classList.remove('active');
  }
})

close.addEventListener('click', () => {
  if (menu.classList.contains('active')) {
    menu.classList.remove('active');
    toggleMenu.classList.add('active');
  }
})