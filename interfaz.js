import { Trabajador } from './trabajadores.js';
import { saveAs } from './FileSaver.js';

const trabajadores = [];

function obtenerHorasDesdeEntrada(entrada) {
    const hora = parseInt(entrada.substring(0, 2), 10);
    const minuto = parseInt(entrada.substring(2, 4), 10);

    if (!isNaN(hora) && !isNaN(minuto) && hora >= 0 && hora <= 23 && minuto >= 0 && minuto <= 59) {
        return hora * 60 + minuto; // Convertir a minutos
    }
    return null; // Devuelve null si la entrada no es válida
}

function convertirMinutosATiempo(minutos) {
    const horas = Math.floor(minutos / 60);
    const minutosRestantes = minutos % 60;
    const formatoHora = `${horas.toString().padStart(2, '0')}:${minutosRestantes.toString().padStart(2, '0')}`;
    return formatoHora;
}

export function agregarTrabajador(nombre, cargo, inicioJornada, finJornada, horasAlimento, horasNocturnasManuales) {
    const trabajador = new Trabajador(nombre, cargo, inicioJornada, finJornada, horasAlimento, horasNocturnasManuales);
    trabajadores.push(trabajador);
}

function mostrarTrabajadores() {
    // Lógica para mostrar la lista de trabajadores en la interfaz de usuario
    const listaTrabajadores = document.getElementById('lista-trabajadores');
    listaTrabajadores.innerHTML = '';

    trabajadores.forEach((trabajador, index) => {
        const elementoTrabajador = document.createElement('div');
        elementoTrabajador.innerHTML = `
        <p>${index + 1}. Nombre: ${trabajador.nombre}</p>
        <p>Cargo: ${trabajador.cargo}</p>
        <p>Inicio de Jornada: ${convertirMinutosATiempo(trabajador.inicioJornada)}</p>
        <p>Fin de Jornada: ${convertirMinutosATiempo(trabajador.finJornada)}</p>
        <p>Horas de Alimento: ${trabajador.horasAlimento} minutos</p>
        <p>Horas Trabajadas: ${trabajador.calcularHorasTrabajadas()} horas</p>
        <p>Horas Extras: ${trabajador.calcularHorasExtras()} horas</p>
        <p>Horas Nocturnas: ${trabajador.calcularHorasNocturnas()} horas</p>
    `;
        listaTrabajadores.appendChild(elementoTrabajador);
    });
}

function generarInforme() {
    let csvData = 'Nombre,Cargo,HorasTrabajadas,HorasExtras,HorasNocturnas\n';

    trabajadores.forEach((trabajador) => {
        const horasTrabajadas = trabajador.calcularHorasTrabajadas();
        const horasExtras = trabajador.calcularHorasExtras();
        const horasNocturnas = trabajador.calcularHorasNocturnas();

        // Agregar los datos al CSV
        csvData += `${trabajador.nombre},${trabajador.cargo},${horasTrabajadas},${horasExtras},${horasNocturnas}\n`;
    });

    // Mostrar en la consola
    console.log('--- Informe en formato CSV ---');
    console.log(csvData);

    // Convertir el CSV en un Blob
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8' });

    // Usar FileSaver.js para descargar el archivo
    saveAs(blob, 'informe.csv');
}

// Evento para agregar un trabajador
const botonAgregarTrabajador = document.getElementById('agregar-trabajador');
botonAgregarTrabajador.addEventListener('click', () => {
    const nombre = prompt('Nombre del trabajador:');
    const cargo = prompt('Cargo del trabajador:');
    const inicioJornadaEntrada = prompt('Hora de inicio de jornada (ejemplo: 0800):');
    const finJornadaEntrada = prompt('Hora de fin de jornada (ejemplo: 1700):');
    const horasAlimento = parseFloat(prompt('Horas de colación (en minutos):'));
    const horasNocturnasManuales = parseFloat(prompt('Horas nocturnas manuales (en horas):'));

    const inicioJornada = obtenerHorasDesdeEntrada(inicioJornadaEntrada);
    const finJornada = obtenerHorasDesdeEntrada(finJornadaEntrada);

    agregarTrabajador(nombre, cargo, inicioJornada, finJornada, horasAlimento, horasNocturnasManuales);
    mostrarTrabajadores();
});

// Evento para generar el informe
const botonGenerarInforme = document.getElementById('generar-informe');
botonGenerarInforme.addEventListener('click', () => {
    generarInforme();
});

// Exporta la clase para su uso en otros módulos
export { Trabajador };
