document.addEventListener('DOMContentLoaded', ()=>{
    iniciarApp();

});

const iniciarApp = () => {


    //Refactorizando calculadora que suma 2 numeros del ejercicio anterior

    function transformar() {
        let resultadoIsNan = true; 
        let transformarNumero;
    
        do { 
    
            const numero1 = window.prompt('ingresa numero 1');
            transformarNumero = parseInt(numero1);
            resultadoIsNan = isNaN(numero1);
        
        } while ( resultadoIsNan == true);
     
       return transformarNumero;
    }    


    const numero1 = transformar();
    const numero2 = transformar();
    const numero3 = transformar();


    const sumar = numero1 + numero2 + numero3;


    console.log(sumar);

}