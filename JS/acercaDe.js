function confirmarCerrarSesion() {
  const confirmacion = confirm("¿Estás seguro de que deseas cerrar sesión?"); // Muestra un cuadro de confirmación
  if (confirmacion) {
      // Si el usuario confirma, rediriges o ejecutas la acción de cierre de sesión
      window.location.href = "/index.html"; // Ajusta la URL de cierre de sesión según tu configuración
  }
}
