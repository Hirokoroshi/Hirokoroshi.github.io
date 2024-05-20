// script.js

// Lista de equipos con sus nombres y rutas de imagen (reemplaza las rutas según corresponda)
var equipos = [
    { nombre: 'Barcelona Sporting Club', imagen: 'images/EQUIPOS/Barcelona Sporting Club.png' },
    { nombre: 'Emelec', imagen: 'images/EQUIPOS/Emelec.png' },
    { nombre: 'Liga de Quito', imagen: 'images/EQUIPOS/Liga de Quito.png' },
    { nombre: 'Independiente del Valle', imagen: 'images/EQUIPOS/Independiente del Valle.png' },
    { nombre: 'Delfín SC', imagen: 'images/EQUIPOS/Delfín SC.png' },
    { nombre: 'Macará', imagen: 'images/EQUIPOS/Macará.png' },
    { nombre: 'Deportivo Cuenca', imagen: 'images/EQUIPOS/Deportivo Cuenca.png' },
    { nombre: 'El Nacional', imagen: 'images/EQUIPOS/El Nacional.png' },
    { nombre: 'Aucas', imagen: 'images/EQUIPOS/Aucas.png' },
    { nombre: 'Universidad Católica', imagen: 'images/EQUIPOS/Universidad Católica.png' },
    { nombre: 'Imbabura', imagen: 'images/EQUIPOS/Imbabura.png' },
    { nombre: 'Mushuc Runa', imagen: 'images/EQUIPOS/Mushuc Runa.png' },
    { nombre: 'Libertad FC', imagen: 'images/EQUIPOS/Libertad FC.png' },
    { nombre: 'Orense', imagen: 'images/EQUIPOS/Orense.png' },
    { nombre: 'Técnico Universitario', imagen: 'images/EQUIPOS/Técnico Universitario.png' },
    { nombre: 'Cumbayá', imagen: 'images/EQUIPOS/Cumbayá.png' }
];

// Cargar equipos dinámicamente al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    var equiposContainer = document.getElementById('equipos-container');
    
    equipos.forEach(function(equipo) {
        var equipoDiv = document.createElement('div');
        equipoDiv.classList.add('equipo');
        
        var nombreEquipo = document.createElement('h4');
        nombreEquipo.textContent = equipo.nombre;
        
        var logoEquipo = document.createElement('img');
        logoEquipo.src = equipo.imagen;
        logoEquipo.alt = 'Logo de ' + equipo.nombre;
        
        equipoDiv.appendChild(logoEquipo);
        equipoDiv.appendChild(nombreEquipo);
        equiposContainer.appendChild(equipoDiv);
    });
    
    // Agrega un evento de clic a la celda de la "FECHA 1"
    var fecha1 = document.querySelector('.fechas-table tr:nth-child(2) td:nth-child(2)');
    if (fecha1) {
        fecha1.addEventListener('click', function() {
            // Encuentra la tabla anidada dentro de la celda
            var tablaAnidada = fecha1.querySelector('table');
            if (tablaAnidada) {
                // Muestra u oculta la tabla anidada al hacer clic
                var display = tablaAnidada.style.display;
                tablaAnidada.style.display = display === 'none' ? 'block' : 'none';
            }
        });
    }

    // Inicialmente, muestra la sección de inicio
    mostrarContenido('inicio');
});

// Función para mostrar el contenido de la sección
function mostrarContenido(seccion) {
    // Oculta todas las secciones
    var secciones = document.querySelectorAll('main section');
    secciones.forEach(function(sec) {
        sec.style.display = 'none';
    });

    // Muestra la sección seleccionada
    var seccionSeleccionada = document.getElementById(seccion);
    if (seccionSeleccionada) {
        seccionSeleccionada.style.display = 'block';
    }

    // Si se muestra la sección de pronósticos, muestra el menú de subsecciones
    if (seccion === 'pronosticos') {
        document.getElementById('menu-pronosticos').style.display = 'block';
    } else {
        document.getElementById('menu-pronosticos').style.display = 'none';
    }

    // Si es la sección de pronósticos, muestra la primera subsección por defecto
    if (seccion === 'pronosticos') {
        mostrarSubseccion('equipos');
    }
}

// Función para mostrar el contenido de la subsección (equipos o fechas)
function mostrarSubseccion(subseccion) {
    // Oculta todas las subsecciones
    var subsecciones = document.querySelectorAll('.subseccion');
    subsecciones.forEach(function(subsec) {
        subsec.style.display = 'none';
    });

    // Muestra la subsección seleccionada
    var subseccionSeleccionada = document.getElementById(subseccion);
    if (subseccionSeleccionada) {
        subseccionSeleccionada.style.display = 'block';
    }
}
