// JavaScript para el menú desplegable en pantallas pequeñas
function toggleMenu() {
    const menu = document.querySelector('.navbar-menu');
    menu.classList.toggle('active');
  }
  
  // JavaScript para el efecto de blur al pasar el cursor sobre los divs
  window.addEventListener('DOMContentLoaded', function () {
    const leftSection = document.querySelector('.left-section');
    const rightSection = document.querySelector('.right-section');
  
    function applyBlur(event) {
      const target = event.currentTarget;
      const opposite = target === leftSection ? rightSection : leftSection;
      opposite.style.filter = 'blur(2px)';
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
  
  function sumar() {
    var input1 = parseFloat(document.getElementById("input1").value);
    var input2 = parseFloat(document.getElementById("input2").value);
    
    if (isNaN(input1) || isNaN(input2)) {
      alert("Por favor introduzca solo números");
      return;
    }
    
    var resultado = input1 + input2;
    document.getElementById("resultado").textContent = "Resultado: " + resultado;
  }
  
  function restar() {
    var input1 = parseFloat(document.getElementById("input1").value);
    var input2 = parseFloat(document.getElementById("input2").value);
    
    if (isNaN(input1) || isNaN(input2)) {
      alert("Por favor introduzca solo números");
      return;
    }
    
    var resultado = input1 - input2;
    document.getElementById("resultado").textContent = "Resultado: " + resultado;
  }
  
  function multiplicar() {
    var input1 = parseFloat(document.getElementById("input1").value);
    var input2 = parseFloat(document.getElementById("input2").value);
    
    if (isNaN(input1) || isNaN(input2)) {
      alert("Por favor introduzca solo números");
      return;
    }
    
    var resultado = input1 * input2;
    document.getElementById("resultado").textContent = "Resultado: " + resultado;
  }
  
  function dividir() {
    var input1 = parseFloat(document.getElementById("input1").value);
    var input2 = parseFloat(document.getElementById("input2").value);
    
    if (isNaN(input1) || isNaN(input2)) {
      alert("Por favor introduzca solo números");
      return;
    }
    
    if (input2 === 0) {
      alert("No se puede dividir por cero");
      return;
    }
    
    var resultado = input1 / input2;
    document.getElementById("resultado").textContent = "Resultado: " + resultado;
  }
  
  function aplicarDescuento() {
    var input1 = parseFloat(document.getElementById("input1").value);
    var input2 = parseFloat(document.getElementById("input2").value);
    
    if (isNaN(input1) || isNaN(input2)) {
      alert("Por favor introduzca solo números");
      return;
    }
    
    var descuento = input1 * (input2 / 100);
    var resultado = input1 - descuento;
    document.getElementById("resultado").textContent = "Resultado con Descuento: " + resultado;
  }
  