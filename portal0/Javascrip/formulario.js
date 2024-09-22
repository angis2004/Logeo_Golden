// Seleccionar el formulario y los inputs
const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

// Expresiones regulares para validar los campos
const expresiones = {
    username: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,// Letras, @ ,numeros,
    password: /^.{4,12}$/ ,// 4 a 12 caracteres.
    verificacion:/^\d{4}$/
}

// Estado de validación de los campos
const campos = {
    username: false,
    password: false,
    verificacion: false
}

// Validar formulario
const validarFormulario = (e) => {
    switch (e.target.name) {
        case "username":
            validarCampo(expresiones.username, e.target, 'username');
        break;
        case "password":
            validarCampo(expresiones.password, e.target, 'password');
        break;
        case "verificacion":
			validarCampo(expresiones.verificacion, e.target, 'verificacion');
		break;
    }
}

// Función para validar un campo individual
const validarCampo = (expresion, input, campo) => {
    if(expresion.test(input.value)){
        document.getElementById(`grupo__${campo}`).classList.remove('input-group-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.add('input-group-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos[campo] = true;
    } else {
        document.getElementById(`grupo__${campo}`).classList.add('input-group-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.remove('input-group-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos[campo] = false;
    }
}

// Añadir eventos a los inputs
inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});


// Evento de generar código
const generarCodigo = document.getElementById('generarCodigo');
generarCodigo.addEventListener('click', () => {
    const verificacionInput = document.getElementById('verificacion');
    const codigo = Math.floor(1000 + Math.random() * 9000); // Generar código de 4 dígitos
    verificacionInput.value = codigo;
    campos.verificacion = true; // Marcar como válido si el código es generado automáticamente
});


// Añadir función para validar todos los inputs manualmente
const validarTodosLosCampos = () => {
    inputs.forEach((input) => {
        validarFormulario({ target: input });
    });
};


// Manejar el evento de submit del formulario
formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    // Validar todos los campos antes del submit
    validarTodosLosCampos();

    const terminos = document.getElementById('terminos');
    if (campos.username && campos.password && campos.verificacion && terminos.checked) {
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


// Botón de acceso


document.getElementById("acces-button").addEventListener("click", function() {
    const verificacionInput = document.getElementById("verificacion");
    const formularioMensaje = document.getElementById('formulario__mensaje');

    // Validar todos los campos antes de redirigir
    validarTodosLosCampos();

    if (campos.username && campos.password && verificacionInput.value.length === 4) {
        window.location.href = "/portal0/inicio.html";
    } else {
        formularioMensaje.classList.add('formulario__mensaje-activo');
        setTimeout(() => {
            formularioMensaje.classList.remove('formulario__mensaje-activo');
        }, 3000);
    }
});