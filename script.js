/**
 * Ejercicio #4:
 *
 * Validar el formulario
 *
 * ¿Como funciona?:
 * 1. La validacion se hace cuando el usuario presiona el boton "Enviar" para enviar el form
 * 2. Solo se validan los campos con el * (tienen la clase requerido)
 * 3. Al hacer click en "enviar"
 *     3.1. Los campos invalidos deben ponerse con un borde rojo
 *     3.2. Se debe mostrar un aviso con un titulo de: "Ocurrio un error, verifica
 *     los siguientes campos" y seguido un listado con los campos invalidos. El aviso
 *     debe tener border rojo y fondo rojo claro
 *     3.3. Si todos los campos son validos, debe mostrar un mensaje abajo del boton enviar
 *     que dice: "Su formulario fue enviado". El aviso debe tener borde verde con fondo verde claro
 *
 * ¿Donde empiezo?:
 *
 * ¿Que voy a evaluar?
 * 1. Que funcione
 * 2. Buenas practicas (incluyendo buenas practicas pasadas)
 *
 */
// BOILERPLATE
const form = document.querySelector("form");
const requerido = document.querySelectorAll('.requerido');
const javascript = document.querySelector('script');
const padre = form.parentElement;
const mensajeEnviado = document.createElement('p');
const mensajeNoEnviado = document.createElement('p');
let vacio = '';
let completado = '';
mensajeEnviado.classList.add("mensaje-enviado")
mensajeNoEnviado.classList.add("mensaje-no-enviado")

form.addEventListener("submit", function(e) {
  e.preventDefault();
  requerido.forEach(colores => {
    if (colores.value !== '') {
      colores.style.border = "1px solid green";
      vacio = '';
      completado = "Su formulario ha sido enviado!";
    } else {
      colores.style.border = "1px solid red";
      vacio = "Ups. Ocurrió un error, verifica los campos";
      completado = '';
    }
  });

  mensajeNoEnviado.style.backgroundColor = "E33D3C";
  mensajeEnviado.style.backgroundColor = "008F39";
  mensajeEnviado.innerText = completado;
  mensajeNoEnviado.innerText = vacio;
  padre.insertBefore(mensajeEnviado, javascript);
  padre.insertBefore(mensajeNoEnviado, form);
  console.log("FORMULARIO ENVIADO");
});