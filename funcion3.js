/* Desarrolla una función que determine si un número dado es 
par o impar. 
*/

function numerico(k){
    
    if(k % 2==0){
     return"numero es: par";
 
}else{
    return"numero es: impar";
}
   
}

let numero =parseFloat(prompt("ingrese un numero"));
let resultado =numerico(numero);
console.log(resultado);
