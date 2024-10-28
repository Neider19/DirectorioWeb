// Función para validar el inicio de sesión
function validarInicio() {
    // Definición de credenciales de usuario
    let username = "Neider"; // Nombre de usuario válido
    let password = "123"; // Contraseña válida

    // Obtiene los valores ingresados por el usuario
    let usuarioInput = document.getElementById("usuario").value;
    let passwordInput = document.getElementById("password").value;

    // Obtiene el elemento donde se mostrará el mensaje de validación
    let mensaje = document.getElementById("mensaje"); 

    // Limpia el mensaje anterior
    mensaje.textContent = "";
    mensaje.className = "";  

    // Verifica si los campos de usuario o contraseña están vacíos
    if (usuarioInput === "" || passwordInput === "") {
        mensaje.textContent = "El usuario y/o la contraseña no pueden estar vacíos"; // Mensaje de error
        mensaje.className = "error"; // Asigna la clase de estilo para el error
        return false; // Finaliza la función
    } 
    // Verifica si las credenciales ingresadas son correctas
    else if (usuarioInput === username && passwordInput === password) {
        mensaje.textContent = "Inicio de sesión exitoso. Redirigiendo..."; // Mensaje de éxito
        mensaje.className = "success"; // Asigna la clase de estilo para el éxito

        // Redirige al usuario a la página de inicio después de 1.5 segundos
        setTimeout(function () {
            window.location.href = "./inicio.html"; // URL de redirección
        }, 1500);

        return false; // Finaliza la función
    } 
    // Si las credenciales son incorrectas
    else {
        mensaje.textContent = "Usuario y/o contraseña incorrectos"; // Mensaje de error
        mensaje.className = "error"; // Asigna la clase de estilo para el error
        return false; // Finaliza la función
    }
}

