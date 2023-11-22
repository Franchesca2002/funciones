/*Crea una función que calcule el promedio de tres de números.
*/
function entero (x,y,z){
   return(x+y+z)/3
}
let number1=parseInt(prompt("ingrese un numero"));
let number2=parseInt(prompt("ingrese un numero"));
let number3=parseInt(prompt("ingrese un numero"));
let resultado= entero (number1 , number2, number3);
  console.log ("el resultado es ",+ resultado);