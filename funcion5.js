/* Implementa una función que convierta una cadena de 
texto a mayúsculas. 
*/
function mayuscula(cadena){
    return  cadena.toUpperCase() ;
}

let texto = prompt("ingrese texto");
let resultado = mayuscula(texto);

console.log(mayuscula(texto));