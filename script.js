document.getElementById('encuestaForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var preferencia = document.getElementById('preferencia').value;
    var comodidad = document.getElementById('comodidad').value;
    var efectividad = document.getElementById('efectividad').value;

    if (preferencia && comodidad && efectividad) {
        var encuestas = JSON.parse(localStorage.getItem('encuestas')) || [];
        var nuevaEncuesta = { preferencia, comodidad, efectividad };

        encuestas.push(nuevaEncuesta);
        localStorage.setItem('encuestas', JSON.stringify(encuestas));

        actualizarTablaEncuestas();
    }
});

function actualizarTablaEncuestas() {
    var encuestas = JSON.parse(localStorage.getItem('encuestas')) || [];
    var tablaEncuestas = document.getElementById('tablaEncuestas');

    tablaEncuestas.innerHTML = '';
    encuestas.forEach(function(encuesta, index) {
        var fila = document.createElement('tr');

        var celda1 = document.createElement('td');
        celda1.textContent = "Pregunta 1: " + encuesta.preferencia;
        fila.appendChild(celda1);

        var celda2 = document.createElement('td');
        celda2.textContent = "Pregunta 2: " + encuesta.comodidad;
        fila.appendChild(celda2);

        var celda3 = document.createElement('td');
        celda3.textContent = "Pregunta 3: " + encuesta.efectividad;
        fila.appendChild(celda3);


        var botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.addEventListener('click', function() {
            encuestas.splice(index, 1);
            localStorage.setItem('encuestas', JSON.stringify(encuestas));
            actualizarTablaEncuestas();
        });

        fila.appendChild(botonEliminar);
        tablaEncuestas.appendChild(fila);
    });
}

actualizarTablaEncuestas();
