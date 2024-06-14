// Intenta cargar los datos de empleados desde localStorage o utiliza datos predeterminados
var empleados = JSON.parse(localStorage.getItem('empleados')) || [
  { id: 1, nombre: 'Juan Pérez' },
  { id: 2, nombre: 'Ana Gómez' }
];

// Función para mostrar empleados en la tabla
function mostrarEmpleados() {
  var tabla = document.getElementById('tablaEmpleados');
  tabla.innerHTML = ''; // Limpia la tabla antes de agregar los datos
  // Agrega la cabecera de la tabla
  tabla.innerHTML += `
    <tr>
      <th>ID</th>
      <th>Nombre</th>
      <th>Acciones</th>
    </tr>
  `;
  // Itera sobre el arreglo de empleados y agrega una fila por cada uno
  empleados.forEach(function(empleado) {
    var fila = tabla.insertRow();
    fila.innerHTML = `
      <td>${empleado.id}</td>
      <td>${empleado.nombre}</td>
      <td>
        <button class="btn" onclick="eliminarEmpleado(${empleado.id})">Eliminar</button>
      </td>
    `;
  });
}

// Función para agregar un nuevo empleado
function agregarEmpleado() {
  var nombre = prompt('Ingrese el nombre del empleado:'); // Solicita el nombre del empleado
  var nuevoId = empleados.length > 0 ? empleados[empleados.length - 1].id + 1 : 1; // Calcula el nuevo ID
  empleados.push({ id: nuevoId, nombre: nombre }); // Agrega el nuevo empleado al arreglo
  guardarEmpleados(); // Guarda los cambios en localStorage
  mostrarEmpleados(); // Actualiza la tabla
}

// Función para eliminar un empleado por su ID
function eliminarEmpleado(id) {
  empleados = empleados.filter(function(empleado) {
    return empleado.id !== id; // Filtra el arreglo para eliminar el empleado
  });
  guardarEmpleados(); // Guarda los cambios en localStorage
  mostrarEmpleados(); // Actualiza la tabla
}

// Función para guardar los empleados en localStorage
function guardarEmpleados() {
  localStorage.setItem('empleados', JSON.stringify(empleados)); // Convierte el arreglo a JSON y lo guarda
}

// Inicializar la visualización de empleados
mostrarEmpleados();
