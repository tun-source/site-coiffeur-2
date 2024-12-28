// Toggle navbar menu
document.querySelector('.burger').addEventListener('click', () => {
    document.querySelector('.menu').classList.toggle('active');
  });
  document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.menu');

  burger.addEventListener('click', () => {
    menu.classList.toggle('active');
  });
});
