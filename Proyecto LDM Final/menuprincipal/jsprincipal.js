
function toggleMenu() {
  var navbarMenu = document.getElementById("navbarMenu");
  navbarMenu.classList.toggle("active");
}

// JavaScript para el efecto de blur al pasar el cursor sobre los divs
window.addEventListener('DOMContentLoaded', function () {
  const leftSection = document.querySelector('.left-section');
  const rightSection = document.querySelector('.right-section');

  function applyBlur(event) {
    const target = event.currentTarget;
    const opposite = target === leftSection ? rightSection : leftSection;
    opposite.style.filter = 'blur(5px)';
  }

  function removeBlur(event) {
    const target = event.currentTarget;
    const opposite = target === leftSection ? rightSection : leftSection;
    opposite.style.filter = 'none';
  }

  // Aplicar el efecto de blur al pasar el cursor sobre los divs
  leftSection.addEventListener('mouseenter', applyBlur);
  leftSection.addEventListener('mouseleave', removeBlur);
  rightSection.addEventListener('mouseenter', applyBlur);
  rightSection.addEventListener('mouseleave', removeBlur);
});