/*
implementa una función que muestre las vocales en una cadena de texto
*/
function vocales(cadena){
let resultadoA=cadena.includes("a");
let resultadoE=cadena.includes("e");
let resultadoI=cadena.includes("i");
let resultadoO=cadena.includes("o");
let resultadoU=cadena.includes("u");
if(resultadoA){
    console.log("La cadena incluye a");

}if(resultadoE){
    console.log("La cadena incluye e");
}if(resultadoI){
    console.log("la cadena incluye i");

}if(resultadoO){
    console.log("La cadena incluye o");
}if(resultadoU){
    console.log("La cadena incluye u");
}else{
    console.log("La cadena no incluye vocales");
}           
}
let vocal=prompt("Ingrese un texto")
vocales(vocal)
