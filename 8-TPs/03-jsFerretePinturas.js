/*Isaias Britez
DIV: X
3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
 let fahrenheit;
 let convercion;
 fahrenheit = parseInt(document.getElementById("txtIdTemperatura").value);
 convercion = (fahrenheit - 32) / 1.8; 
 alert(fahrenheit + " farenheit son " + convercion + " Centigrados" );


}

function CentigradosFahrenheit () 
{
 let centigrados;
 let convercion;
centigrados = parseInt(document.getElementById("txtIdTemperatura").value);
 convercion = (centigrados * 1.8 ) + 32; 
 alert(centigrados + " Centigrados son " + convercion + " Farenheit" );
}
