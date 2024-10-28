// Variable global para almacenar contactos
let contactos = [];

// Función para cargar contactos desde un archivo JSON
function cargarContactos() {
    fetch('contactos.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar el archivo JSON');
            }
            return response.json();
        })
        .then(data => {
            contactos = data.contactos; // Asigna los contactos a la variable global
            mostrarContactos(contactos); // Muestra todos los contactos al cargar
        })
        .catch(error => {
            console.error('Error al cargar contactos:', error);
        });
}

// Función para mostrar contactos
function mostrarContactos(lista) {
    const listaContactos = document.getElementById("lista-contactos");
    listaContactos.innerHTML = ''; // Limpia la lista

    lista.forEach(contacto => {
        const li = document.createElement('li');
        li.classList.add('contacto');
        li.setAttribute('id', `contacto-${contacto.id}`);

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
            <button class="boton" onclick="editarContacto(${contacto.id})">Editar</button>
            <button class="boton" onclick="eliminarContacto(${contacto.id})">Eliminar</button>
        `;

        listaContactos.appendChild(li);
    });
}

// Función para buscar contactos
function buscarContacto() {
    const input = document.querySelector('input[name="search"]'); // Selecciona el input de búsqueda
    const filtro = input.value.toLowerCase(); // Convierte la entrada a minúsculas
    const resultados = contactos.filter(contacto => 
        contacto.nombre.toLowerCase().includes(filtro) // Filtra contactos que contienen el texto
    );
    
    mostrarContactos(resultados); // Muestra los resultados de la búsqueda
}

// Función para eliminar un contacto
function eliminarContacto(id) {
    const confirmacion = confirm('¿Estás seguro de que deseas eliminar este contacto?');
    if (confirmacion) {
        const contactoElemento = document.getElementById(`contacto-${id}`);
        contactoElemento.remove();
        alert(`El contacto con ID ${id} ha sido eliminado.`);
    }
}

// Función para editar un contacto
function editarContacto(id) {
    const contactoElemento = document.getElementById(`contacto-${id}`);
    const campos = contactoElemento.querySelectorAll('.campo div'); // Selecciona los campos de información

    const nombre = prompt('Editar Nombre:', campos[0].textContent);
    const telefono = prompt('Editar Teléfono:', campos[1].textContent);
    const correo = prompt('Editar Correo:', campos[2].textContent);
    const direccion = prompt('Editar Dirección:', campos[3].textContent);

    if (nombre && telefono && correo && direccion) {
        campos[0].textContent = nombre;
        campos[1].textContent = telefono;
        campos[2].textContent = correo;
        campos[3].textContent = direccion;
        alert(`El contacto con nombre ${nombre} ha sido editado.`);
    }
}

// Llama a cargarContactos cuando la ventana se carga
window.onload = cargarContactos;

// Función para confirmar el cierre de sesión
function confirmarCerrarSesion() {
    const confirmacion = confirm("¿Estás seguro de que deseas cerrar sesión?");
    if (confirmacion) {
        window.location.href = "/index.html"; // Ajusta la URL de cierre de sesión según tu configuración
    }
}

