/* desarrolla una funcion que calcule la distancia entre dos puntos en un plano cartesiano
*/

function distancia (x1,x2,y1,y2){
   return Math.sqrt((x2-x1)**2+(y2-y1)**2);
}

let punto1 = parseFloat(prompt("ingrese un numero"));
let punto2 = parseFloat(prompt("ingrese un numero"));
let punto3 = parseFloat(prompt("ingrese un numero"));
let punto4 = parseFloat(prompt("ingrese un numero"));


console.log(distancia(punto1,punto2,punto3,punto4));