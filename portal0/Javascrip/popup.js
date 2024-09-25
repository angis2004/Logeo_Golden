
/**Listo ya qu**/
document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formulario');
    const overlay = document.getElementById('overlay'); // Overlay para el pop-up
    const popup = document.getElementById('popup'); // Pop-up
    const btnCerrarPopup = document.getElementById('btn-cerrar-popup'); // Botón para cerrar el pop-up
    const acceptButton = document.getElementById('accept-button');

    // Manejar el evento de submit del formulario
    formulario.addEventListener('submit', (e) => {
        e.preventDefault(); // Evitar que el formulario se envíe de inmediato
        console.log('Botón de iniciar sesión presionado'); // Mensaje de depuración

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const verificacion = document.getElementById('verificacion').value;

        // Validar que todos los campos estén rellenos
        console.log('Username:', username, 'Password:', password, 'Verificación:', verificacion); // Mostrar valores de campos

        if (username && password && verificacion) {
            console.log('Todos los campos están llenos, mostrando pop-up'); // Mensaje de depuración

            // Si todos los campos están llenos, muestra el pop-up
            overlay.classList.add('active');
            popup.classList.add('active');

            formulario.reset();

            // Limpiar mensajes de error
            document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
        } else {
            console.log('Faltan campos, mostrando mensaje de error'); // Mensaje de depuración

            // Mostrar mensaje de error si falta algo
            document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
            setTimeout(() => {
                document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
            }, 3000);
        }
    });

      // Al hacer clic en el botón de id="accept-button" redirigir a inicio.hml
  acceptButton.addEventListener('click', function(e) {
    e.preventDefault();
    console.log("Botón de aceptar presionado");
    window.location.href = "/portal0/inicio.html"; // Redirige a la página de inicio
  });

    // Al hacer clic en el botón de cerrar, cierra el pop-up
    btnCerrarPopup.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Cerrando pop-up'); 
        overlay.classList.remove('active'); // Oculta el overlay
        popup.classList.remove('active'); // Oculta el pop-up
    });
});
