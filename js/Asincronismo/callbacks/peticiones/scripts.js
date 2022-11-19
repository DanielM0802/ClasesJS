document.addEventListener('DOMContentLoaded', () => iniciarApp() );

function iniciarApp() {




    function fetchData(url_api, callback) {
        let xhttp = new XMLHttpRequest();
    
        xhttp.open('GET', url_api, true);
        xhttp.onreadystatechange = function (event) {
            if (xhttp.readyState === 4) {
                if (xhttp.status === 200) {
                    callback(null, JSON.parse(xhttp.responseText));
          } else {
            const error = newError('Error' + url_api);
            return callback(error);
          }
            }
        }
        xhttp.send();
    }

    const url = 'https://dog.ceo/api/breeds/image/random';

    const imagen = document.querySelector('.imagen');


    fetchData(url, (err, data) => {
        if(err) return console.log(err)
        console.log(data)
        imagen.src = data.message
    })


     const boton = document.querySelector('.boton');
     console.log(boton);

     boton.onclick = () => {
        
        fetchData(url, (err, data) => {
            if(err) return console.log(err)
            console.log(data)
            imagen.src = data.message

        })
        
     }

    console.log('FIN DEL CODIGO')




}


