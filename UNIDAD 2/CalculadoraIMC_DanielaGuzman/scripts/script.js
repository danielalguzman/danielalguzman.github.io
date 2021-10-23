function calcular(){
    let peso = document.getElementById("peso").value;
    let estatura = document.getElementById("estatura").value;
    let indice = document.getElementById("indice");
    let mostrar = document.getElementById("“resultado");
    let condicion = document.getElementById("condicion");

    estatura = Math.round(estatura)/100;
    peso = Math.round(peso);

    let imc = (peso/Math.pow(estatura,2));
    imc = imc.toFixed(2);
    let resultado = Math.round(imc);
    /*indice.innerText = "IMC: " + imc;*/
    
    if(imc<16){
        indice.innerText = "Tu IMC es: " + resultado;
        mostrar.innerText = "Su peso está por debajo de lo normal. \nLe recomendamos visitar a un especialista.";
        condicion.innerText = "Delgadez Severa.";
    }else{
        if(imc>=16 && imc<=16.99){
            indice.innerText = "Tu IMC es: " + resultado;
            mostrar.innerText = "Su peso está por debajo de lo normal. \nLe recomendamos visitar a un especialista.";
            condicion.innerText = "Delgadez Moderada.";
        }else{
            if(imc>=17 && imc<=18.49){
                indice.innerText = "Tu IMC es: " + resultado;
                mostrar.innerText = "Su peso está por debajo de lo normal. \nLe recomendamos visitar a un especialista.";
                condicion.innerText = "Delgadez Aceptable.";
            }else{
                if(imc>=18.50 && imc<=24.99){
                    indice.innerText = "Tu IMC es: " + resultado;
                    mostrar.innerText ="No necesita bajar de peso. Su estado es NORMAL";
                    condicion.innerText = "Normal.";
                }else{
                    if(imc>=25 && imc<=29.99){
                        indice.innerText = "Tu IMC es: " + resultado;
                        mostrar.innerText ="Usted tiene sobrepeso. \nLe recomendamos visitar a un especialista.";
                        condicion.innerText = "Pre-Obeso (riesgo).";
                    }else{
                        if(imc>=30 && imc<=34.99){
                            indice.innerText = "Tu IMC es: " + resultado;
                            mostrar.innerText ="Usted tiene sobrepeso. \nLe recomendamos visitar a un especialista.";
                            condicion.innerText = "Obesidad Tipo I (riesgo moderado).";
                        }else{
                            if(imc>=35 && imc<=39.99){
                                indice.innerText = "Tu IMC es: " + resultado;
                                mostrar.innerText ="Usted tiene sobrepeso. \nLe recomendamos visitar a un especialista.";
                                condicion.innerText = "Obesidad Tipo II (riesgo severo).";
                            }else{
                                if(imc>=40){
                                    indice.innerText = "Tu IMC es: " + resultado;
                                    mostrar.innerText ="Usted tiene sobrepeso. \nLe recomendamos visitar a un especialista.";
                                    condicion.innerText = "Obesidad Tipo III (riesgo muy severo)."; 
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}