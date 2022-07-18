/*
Isaias Britez
DIV: X
2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
let largo;
let ancho;
let perimetro;
largo = parseInt(document.getElementById("txtIdLargo").value);
ancho = parseInt(document.getElementById("txtIdAncho").value);
perimetro = (largo + ancho) * 2;
alert("la cantidad de alambre a comprar es " + perimetro * 3 + "metros");

}
function Circulo () 
{
	let radio;
    let alambre;
    let PI;
    PI = 3.141592;
    radio =  parseInt(document.getElementById("txtIdRadio").value);
    alambre = ((radio*2)*PI)*3;
    alert("la cantidad de alambre acomprar es de " + alambre.toFixed(2) + "metros");
}
function Materiales () 
{
 let largo;
 let ancho;
 let superficie;
 let bolsacemento;
 let bolsacal;
 largo = parseInt(document.getElementById("txtIdLargo").value);
 ancho = parseInt(document.getElementById("txtIdAncho").value);
 superficie = largo * ancho; 
 bolsacemento = superficie * 2;
 bolsacal = superficie * 3;
alert("la cantidad de cal necesaria es " + bolsacal + " y de cemento es de " + bolsacemento); 

}