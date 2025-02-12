/*

Gustavo Petrov - Div D
E/S Ejercicio 9

Enunciado:
----------
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".

*/

function mostrarAumento() {
  let importe;
  let porcentajeDeAumento;
  let aumento;
  let resultado;
  let mensaje;

  porcentajeDeAumento = 10;
  importe = document.getElementById("txtIdSueldo").value;
  importe = parseFloat(importe);

  aumento = (importe * porcentajeDeAumento) / 100;
  resultado = importe + aumento;

  mensaje = `El resultado es: ${resultado}`;
  txtIdResultado.value = mensaje;
}
