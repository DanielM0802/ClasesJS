document.addEventListener('DOMContentLoaded', () => {
    iniciarApp();

});

function iniciarApp() {

    const fruta = ['m', 'a', 'n', 'z', 'a', 'n', 'a'];
    const frutaUnida = fruta.join('');

    
    const registros = [

    ['1', 'aaliyah_buerklein@yahoo.com', '27-07-2016', '254,270,83'],
    ['2', 'aaliyah62@yahoo.com', '02-06-2015', '25,192,382,261'],
    ['3', 'aaron.mroz@gmail.com', '25-03-2017', '248,20,354'],
    ['4', 'aaron.zawada@gmail.com', '15-12-2016', '569,267'],
    ['5', 'aaron_kreiger2@yahoo.com', '12-08-2018', '566,50']
    
   ]

    function parceToCsv(registros=[[]]){

    let crearString = '';

        for (let i = 0; i < registros.length; i++) {
        crearString += registros[i].join(';') + '\n';
        }
        

       return crearString; 
    }

    let resultadoEsperado = `
    1;aaliyah_buerklein@yahoo.com;27-07-2016;254,270,83
    2;aaliyah_buerklein@yahoo.com;27-07-2016;254,270,83
    3;aaliyah_buerklein@yahoo.com;27-07-2016;254,270,83
    4;aaliyah_buerklein@yahoo.com;27-07-2016;254,270,83
    5;aaliyah_buerklein@yahoo.com;27-07-2016;254,270,83
    `;

    

    let resultadoFuncion = parceToCsv(registros);
    console.log(resultadoFuncion);








}