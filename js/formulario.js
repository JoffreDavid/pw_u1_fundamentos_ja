function guardar() {
    validarCampos();
}

function validarCampos() {
    let nombre = document.getElementById("id_nombre").value;

    if (nombre === "") {
        limpiarMensajes();
        mostrarMensaje('Nombre es obligatorio');
        mostrarAsterisco('id_error_nombre');
        return;
    }

    let apellido = document.getElementById("id_apellido").value;
    if (apellido === "") {
        limpiarMensajes();
        mostrarMensaje('Apellido es obligatorio');
        mostrarAsterisco('id_error_apellido');
        return;
    }
    let edad = document.getElementById("id_edad").value;
    if (edad === "") {
        limpiarMensajes();
        mostrarMensaje('Edad es obligatorio');
        mostrarAsterisco('id_error_edad');
        return;
    }

    let fecha = document.getElementById("id_fecha").value;
    if (fecha === "") {
        limpiarMensajes();
        mostrarMensaje('Fecha es obligatorio');
        mostrarAsterisco('id_error_fecha');
        return;
    }


    let email = document.getElementById("id_email").value;


    if (email === "") {
        limpiarMensajes();
        mostrarMensaje('Email es obligatorio');
        mostrarAsterisco('id_error_email');
        return;
    } else {
        limpiarMensajes();
        validarEmail(email);
    }

    let password = document.getElementById("id_password").value;
    if (password === "") {
        limpiarMensajes();
        mostrarMensaje('Passwprd es obligatorio');
        mostrarAsterisco('id_error_password');
        return;
    }


}

function mostrarMensaje(msg) {
    let mensaje = document.getElementById('id_msg_error');
    mensaje.innerText = msg;
    mensaje.style.display = "block";
}

function mostrarAsterisco(idElemento) {
    document.getElementById(idElemento).innerText = '*';
}

function limpiarMensajes() {
    let mensaje = document.getElementById('id_msg_error');
    mensaje.innerText = "";
    mensaje.style.display = "none";

    const erroresAsterisco = document.querySelectorAll('.error_asterisco');
    erroresAsterisco.forEach(e => e.innerText = '');
}


function validarEmail(email) {
    const patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return patron.test(email);
}