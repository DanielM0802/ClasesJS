document.addEventListener('DOMContentLoaded', () => {
    iniciarApp();

});

function iniciarApp() {




    const audi = {
        marca: 'Audi',
        color: 'Azul',
        modelo: 'A6',
        velocidad: 180,
        motor: 2.5,

        mostrarInformacion(){
            console.log(`Soy un ${this.marca} de color ${this.color} `);
        }

    }

    //como acceder a la propiedad 'velocidad'
    console.log(audi.velocidad);

    


    audi.color = 'Verde'


    audi.mostrarInformacion();


    

    const chevrolet = {
        marca: 'chevrolet',
        color: 'rojo',
        modelo: 'electra',
        velocidad: '200',
        motor: 1.8,
        encendido: false,
    
        mostrarInformacion(){
            console.log(`Soy un ${this.marca} de color ${this.color} `);
        },

        encenderAuto(){
            this.encendido = true;
        },
        
        apagarAuto(){
            this.encendido = false;
        }
    
    };

    console.log(chevrolet.encendido);
    chevrolet.encenderAuto();
    console.log(chevrolet.encendido);
    chevrolet.apagarAuto();
    console.log(chevrolet.encendido);



    const toyota = {
        marca: 'Toyota',
        color: 'Verde',
        modelo: 'Corolla',
        velocidad: 120,
        motor: 2.8,

        mostrarInformacion(){
            console.log(`Soy un ${this.marca} de color ${this.color} `);
        }

    }

    


    toyota.mostrarInformacion();























}
