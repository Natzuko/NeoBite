const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})


// Validación 
function validarFormulario() {    
    var nombre = document.getElementById('firstname');
    var apellido = document.getElementById('lastname');
    var email = document.getElementById('email');
    var movil = document.getElementById('movil');
    var fechaNacimiento = document.getElementById('birthdate');
    var motivoContacto = document.getElementById('prefe-contacto');
    var mensaje = document.getElementById('mensaje');

    if (nombre.value.trim() === '') {
        mostrarError('error-firstname', 'Por favor ingresa tu nombre.');
        return false;
    }

    if (apellido.value.trim() === '') {
        mostrarError('error-lastname', 'Por favor ingresa tu apellido.');
        return false;
    }

    if (email.value.trim() === '') {
        mostrarError('error-email', 'Por favor ingresa tu mail.');
        return false;
    }

    if (movil.value.trim() === '') {
        mostrarError('error-movil', 'Por favor ingresa tu móvil.');
        return false;
    }

    if (fechaNacimiento.value.trim() === '') {
        mostrarError('error-birthdate', 'Por favor ingresa tu fecha de cumpleaños.');
        return false;
    }

    if (motivoContacto.value === '') {
        mostrarError('error-prefe-contacto', 'Elegí una forma de contacto');
        return false;
    }

    if (mensaje.value.trim() === '') {
        alert('Por favor ingresa un mensaje.');
        mensaje.focus();
        return false;
    }
    return true;
}

function mostrarError(id, mensaje) {
    var errorElement = document.getElementById(id);
    errorElement.innerText = mensaje;
}

var formulario = document.getElementById('formRegister');

//el mensaje de gracias por contactarnos no funciona luego de hacer enviar :(

formulario.addEventListener('submit', function (event) {
    if (!validarFormulario()) {
        event.preventDefault();
    } else {
        document.getElementById ("mensaje-enviado").classList.remove("oculto"); 
    }
});

