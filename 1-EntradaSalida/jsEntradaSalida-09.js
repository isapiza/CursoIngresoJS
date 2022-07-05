/*
Isaias Britez
DIV X
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let sueldo;
	let resultado;
	let cuenta;
	sueldo = parseInt(document.getElementById("txtIdSueldo").value);
	cuenta = ( sueldo * 10  / 100 ) + sueldo;
	resultado = parseInt(document.getElementById("txtIdResultado").value = cuenta);




}

