// Función para confirmar el cierre de sesión
function confirmarCerrarSesion() {
  // Muestra un cuadro de diálogo de confirmación al usuario
  const confirmacion = confirm("¿Estás seguro de que deseas cerrar sesión?");
  
  // Verifica si el usuario ha confirmado la acción
  if (confirmacion) {
      // Si el usuario confirma, redirige a la página de inicio o ejecuta la acción de cierre de sesión
      window.location.href = "/index.html"; // Ajusta la URL de cierre de sesión según tu configuración
  }
}

