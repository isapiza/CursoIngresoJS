/*
Isaias Britez
DIV X
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
var num1;
var num2;
var resultado;
function sumar()
{	
 num1 = document.getElementById("txtIdNumeroUno").value;
	num2 = document.getElementById("txtIdNumeroDos").value;
	num1 = parseInt(num1);
	num2 = parseInt(num2);
	resultado = num1 + num2;
	alert("el resultado es = " + resultado);
}

function restar()
{

num1 = document.getElementById("txtIdNumeroUno").value;
num2 = document.getElementById("txtIdNumeroDos").value;
num1 = parseInt(num1);
num2 = parseInt(num2);
resultado = num1 - num2;
alert("el resultado es = " + resultado);
}

function multiplicar()
{ 

num1 = document.getElementById("txtIdNumeroUno").value;
num2 = document.getElementById("txtIdNumeroDos").value;
num1 = parseInt(num1);
num2 = parseInt(num2);
resultado = num1 * num2;
alert("el resultado es = " + resultado);
}

function dividir()
{

num1 = document.getElementById("txtIdNumeroUno").value;
num2 = document.getElementById("txtIdNumeroDos").value;
num1 = parseFloat(num1);
num2 = parseFloat(num2);
resultado = num1 / num2;
alert("el resultado es = " + resultado);
}

