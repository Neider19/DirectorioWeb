function cargarContactos() {
    fetch('contactos.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar el archivo JSON');
            }
            return response.json();
        })
        .then(data => {
            const listaContactos = document.getElementById("lista-contactos");
            listaContactos.innerHTML = '';

            data.contactos.forEach(contacto => {
                const li = document.createElement('li');
                li.classList.add('contacto');
                li.setAttribute('id', `contacto-${contacto.id}`);

                // Estructura HTML con separación entre campos
                li.innerHTML = `
                    <div class="campo">
                        <label><strong>Nombre:</strong></label>
                        <div>${contacto.nombre}</div>
                    </div>
                    <div class="campo">
                        <label><strong>Teléfono:</strong></label>
                        <div>${contacto.telefono}</div>
                    </div>
                    <div class="campo">
                        <label><strong>Correo:</strong></label>
                        <div>${contacto.correo}</div>
                    </div>
                    <div class="campo">
                        <label><strong>Dirección:</strong></label>
                        <div>${contacto.direccion}</div>
                    </div>
                    <button class="boton" onclick="eliminarContacto(${contacto.id})">Eliminar</button>
                `;

                listaContactos.appendChild(li);
            });
        })
        .catch(error => {
            console.error('Error al cargar contactos:', error);
        });
}

function eliminarContacto(id) {
    const confirmacion = confirm('¿Estás seguro de que deseas eliminar este contacto?');
    if (confirmacion) {
        const contactoElemento = document.getElementById(`contacto-${id}`);
        contactoElemento.remove();
        alert(`El contacto con ID ${id} ha sido eliminado.`);
    }
}

window.onload = cargarContactos;

