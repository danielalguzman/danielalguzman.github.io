
function suma() {  
    let main=document.getElementsByTagName("main")[0];

    let aviso=document.createElement("p");
    aviso.textContent="Selección: Suma";

    main.appendChild(aviso);

    let cajaUno = document.createElement("input");
    cajaUno.id="num1";
    cajaUno.placeholder="Teclea el numero";

    let cajaDos = document.createElement("input");
    cajaDos.id="num2";
    cajaDos.placeholder="Teclea el numero";
    
    main.appendChild(cajaUno);
    main.appendChild(cajaDos);

    let botonResultado = document.createElement("button");
    botonResultado.textContent="RESULTADO"
    main.appendChild(botonResultado);

    botonResultado.onclick=function(){
        let x,y,suma,text;  
        x = document.getElementById("num1").value;  
        y = document.getElementById("num2").value;  
        if (isNaN(x) || isNaN(y)) {  
            text = "Es necesarios introducir dos números válidos";  
        }else{  
            //si no ponemos parseFloat concatenaría x con y  
            suma=parseFloat(x)+parseFloat(y);  
            text=suma;  
        }  

        document.getElementById("sumando").innerHTML = text; 
    };  
} 



function resta() {  
    let main=document.getElementsByTagName("main")[0];

    let aviso=document.createElement("p");
    aviso.textContent="Selección: Resta";

    let cajaUno = document.createElement("input");
    cajaUno.id="num1";
    cajaUno.placeholder="Teclea el numero";

    let cajaDos = document.createElement("input");
    cajaDos.id="num2";
    cajaDos.placeholder="Teclea el numero";
    
    main.appendChild(cajaUno);
    main.appendChild(cajaDos);

    let botonResultado = document.createElement("button");
    botonResultado.textContent="RESULTADO"
    main.appendChild(botonResultado);

    botonResultado.onclick=function(){
        let x,y,suma,text;  
        x = document.getElementById("num1").value;  
        y = document.getElementById("num2").value;  
        if (isNaN(x) || isNaN(y)) {  
            text = "Es necesarios introducir dos números válidos";  
        }else{  
            //si no ponemos parseFloat concatenaría x con y  
            suma=parseFloat(x)-parseFloat(y);  
            text=suma;  
        }  

        document.getElementById("sumando").innerHTML = text; 
    };  
} 



function multi() {  
    let main=document.getElementsByTagName("main")[0];

    let aviso=document.createElement("p");
    aviso.textContent="Selección: Multiplicación";

    let cajaUno = document.createElement("input");
    cajaUno.id="num1";
    cajaUno.placeholder="Teclea el numero";

    let cajaDos = document.createElement("input");
    cajaDos.id="num2";
    cajaDos.placeholder="Teclea el numero";
    
    main.appendChild(cajaUno);
    main.appendChild(cajaDos);

    let botonResultado = document.createElement("button");
    botonResultado.textContent="RESULTADO"
    main.appendChild(botonResultado);

    botonResultado.onclick=function(){
        let x,y,suma;
        let text;  
        let cero=0;
        x = document.getElementById("num1").value;  
        y = document.getElementById("num2").value;  
        if (x==cero || y==cero) {  
            text = "Intente de nuevo";  
        }else{  
            //si no ponemos parseFloat concatenaría x con y  
            suma=parseFloat(x)*parseFloat(y);  
            text=suma;  
        }  

        document.getElementById("sumando").innerHTML = text; 
    };  
}



function division() {  
    let main=document.getElementsByTagName("main")[0];

    let aviso=document.createElement("p");
    aviso.textContent="Selección: División";

    let cajaUno = document.createElement("input");
    cajaUno.id="num1";
    cajaUno.placeholder="Teclea el numero";

    let cajaDos = document.createElement("input");
    cajaDos.id="num2";
    cajaDos.placeholder="Teclea el numero";
    
    main.appendChild(cajaUno);
    main.appendChild(cajaDos);

    let botonResultado = document.createElement("button");
    botonResultado.textContent="RESULTADO"
    main.appendChild(botonResultado);

    botonResultado.onclick=function(){
        let x,y,suma,text;  
        x = document.getElementById("num1").value;  
        y = document.getElementById("num2").value;  
        if (isNaN(x) || isNaN(y)) {  
            text = "Es necesarios introducir dos números válidos";  
        }else{  
            //si no ponemos parseFloat concatenaría x con y  
            suma=parseFloat(x)/parseFloat(y);  
            text=suma;  
        }  

        document.getElementById("sumando").innerHTML = text; 
    };  
}



function promedio() {  
    let main=document.getElementsByTagName("main")[0];

    let aviso=document.createElement("p");
    aviso.textContent="Selección: Promedio";

    let caja = document.createElement("input");
    caja.id="num";
    caja.placeholder="Calificaciones a evaluar";
    main.appendChild(caja);

    let botonCalcular = document.createElement("button");
    botonCalcular.textContent="CALCULAR"
    main.appendChild(botonCalcular);

    botonCalcular.onclick=function(){
        let suma=0;
        let a=0;
        let arreglo=document.getElementById("num").value;

        while(a<arreglo){
            let calificaciones=parseFloat(prompt("Inserta la calificación: "));
            suma=suma+calificaciones;
            a++;
        }

        let promedio = suma / arreglo;
        document.getElementById("sumando").innerHTML = promedio;
    }; 
}