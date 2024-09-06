// //*PRIMERA PRE-ENTREGA
//  let reservaHora
//  reservaHora = "Reserva de Horas";
//  console.log (reservaHora);
// //* Valores de servicios
//  const ESPACIO =" "
//  const CORTECABELLO = 12000;
//  const CORTEBARBA = 6000;
//  const CABELLOYBARBA = 18000;
//  const LIMPIEZAFACIAL = 6000;
//  const SERVICIOFULL= 23000;


//  let nombreCompleto = prompt("Ingrese su Nombre");
//  console.log("Nombre de Cliente:" +ESPACIO+ nombreCompleto)

//  let servicio = prompt("Que servicio desea?   Corte de cabello | Corte de Barba | Cabello y Barba | Limpieza Facial | Servicio Full");
//  console.log("Servicio:" +ESPACIO+ servicio)

//  //let valor =("valor a pagar: " +ESPACIO+ servicio == s1)

//  let fecha = prompt("Ingrese Dia - Mes - Año");
//  console.log("Fecha:" +ESPACIO+ fecha)

//  let hora = prompt("Ingrese horario: 10:00  |  12:00  | 14:00  |  16:00  |  18:00  |  20:00");
//  console.log("Horario:" +ESPACIO+ hora)


//  let telefono = prompt("Ingrese Numero de Celular");
//  console.log("Celular:" +ESPACIO+ telefono)

//  let correo = prompt("Ingrese Correo Electronico");
//  console.log ("Correo:" +ESPACIO+ correo);

//  function mensajefinal(){
//      console.log ("Tu hora a sido agendada, nos vemos pronto!");
//   }

// mensajefinal("Tu hora a sido agendada, nos vemos pronto!");


//*SEGUNDA PRE-ENTREGA

// Listado de precios por servicio //
// const servicios = [
//     { id:1, nombre: "Corte de Cabello", precio: 8.0 },
//     { id:2, nombre: "Corte de Barba", precio: 6.0 },
//     { id:3, nombre: "Corte de Cabello y Barba", precio: 15.5 },
//     { id:4, nombre: "Limpieza Facial", precio: 6.0 },
//     { id:5, nombre: "Servicio Full", precio: 20.0 },
//   ];
  
//   function mostrarPrecios() {
//     console.log("Lista de precios:");
//     servicios.forEach((servicio) => {
//       console.log(
//         `Servicio: ${servicio.nombre}, Precio: $${servicio.precio.toFixed(3)}`
//       );
//     });
//   }
  
//   mostrarPrecios();

//   // Listado Barberos
//   const barberos = [
//     { id:1, nombre: "Carlos Acosta", especialidad: "Barberia clasica"},
//     { id:2, nombre: "Rodrigo Candia", especialidad: "Barberia moderna y Diseños", },
//     { id:3, nombre: "Alison Sousa", especialidad: "Barberia Clasica y Moderna" },
//     { id:4, nombre: "Laura Marengo", especialidad: "Solo Barberia" },
//     { id:5, nombre: "Gaby Riquelme", especialidad: "Tratamiento Facial"},

//   ];

//   function listadoDeBarberos() {
//     console.log("Nuestro Equipo:");
//     barberos.forEach((staff) => {
//         console.log(
//         `Nombre: ${staff.nombre}, Especialidad: ${staff.especialidad}`
//         );
//     });
//   }
//   listadoDeBarberos();

//   //reserva de Horas
 
//   function registrarCliente() {
//     const nombre = prompt("Por favor, ingresa tu nombre:");
//     const telefono = prompt("Por favor, ingresa tu número de teléfono:");
//     const correo = prompt("Por favor, ingresa tu correo electrónico:");
    
//     if (nombre && telefono && correo) {
        
//         const cliente = {
//             id: Date.now(),  
//             nombre: nombre,
//             telefono: telefono,
//             correo: correo,
//         }
        
//         clientes.push(cliente);

//         // Mostrar alerta de éxito
//         alert("¡Registro realizado con éxito!");
//         return cliente;
//     } else {
//         alert("Registro cancelado. Todos los campos son obligatorios.");
//         return null;
//     }
// }

// const clientes = [];


// function reservarHora(cliente) {
//     if (!cliente) {
//         alert('Debes registrarte antes de reservar una hora.');
//         return;
//     }

//     // Mostrar opciones de barberos
//     let mensaje = 'Selecciona un barbero y servicio:\n';
//     barberos.forEach(staff => {
//         mensaje += `${staff.id}|| ${staff.nombre}|| ${staff.especialidad} \n`;
//     });

//     const seleccion = parseInt(prompt(mensaje));
    


//     const barberoSeleccionado = barberos.find(barbero => barbero.id === seleccion);

//     if (barberoSeleccionado) {
         
//         const confirmar = confirm(`Has seleccionado el servicio de ${barberoSeleccionado.especialidad} con ${barberoSeleccionado.nombre} ¿Confirmas la Reserva?`);

//         if (confirmar) {
//             // Crear la reserva
//             const reserva = {
//                 id: Date.now(),
//                 cliente: cliente.nombre,
//                 barbero: barberoSeleccionado.nombre,
//                 servicio: barberoSeleccionado.especialidad,
//                 fecha: new Date().toLocaleString()
//             };
// console.table(reserva);
            
//             reservas.push(reserva);

//             // Mensaje de confirmación
//             alert(`¡Reserva confirmada!\nServicio: ${reserva.servicio}\nBarbero: ${reserva.barbero}\nFecha: ${reserva.fecha}`);
//         } else {
//             alert('Reserva cancelada.');
//         }
//     } else {
//         alert('Selección no válida. Por favor, inténtalo de nuevo.');
    
//     }
// }

// function mostrarReserva() {
//     console.log("Datos de reserva:");
//     reserva.forEach((datos) => {
//       console.log(
//         `ID: ${datos.id}, Cliente: ${datos.cliente}, barbero: ${datos.barbero}, servicio: ${datos.servicio}, fecha: ${datos.fecha}`
//       );
//     });
//   }



// const reservas = [];

// const clienteRegistrado = registrarCliente();


// if (clienteRegistrado) {
//     reservarHora(clienteRegistrado);
// }

//*TERCERA PRE-ENTREGA

// LISTADO DE PRODUCTOS
const productos = [
  { id: 1, nombre: 'Shampoo', precio: 5000 },
  { id: 2, nombre: 'Cera para el cabello', precio: 3000 },
  { id: 3, nombre: 'Aceite para barba', precio: 7000 },
  { id: 4, nombre: 'After Shave', precio: 6000 }
];

let carro = [];


function renderizarProductos() {
    const tablaProductosBody = document.querySelector('#tablaProductos tbody');
    tablaProductosBody.innerHTML = ''; 

    productos.forEach(producto => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${producto.nombre}</td>
            <td>$${producto.precio}</td>
            <td><input type="number" min="1" value="1" id="cantidad-${producto.id}" /></td>
            <td><button onclick="agregarAlCarro(${producto.id})">Agregar</button></td>
        `;

        tablaProductosBody.appendChild(row);
    });
}

// Agregar Productos 
function agregarAlCarro(idProducto) {
    const cantidad = document.getElementById(`cantidad-${idProducto}`).value;
    const producto = productos.find(p => p.id === idProducto);

    const productoEnCarro = carro.find(p => p.id === idProducto);
    if (productoEnCarro) {
        productoEnCarro.cantidad += parseInt(cantidad);
    } else {
        carro.push({ ...producto, cantidad: parseInt(cantidad) });
    }

    console.log('Carro actualizado:', carro);
    calcularTotal();
    renderizarCarrito(); 
}

// Quitar productos 
function quitarDelCarro(idProducto) {
    carro = carro.filter(producto => producto.id !== idProducto);

    console.log('Carro actualizado después de quitar un producto:', carro);
    calcularTotal();
    renderizarCarrito(); 
}

// calcular el total 
function calcularTotal() {
    const total = carro.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
    document.getElementById('totalCarrito').innerText = total;
}


function renderizarCarrito() {
    const tablaCarritoBody = document.querySelector('#tablaCarrito tbody');
    tablaCarritoBody.innerHTML = ''; 

    carro.forEach(producto => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${producto.nombre}</td>
            <td>$${producto.precio}</td>
            <td>${producto.cantidad}</td>
            <td>$${producto.precio * producto.cantidad}</td>
            <td><button onclick="quitarDelCarro(${producto.id})">Quitar</button></td>
        `;

        tablaCarritoBody.appendChild(row);
    });
}

renderizarProductos();

//RESERVA DE HORA
// barberos
const barberos = [
  { id: 1, nombre: 'Carlos Acosta' },
  { id: 2, nombre: 'Rodrigo Candia' },
  { id: 3, nombre: 'Alison Sousa' },
  { id: 4, nombre: 'Laura Marengo' },
  { id: 5, nombre: 'Gaby Riquelme' }

];

// Servicios
const servicios = [
  { id: 1, nombre: 'Corte de Cabello', precio: 10000 },
  { id: 2, nombre: 'Barba', precio: 8000 },
  { id: 3, nombre: 'Corte y Barba', precio: 15000 },
  { id: 4, nombre: 'Tratamiento de Barba', precio: 12000 },
  { id: 5, nombre: 'Limpieza Facial', precio: 10000 },
  { id: 6, nombre: 'Tinte de Cabello', precio: 20000 },
  { id: 7, nombre: 'Servicio Full', precio: 35000 }

];

const selectBarbero = document.getElementById('barbero');
barberos.forEach(barbero => {
    const option = document.createElement('option');
    option.value = barbero.id;
    option.text = barbero.nombre;
    selectBarbero.appendChild(option);
});

const selectServicio = document.getElementById('servicio');
servicios.forEach(servicio => {
    const option = document.createElement('option');
    option.value = servicio.id;
    option.text = `${servicio.nombre} - $${servicio.precio}`;
    selectServicio.appendChild(option);
});

// Envío de Reserva
document.getElementById('reservaForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;
    const barbero = document.getElementById('barbero').value;
    const servicio = document.getElementById('servicio').value;

    const reserva = {
        nombre,
        email,
        telefono,
        fecha,
        hora,
        barbero: barberos.find(b => b.id == barbero).nombre,
        servicio: servicios.find(s => s.id == servicio).nombre
    };

    console.log('Reserva realizada:', reserva);

    // Mensaje de confirmación
    alert('La reserva se ha realizado correctamente');

    // Limpiar el formulario
    document.getElementById('reservaForm').reset();
});