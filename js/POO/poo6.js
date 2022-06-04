document.addEventListener('DOMContentLoaded', () => iniciarApp() );

function iniciarApp() {



    //Producto Fresco -> nombre, temperatura, peso
    //Producto Frio -> nombre, temperatura, peso, es congelable?
    //Producto Congelado -> nombre, temperatura, peso, metodo de Congelamiento.


    class Producto {

        constructor (nombre, temperatura, peso) {
           this.nombre = nombre;
           this.temperatura = temperatura;
           this.peso = peso;

         }    
    }
       




    class ProductoFresco extends Producto {
    
    }

    class ProductoFrio extends Producto {
        constructor (nombre, temperatura, peso, esCongelable) {
           super(nombre, temperatura, peso);
            this.esCongelable = esCongelable;   
        }

    }

    class ProductoCongelado extends Producto {
        constructor (nombre, temperatura, peso, metodoCongelamiento) {
            super(nombre, temperatura, peso);
            this.metodoCongelamiento = metodoCongelamiento;   
        }
   
    }


    const jugo = new ProductoFresco("Yupi", 6, 20);

    console.log(jugo);

    const carne = new ProductoFrio("pollo", 20, 1000, true);

    console.log(carne);

    const helado = new ProductoCongelado("Chocolito", 2, 30, "lento");

    console.log(helado);










}
