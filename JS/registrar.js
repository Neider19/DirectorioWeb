function validarRegistro(){

    let username =  document.getElementById("usuario").value;
    let tel =  document.getElementById("telefono").value;
    let email =  document.getElementById("correo").value;
    let contrasena =  document.getElementById("password").value;

    if(username ==""  || tel ==""  || email ==""  ||contrasena ==""){

        alert("Debes rellenar todos los campos")
    }
        Window.location.href = "index.html";



}