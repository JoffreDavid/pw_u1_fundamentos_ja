

function confirm() {
    validarCampos();
}

function validarCampos() {

    let cardholder = document.getElementById("id_cardholder").value;

    if (cardholder === "") {
        limpiarMensajes();
        mostrarMensaje('Cardholder es obligatorio');
        mostrarAsterisco("id_cardholder_error");
        return;
    }

    let cardnumber = document.getElementById("id_cardnumber").value;
    if (cardnumber === "") {
        limpiarMensajes();
        mostrarMensaje('Card Number es obligatorio');
        mostrarAsterisco('id_error_cardnumber');
        return;
    }

    let expdate = document.getElementById("id_exp_date").value; 

    if (expdate === "") {
        limpiarMensajes();
        mostrarMensaje('Exp Date es obligatorio');
        mostrarAsterisco('id_error_expdate');
        return;
    }

    let cvv = document.getElementById("id_cvv").value;
    if (cvv === "") {
        limpiarMensajes();
        mostrarMensaje('CVV es obligatorio');
        mostrarAsterisco('id_error_cvv');
        return;
    }
}

function limpiarMensajes() {
    let mensaje = document.getElementById("id_msg_error");
    mensaje.innerText = "";
    mensaje.style.display = "none";

    const errorAsterisco = document.querySelectorAll(".error_asterisco");
    errorAsterisco.forEach(e => e.innerText = '');
}

function mostrarAsterisco(idElemento) {
    document.getElementById(idElemento).innerText = "*";
}

function mostrarMensaje(msg) {
    let mensaje = document.getElementById("id_msg_error");
    mensaje.innerText = msg;
    mensaje.style.display = "block";
}