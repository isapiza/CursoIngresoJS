/* Isaias Britez
DIV:X
*/
function mostrar()
{	
let mes;
mes = document.getElementById("txtIdMes").value;
switch(mes)
{
 case "Febrero":
	alert("Tiene 28 dias");
	break;
 case"Abril":
 case"Junio":
 case"Septiembre":
 case"Noviembre":
  alert("Tiene 30 dias");
 break;
 default:
	alert("tiene 31 dias");
	break;
}
}//FIN DE LA FUNCIÓN