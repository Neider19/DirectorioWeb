// Añade un evento al formulario para validar el registro al enviar
document.getElementById("registroForm").addEventListener("submit", validarRegistro);

// Función para validar el registro
function validarRegistro(event) {
    event.preventDefault(); // Previene el comportamiento predeterminado de envío del formulario

    // Obtiene los valores ingresados en los campos del formulario
    let username = document.getElementById("usuario").value; // Nombre de usuario
    let tel = document.getElementById("telefono").value; // Teléfono
    let email = document.getElementById("correo").value; // Correo electrónico
    let contrasena = document.getElementById("password").value; // Contraseña

    // Obtiene el elemento donde se mostrará el mensaje de validación
    let mensaje = document.getElementById("mensaje");
    mensaje.textContent = ""; // Limpia el mensaje anterior
    mensaje.className = ""; // Limpia las clases anteriores

    // Verifica si alguno de los campos está vacío
    if (username === "" || tel === "" || email === "" || contrasena === "") {
        mensaje.textContent = "Debes rellenar todos los campos"; // Mensaje de error
        mensaje.className = "error"; // Asigna la clase de estilo para el error
        return; // Finaliza la función
    }

    // Expresión regular para validar el formato del correo electrónico
    let regexEmail = /\S+@\S+\.\S+/;
    // Verifica si el correo electrónico tiene un formato válido
    if (!regexEmail.test(email)) {
        mensaje.textContent = "El correo electrónico no tiene un formato válido"; // Mensaje de error
        mensaje.className = "error"; // Asigna la clase de estilo para el error
        return; // Finaliza la función
    }

    // Verifica si el teléfono es un número y tiene al menos 10 dígitos
    if (isNaN(tel) || tel.length < 10) {
        mensaje.textContent = "El teléfono debe ser un número válido con al menos 10 dígitos"; // Mensaje de error
        mensaje.className = "error"; // Asigna la clase de estilo para el error
        return; // Finaliza la función
    }

    // Si todas las validaciones son exitosas
    mensaje.textContent = "Registro exitoso. Redirigiendo..."; // Mensaje de éxito
    mensaje.className = "success"; // Asigna la clase de estilo para el éxito

    // Redirige al usuario a la página de inicio después de 1.5 segundos
    setTimeout(function () {
        window.location.href = "index.html"; // URL de redirección
    }, 1500);
}
