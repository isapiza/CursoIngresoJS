/*
Isaias Britez
DIV X 
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe;
	let resultado;
	let cuenta;
	importe = parseInt(document.getElementById("txtIdImporte").value);
	cuenta = importe - ( importe * 25 / 100 ) ;
	resultado = parseInt(document.getElementById("txtIdResultado").value = cuenta);

}
