
/* Buscamos los elementos de la página */
let on = document.getElementById("on");
let off = document.getElementById("off");
let lblResuldato = document.getElementById("mostrar");
let bC = document.getElementById("btnC");
let botones = document.querySelectorAll("button");

/* Se añaden los eventos a los botones */
on.addEventListener("click", activar, false);
off.addEventListener("click", desactivar, false);
bC.addEventListener("click", clear, false);

function setResultado(valor) {
    document.getElementById('mostrar').innerHTML = valor;
}

function getResultado() {
    return document.getElementById('mostrar').innerHTML;
}

function add(num) {
    var resultado = getResultado();
    if (resultado != '0' || isNaN(num)) {
        setResultado (resultado + num);
    } else {
        setResultado(num);
    }
}

function calcular() {
    var resultado = eval(getResultado());
    setResultado(resultado);
}

function activar() {
    for (let i = 0; i < botones.length; i++) {
        botones[i].setAttribute("class", "activado");
        botones[i].disabled = false;
    }
}

function desactivar() {
    for (let i = 0; i < botones.length; i++) {
        botones[i].setAttribute("class", "desactivado");
        botones[i].disabled = true;
    }
}

function clear() {
    lblResuldato.textContent = "0";
}

