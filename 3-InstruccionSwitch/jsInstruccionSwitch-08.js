/* Isaias Britez
DIV:X
Entregado
*/
function mostrar()
{
let destino;
destino = document.getElementById("txtIdDestino").value;
switch(destino)
{
	case "Cataratas":
	case "Bariloche":
	alert("Frio");
	break;
	case "Mar del plata":
	case "Ushuaia":
    alert("Calor");
	break;
}

}//FIN DE LA FUNCIÓN