window.onload = function () {
    const IMAGENES = ['img/11.jpg', 'img/22.jpg', 'img/33.jpg', 'img/44.jpg', 'img/55.jpg'];

    const TIEMPO_INTERVALO= 3000;
    let posicionActual= 0;
    let $botonRetroceder= document.querySelector('#atras');
    let $botonAvanzar= document.querySelector('#adelante');
    let $imagen= document.querySelector('#imagen');
    let intervalo;

    // Funciones
    function next() {
        if(posicionActual >= IMAGENES.length - 1) {
            posicionActual= 0;
        } else {
            posicionActual++;
        }
        mostrarImagen();
    }

    function previous() {
        if(posicionActual <= 0) {
            posicionActual = IMAGENES.length - 1;
        } else {
            posicionActual--;
        }
        mostrarImagen();
    }

    function mostrarImagen () {
        $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
    }

    function playIntervalo() {
        intervalo = setInterval(siguienteFoto, TIEMPO_INTERVALO);
    }

    function stopIntervalo() {
        clearInterval(intervalo);
    }

    // Eventos
    $botonAvanzar.addEventListener('click', next);
    $botonRetroceder.addEventListener('click', previous);
    $imagen.addEventListener("mouseover", stopIntervalo);
    $imagen.addEventListener("mouseout", playIntervalo);

    // Iniciar
    mostrarImagen();
    playIntervalo();
} 
