/* Isaias Britez
DIV:X
*/
function mostrar()
{
//tomo la edad  
let edad;
edad = parseInt(document.getElementById("txtIdEdad").value)
if(edad >17)
{
 alert("Eres adulto");
}
else if (edad >=13 && edad<=17)
{
 alert("Eres un adolecente");
}
else
{
 alert("Eres un niño");
}



}//FIN DE LA FUNCIÓN