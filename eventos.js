document.addEventListener('DOMContentLoaded',()=>{
    
    let botonDiv = document.getElementById('boton');

    botonDiv.addEventListener('click', function(event) {

        if (event.target.tagName === 'BUTTON') {
            return;
        }
        
        alert('Hola! Soy el div');
    });

});


