var elementosCarrito = [];

var botonesCompra = document.querySelectorAll('.buy-button');

botonesCompra.forEach(function(boton) {
  boton.addEventListener('click', function() {
    var tituloPelicula = this.getAttribute('data-title');
    var precioPelicula = parseFloat(this.getAttribute('data-price'));

    var peliculaEnCarrito = elementosCarrito.find(function(item) {
      return item.titulo === tituloPelicula;
    });

    if (peliculaEnCarrito) {
      var indice = elementosCarrito.indexOf(peliculaEnCarrito);
      elementosCarrito.splice(indice, 1);
      this.textContent = 'Añadir al carrito';
    } else {
      var item = {
        titulo: tituloPelicula,
        precio: precioPelicula
      };
      elementosCarrito.push(item);
      this.textContent = 'Quitar del carrito';
    }

    actualizarCarrito();
  });
});

function actualizarCarrito() {
  var elementosCarritoElemento = document.getElementById('cart-items');
  var precioTotalElemento = document.getElementById('total-price');
  var precioTotal = 0;

  elementosCarritoElemento.innerHTML = '';

  elementosCarrito.forEach(function(item) {
    var li = document.createElement('li');
    li.textContent = item.titulo + ' - ' + item.precio.toFixed(2) + '€';
    elementosCarritoElemento.appendChild(li);
    precioTotal += item.precio;
  });

  if (elementosCarrito.length === 2) {
    var descuento = precioTotal * 0.2;
    precioTotal -= descuento;
    precioTotalElemento.textContent = 'Precio total (con descuento del 20%): ' + precioTotal.toFixed(2) + '€';
  } else {
    precioTotalElemento.textContent = 'Precio total: ' + precioTotal.toFixed(2) + '€';
  }
}

function toggleMenu() {
  var navbarMenu = document.getElementById("navbarMenu");
  navbarMenu.classList.toggle("active");
}
