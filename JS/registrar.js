document.getElementById("registroForm").addEventListener("submit", validarRegistro);

function validarRegistro(event) {
    event.preventDefault();


    let username = document.getElementById("usuario").value;
    let tel = document.getElementById("telefono").value;
    let email = document.getElementById("correo").value;
    let contrasena = document.getElementById("password").value;


    let mensaje = document.getElementById("mensaje");
    mensaje.textContent = "";
    mensaje.className = "";


    if (username === "" || tel === "" || email === "" || contrasena === "") {
        mensaje.textContent = "Debes rellenar todos los campos";
        mensaje.className = "error";
        return;
    }


    let regexEmail = /\S+@\S+\.\S+/;
    if (!regexEmail.test(email)) {
        mensaje.textContent = "El correo electrónico no tiene un formato válido";
        mensaje.className = "error";
        return;
    }


    if (isNaN(tel) || tel.length < 10) {
        mensaje.textContent = "El teléfono debe ser un número válido con al menos 10 dígitos";
        mensaje.className = "error";
        return;
    }


    mensaje.textContent = "Registro exitoso. Redirigiendo...";
    mensaje.className = "success";


    setTimeout(function () {
        window.location.href = "index.html";
    }, 1500);
}
