
const acceptCheckbox = document.getElementById("accept-checkbox");
const declineCheckbox = document.getElementById("decline-checkbox");
const accessButton = document.getElementById("acces-button");

// Deshabilita ambos checkboxes para evitar que ambos se marquen al mismo tiempo
acceptCheckbox.addEventListener("change", function() {
    if (acceptCheckbox.checked) {
        declineCheckbox.checked = false;
    }
    toggleButtonState();
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

