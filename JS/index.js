function validarInicio(){

    let username = "Neider";
    let password = "123";
    
    if (username == document.getElementById("usuario").value && password == document.getElementById("password").value){
        
        window.location.href="./inicio.html";
        alert("Sesion Iniciada");
    }
    else {
        alert("Usuario y/o contraseña incorrectos");
    }

}