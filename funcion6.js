/* Escribe una función que determine si un año dado es bisiesto
*/

function meses(dias){

    if(dias % 4 == 0 && dias % 100 != 0){
    return "el año es: bisiesto";

}else{
    return " el año no es: bisiesto";
}

}
let semana = parseInt(prompt("ingrese el año"));
let resultado = meses(semana);
console.log(resultado);