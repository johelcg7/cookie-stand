"use strict"

const seattle = {
    location: "seattle",
    minConsumidoresPorHora: 23,
    maxConsumidoresPorHora: 65,
    promedioGalletasPorPersona: 6.3,
    galletasVendidasPorHora: [],
    vender: function () {
        this.galletasVendidasPorHora = estimarVentas(this);
    }
}

const tokyo = {
    location: "tokyo",
    minConsumidoresPorHora: 23,
    maxConsumidoresPorHora: 65,
    promedioGalletasPorPersona: 6.3,
    galletasVendidasPorHora: [],
    vender: function () {
        this.galletasVendidasPorHora = estimarVentas(this);
    }
}

const dubai = {
    location: "dubai",
    minConsumidoresPorHora: 23,
    maxConsumidoresPorHora: 65,
    promedioGalletasPorPersona: 6.3,
    galletasVendidasPorHora: [],
    vender: function () {
        this.galletasVendidasPorHora = estimarVentas(this);
    }
}

const paris = {
    location: "paris",
    minConsumidoresPorHora: 23,
    maxConsumidoresPorHora: 65,
    promedioGalletasPorPersona: 6.3,
    galletasVendidasPorHora: [],
    vender: function () {
        this.galletasVendidasPorHora = estimarVentas(this);
    }
}

const lima = {
    location: "lima",
    minConsumidoresPorHora: 23,
    maxConsumidoresPorHora: 65,
    promedioGalletasPorPersona: 6.3,
    galletasVendidasPorHora: [],
    vender: function () {
        this.galletasVendidasPorHora = estimarVentas(this);
    }
}



const horasAtencion = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
const tiendas = [seattle, tokyo, dubai, paris, lima];

function random() {
    return Math.floor(Math.random() * (max - min) + min);
}

function estimarVentas(tienda) {
    const sale = [];
    for (let i = 0; i < horasAtencion.length; i++) {
        const numeroConsumidores = random(tienda.minConsumidoresPorHora, tienda.maxConsumidoresPorHora);
        const ventaPorHora = Math.ceil(numeroConsumidores * tienda.promedioGalletasPorPersona);
        sale.push(ventaPorHora);
        console.log(sale);

    }
    return sale;
}

function mostrarVentas(tienda) {

    let totalGalletasDelDia=0;
    const root = document.getElementById("root");

    const location = document.createElement("section");
    location.classList.add("location");
    root.appendChild(location);

    const title = document.createElement("h2");
    title.textContent=tienda.location;
    location.appendChild(title);

    const lista = document.createElement("ul");
    location.appendChild(lista);

    for (let i =0; i < horasAtencion.length;i++){
        const listItem=document.createElement("li");
        listItem.textContent=horasAtencion[i]+ " : " +tienda.galletasVendidasPorHora[i]+ " galletas.";
        location.appendChild(listItem);
        totalGalletasDelDia += tienda.galletasVendidasPorHora[i];
    }

    const ventaTotal = document.createElement("li");
    ventaTotal.textContent="Total de galletas del día: " +totalGalletasDelDia +" galletas.";
    lista.appendChild(ventaTotal);
}

function correrModelo() {
    for(let i=0; i<tiendas.length;i++){
        tiendas[i].vender();
        mostrarVentas(tiendas[i]);
    }
}

correrModelo();