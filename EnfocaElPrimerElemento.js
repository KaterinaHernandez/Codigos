//asigna automáticamente el foco del programa al primer elemento del primer formulario de la página,
// independientemente del id del formulario y de los elementos:

if(document.forms.length > 0) {
  if(document.forms[0].elements.length > 0) {
    document.forms[0].elements[0].focus();
  }
}