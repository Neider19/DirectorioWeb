function validarInicio() {
    let username = "Neider";
    let password = "123";

    let usuarioInput = document.getElementById("usuario").value;
    let passwordInput = document.getElementById("password").value;

    let mensaje = document.getElementById("mensaje"); 

    
    mensaje.textContent = "";
    mensaje.className = "";  

    if (usuarioInput === "" || passwordInput === "") {
        mensaje.textContent = "El usuario y/o la contraseña no pueden estar vacíos";
        mensaje.className = "error";
        return false; 
    } 
    else if (usuarioInput === username && passwordInput === password) {
        mensaje.textContent = "Inicio de sesión exitoso. Redirigiendo...";
        mensaje.className = "success";

       
        setTimeout(function () {
            window.location.href = "./inicio.html";
        }, 1500);

        return false; 
    } 
    else {
        mensaje.textContent = "Usuario y/o contraseña incorrectos";
        mensaje.className = "error";
        return false; 
    }
}

