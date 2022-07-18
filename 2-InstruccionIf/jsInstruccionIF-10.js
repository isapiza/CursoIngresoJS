/* Isaias Britez
DIV: X
*/
function mostrar()
{
//Genero el número RANDOM entre 1 y 10 
let nota;
nota = Math.floor(Math.random() * 11);
 if(nota >= 9)
 {
   alert("Tu nota es " + nota + " Exelente")
 }
 else if (nota > 4)
 {
   alert("Tu nota es " + nota + " Aprobado")
 }
 else 
 {
	alert("Tu nota es " + nota + " Vamos, la proxima se puede");
 }
}//FIN DE LA FUNCIÓN