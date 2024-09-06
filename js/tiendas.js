'use strict';
const tiendas = [];
function Tiendas(name, direccion, horario, telefono, email, aforo) {
    this.name = name,
        this.direccion = direccion,
        this.horario = horario,
        this.telefono = telefono,
        this.email = email,
        this.aforo = aforo
}

const Seatle = new Tiendas("Seattle", "Av. Azángaro 341", "6am - 7pm", "1-5411357", "seattle@salmoncookies.com", "15");
const Tokyo = new Tiendas("Tokyo", "Attack of titans 231", "6am - 7pm", "1-5411357", "tokyo@salmoncookies.com", "15");
const Paris = new Tiendas("París", "Av. Dupre 552", "6am - 7pm", "1-5411357", "paris@salmoncookies.com", "15");
const Dubai = new Tiendas("Dubai", "Av. Millonarios 568", "6am - 7pm", "1-5411357", "dubai@salmoncookies.com", "15");
const Lima = new Tiendas("Lima", "Jiron Cañete 415", "6am - 7pm", "1-5411357", "lima@salmoncookies.com", "15");
tiendas.push(Seatle, Tokyo, Dubai, Paris, Lima);

function mostrarTiendas(store) {
    const sucursales = document.getElementById('sucursales');
    const local = document.createElement('section');

    const nombreTienda = document.createElement('h2');
    nombreTienda.textContent = store.name;
    local.appendChild(nombreTienda);

    const direccionTienda = document.createElement('p');
    direccionTienda.textContent = store.direccion;
    local.appendChild(direccionTienda);

    const horarioTienda = document.createElement('p');
    horarioTienda.textContent = store.horario;
    local.appendChild(horarioTienda);

    const telefonoTienda = document.createElement('p');
    telefonoTienda.textContent = store.telefono;
    local.appendChild(telefonoTienda);

    const emailTienda = document.createElement('p');
    emailTienda.textContent = store.email;
    local.appendChild(emailTienda);

    const aforoTienda = document.createElement('p');
    aforoTienda.textContent = store.aforo;
    local.appendChild(aforoTienda);

    sucursales.appendChild(local);
}
function ejecutar() {
    for (let i = 0; i < tiendas.length; i++) {
        mostrarTiendas(tiendas[i]);
    }
}
ejecutar()

tiendas = [Seatle, Tokyo, Dubai, Paris, Lima]