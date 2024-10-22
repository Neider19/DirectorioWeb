function validarInicio() {

    let username = document.getElementById("usuario").value;
   let password = document.getElementById("password").value;


    if (username == "" || password == "") {
        alert("El usuario y/o la contraseña no pueden estar en vacios")
    }
    else if (username == document.getElementById("usuario").value && password == document.getElementById("password").value) {

        window.location.href = "./inicio.html";
        alert("Sesion Iniciada");
    } else
        alert("Usuario y/o contraseña incorrectos");
}

