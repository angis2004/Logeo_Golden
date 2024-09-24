document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formulario');
    const terminos = document.getElementById('terminos'); // Asegúrate de que esto esté definido si lo necesitas
    const acceptCheckbox = document.getElementById('accept-checkbox');
    const declineCheckbox = document.getElementById('decline-checkbox');
    const accesButtonSubmit = document.getElementById('acces-button-submit');

    // Manejar el evento de submit del formulario
    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
        validarTodosLosCampos();

        // Verificar que todos los campos estén correctos
        if (campos.username && campos.password && campos.verificacion && terminos && terminos.checked) {
            formulario.reset();
            document.querySelectorAll('.input-group-correcto').forEach((icono) => {
                icono.classList.remove('input-group-correcto');
            });
        } else {
            document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
            setTimeout(() => {
                document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
            }, 3000);
        }
    });

    // Controlar el estado del botón "Ingresar" según el checkbox
    acceptCheckbox.addEventListener('change', function() {
        accesButtonSubmit.disabled = !this.checked; // Activa el botón solo si está marcado
    });

    declineCheckbox.addEventListener('change', function() {
        // Si no aceptas, podrías hacer alguna acción
        if (this.checked) {
            acceptCheckbox.checked = false; // Desmarcar "Acepto" si "No Acepto" está marcado
            accesButtonSubmit.disabled = true; // Desactiva el botón
        }
    });

    // Manejar el clic en el botón "Ingresar"
    accesButtonSubmit.addEventListener('click', function() {
        if (acceptCheckbox.checked) {
            window.location.href = 'inicio.html'; // Redirige si se acepta
        } else {
            alert('Debes aceptar los términos y condiciones para continuar.');
        }
    });
});


declineCheckbox.addEventListener("change", function() {
    if (declineCheckbox.checked) {
        acceptCheckbox.checked = false;
    }
    toggleButtonState();
});

// Habilita o deshabilita el botón según el checkbox marcado
function toggleButtonState() {
    if (acceptCheckbox.checked) {
        accessButton.disabled = false;
    } else {
        accessButton.disabled = true;
    }
}

// Redirige al usuario al formulario inicio.html si aceptó los términos
accessButton.addEventListener("click", function() {
    if (acceptCheckbox.checked) {
        window.location.href = "/portal0/inicio.html";
    } else {
        alert("Debes aceptar los términos y condiciones para ingresar.");
    }
});
