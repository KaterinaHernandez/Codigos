//asigna automáticamente el foco del programa al primer elemento del primer formulario de la página,
// independientemente del id del formulario y de los elementos y comprueba si es tipo hidden

if(document.forms.length > 0) {
  for(var i=0; i < document.forms[0].elements.length; i++) {
    var campo = document.forms[0].elements[i];
    if(campo.type != "hidden") {
      campo.focus();
      break;
    }
  }
}