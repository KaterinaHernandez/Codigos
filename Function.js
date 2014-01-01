//El siguiente código de JavaScript permite obtener de forma correcta en cualquier navegador el 
//carácter correspondiente a la tecla pulsada:

function manejador(elEvento) {
  var evento = elEvento || window.event;
  var caracter = evento.charCode || evento.keyCode;
  alert("El carácter pulsado es: " + String.fromCharCode(caracter));
}
 
document.onkeypress = manejador;