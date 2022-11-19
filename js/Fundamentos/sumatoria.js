document.addEventListener('DOMContentLoaded', ()=>{
    iniciarApp();

});

const iniciarApp = () => {


    //Funcion que sume numeros desde el 0 hasta ?
    //parametro por defecto -> limite = 10
    function suma (limite) {
        let sumatoria = 0;

        // 0 + 1 + 2 + 3 ==  6        

        for (i = 0; i <= limite; i++){             
            sumatoria = sumatoria + i;
        }
        
        return sumatoria; 
        
    }

    
    const resultadoFuncion = suma(10);

    console.log(resultadoFuncion);
    console.log(  suma(20)  );
    console.log(  suma(37)  );






    function suma2(limite, inicio) {
        let sumatoria = 0;
       
        // 0 + 1 + 2 + 3 ==  6        

        for (i = inicio; i <= limite; i++){             
            sumatoria = sumatoria + i;
        }
        
        return sumatoria; 
        
    }
    
    console.log( suma2(10, 5) );


}