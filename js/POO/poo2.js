document.addEventListener('DOMContentLoaded', () => {
    iniciarApp();

});

function iniciarApp() {


    class Automovil {

        constructor(marca, color, modelo ){
            this.marca = marca;
            this.color = color;
            this.modelo = modelo;
            this.ruedas = 4;
        }

        mostrarInformacion(){
            console.log(`Soy un ${this.modelo} de la marca ${this.marca} de color ${this.color} `);
        }

    }

    const audi = new Automovil("Audi", "Azul", "A6");

    console.log(audi);

 
    const chevrolet = new Automovil("Chevrolet", "rojo", "electra");

    // marca              modelo
    // chevrolet.marca    chevrolet.modelo

    console.log(chevrolet);












}

