document.addEventListener('DOMContentLoaded', ()=>{
    iniciarApp();

});

function iniciarApp() {

    //funcion que reciba un frase y una vocal para contarla
    //hola, como estas? = -> o -> 3

    function contadorVocales(frase='', vocal=''){

        frase = frase.toLowerCase();
        vocal = vocal.toLowerCase();
        let contadorVocales = 0;

        for (let i = 0; i < frase.length; i++) {

            let letra =  frase.charAt(i);
            if (letra === vocal) {
                
                contadorVocales = contadorVocales + 1;
              //contadorVocal++;
              //contadorVocal += 1;
              //console.log('encontramos una vocal ' + vocal)

            }
        }
        
        return contadorVocales;
    }

    let resultadoFuncion = contadorVocales('BUENAS NOCHeS', 'E');
    
    console.log(resultadoFuncion);
    contadorVocales('hola, como estas?', 'o');

}