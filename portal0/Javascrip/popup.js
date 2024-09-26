
/**Listo ya qu**/
document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formulario');
    const overlay = document.getElementById('overlay'); // Overlay para el pop-up
    const popup = document.getElementById('popup'); // Pop-up
    const btnCerrarPopup = document.getElementById('btn-cerrar-popup'); // Botón para cerrar el pop-up
    const acceptButton = document.getElementById('accept-button');

    const expresiones = {
        username: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, // Letras, @, números
        password: /^.{4,12}$/, // 4 a 12 caracteres
        verificacion: /^\d{4}$/ // Solo 4 dígitos
    };

    // Manejar el evento de submit del formulario
    formulario.addEventListener('submit', (e) => {
        e.preventDefault(); // Evitar que el formulario se envíe de inmediato
        console.log('Botón de iniciar sesión presionado'); // Mensaje de depuración

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const verificacion = document.getElementById('verificacion').value;

        // Validar los campos contra las expresiones regulares
        const validUsername = expresiones.username.test(username);
        const validPassword = expresiones.password.test(password);
        const validVerificacion = expresiones.verificacion.test(verificacion);

        console.log('Username:', validUsername, 'Password:', validPassword, 'Verificación:', validVerificacion); // Mostrar resultados de validación

        if (validUsername && validPassword && validVerificacion) {
            console.log('Todos los campos son válidos, mostrando pop-up'); // Mensaje de depuración

            // Si todos los campos son válidos, muestra el pop-up
            overlay.classList.add('active');
            popup.classList.add('active');

            formulario.reset();

            // Limpiar mensajes de error
            document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
        } else {
            console.log('Faltan campos válidos, mostrando mensaje de error'); // Mensaje de depuración

            // Mostrar mensaje de error si algo no es válido
            document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
            setTimeout(() => {
                document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
            }, 3000);
        }
    });

    // Al hacer clic en el botón de id="accept-button" redirigir a inicio.html
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

