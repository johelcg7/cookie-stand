'use strict';
const horasAtencion = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
const tiendas = [];
const elementosDeTabla = document.getElementById('sales-table');
const formElement = document.getElementById('addLocation')

const footerTabla=document.createElement('tfoot');

function Locacion(location, minConsumidoresPorHora, maxConsumidoresPorHora, promedioDeGalletasPorPersona) {
    this.location = location;
    this.minConsumidoresPorHora = minConsumidoresPorHora;
    this.maxConsumidoresPorHora = maxConsumidoresPorHora;
    this.promedioDeGalletasPorPersona = promedioDeGalletasPorPersona;
    this.galletasVendidasPorHora = [];
    this.numeroDeConsumidoresPorHora = [];
    this.totalGalletasPorDia = 0;
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

Locacion.prototype.calcularConsumidoresPorHora = function () {
    for (let i = 0; i < horasAtencion.length; i++) {
        this.numeroDeConsumidoresPorHora.push(random(this.minConsumidoresPorHora, this.maxConsumidoresPorHora));
    }
};

Locacion.prototype.calcularGalletasPorHora = function () {
    this.calcularConsumidoresPorHora();
    for (let i = 0; i < horasAtencion.length; i++) {
        const ventasPorHora = Math.ceil(this.numeroDeConsumidoresPorHora[i] * this.promedioDeGalletasPorPersona);
        this.galletasVendidasPorHora.push(ventasPorHora);
        this.totalGalletasPorDia += ventasPorHora
    }
};

const Seatle = new Locacion("Seatle", 23, 65, 6.3);
const Tokyo = new Locacion("Tokyo", 3, 24, 1.2);
const Dubai = new Locacion("Dubai", 11, 38, 3.7);
const Paris = new Locacion("Paris", 20, 38, 2.3);
const Lima = new Locacion("Lima", 2, 16, 4.6);
tiendas.push(Seatle,Tokyo,Dubai,Paris,Lima);

function encabezadoTabla() {
    const tablaFila = document.createElement('tr');
    let tablaHeader = document.createElement('th');
    tablaHeader.textContent = 'Location';
    tablaFila.appendChild(tablaHeader);

    for (let i = 0; i < horasAtencion.length; i++) {
        tablaHeader = document.createElement('th');
        tablaHeader.textContent = horasAtencion[i];
        tablaFila.appendChild(tablaHeader);
    }
    tablaHeader = document.createElement('th');
    tablaHeader.textContent = 'Total';
    tablaFila.appendChild(tablaHeader)

    elementosDeTabla.appendChild(tablaFila);
}

Locacion.prototype.mostrarVentas = function () {
    this.calcularGalletasPorHora();
    const tablaFila = document.createElement('tr');
    let dataTable = document.createElement('td');
    dataTable.textContent = this.location;
    tablaFila.appendChild(dataTable);
    for (let i = 0; i < horasAtencion.length; i++) {
        dataTable = document.createElement('td');
        dataTable.textContent = this.galletasVendidasPorHora[i];
        tablaFila.appendChild(dataTable);
    }
    let totalDataTable = document.createElement('th');
    totalDataTable.textContent = this.totalGalletasPorDia;
    tablaFila.appendChild(totalDataTable);
    elementosDeTabla.appendChild(tablaFila);
}

function footerTable() {
    const tablaFila = document.createElement('tr');
    let pieDeTabla = document.createElement('th');
    pieDeTabla.textContent = 'Total';
    tablaFila.appendChild(pieDeTabla);

    let totalDeTotales = 0;
    for (let i = 0; i < horasAtencion.length; i++) {
        let totalPorHora = 0;
        for (let j = 0; j < tiendas.length; j++) {
            totalPorHora += tiendas[j].galletasVendidasPorHora[i];
            totalDeTotales += tiendas[j].galletasVendidasPorHora[i];
        }
        pieDeTabla = document.createElement('th');
        pieDeTabla.textContent = totalPorHora;
        tablaFila.appendChild(pieDeTabla);
    }
    pieDeTabla = document.createElement('th');
    pieDeTabla.textContent = totalDeTotales;
    tablaFila.appendChild(pieDeTabla);
    footerTabla.appendChild(tablaFila);
    elementosDeTabla.appendChild(footerTabla);
}

function handleForm(e) {
    e.preventDefault();

    const loc = e.target.location.value;
    const min = parseInt(e.target.minConsumidores.value);
    const max = parseInt(e.target.maxConsumidores.value);
    const prom = parseFloat(e.target.promGalletas.value);

    console.log(e);
    console.log(loc);
    console.log(min);
    console.log(max);
    console.log(prom);

    const newTienda = new Locacion(loc, min, max, prom);
    tiendas.push(newTienda);
    console.log(newTienda);

    e.target.location.value = null;
    e.target.minConsumidores.value = null;
    e.target.maxConsumidores.value = null;
    e.target.promGalletas.value = null;

    footerTabla.innerHTML='';
    newTienda.mostrarVentas();
    footerTable();
}

function ejecutarTabla() {
    encabezadoTabla();
    for (let i = 0; i < tiendas.length; i++) {
        tiendas[i].mostrarVentas();
    }
    footerTable();
}

ejecutarTabla(); 3
formElement.addEventListener('submit', handleForm);