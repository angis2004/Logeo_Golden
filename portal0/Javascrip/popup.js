
  //Mostrar y cerrar el popup

   document.addEventListener('DOMContentLoaded', function() {
  // Obtener los elementos
  var btnAbrirPopup = document.getElementById('acces-button'); // Botón de iniciar sesión
  var overlay = document.getElementById('overlay');
  var popup = document.getElementById('popup');
  var btnCerrarPopup = document.getElementById('btn-cerrar-popup');
  var acceptButton = document.getElementById('accept-button');

 
  btnAbrirPopup.addEventListener('click', function(e) {
    e.preventDefault();
    overlay.classList.add('active'); 
    popup.classList.add('active');
    console.log("pupup abierto");
  });

  // Al hacer clic en el botón de cerrar, cierra el popup
  btnCerrarPopup.addEventListener('click', function(e) {
    e.preventDefault();
    overlay.classList.remove('active'); 
    popup.classList.remove('active'); 
    console.log("boton cerrado");
  });

  // Al hacer clic en el botón de aceptar, redirigir o validar
  acceptButton.addEventListener('click', function(e) {
    e.preventDefault();
    console.log("Botón de aceptar presionado");
    window.location.href = "/portal0/inicio.html"; // Redirige a la página de inicio
  });
});


