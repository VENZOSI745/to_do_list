let contador = 0;
function addHomework() {
  //Extraer el valor del input
  let newelement = document.getElementById("input_homework").value; //usa getElementById para obtener el valor del input con id "input_homework"
  //Validar que el input no este vacio
  if (newelement === "") {
    alert("Please write a homework before adding it."); //si el input esta vacio, mostrar un mensaje de alerta y salir de la funcion
    return;
  }
  //Crear un nuevo elemento de lista
  let list_element = document.createElement("li"); //usa createElement para crear un nuevo elemento de lista aun no agregado al DOM
  list_element.textContent = newelement + " "; //usa textContent para asignar el valor del input al elemento de lista
  contador++;
  list_element.id = "tarea-" + contador;
  //Crear un boton de eliminar
  let deleteButton = document.createElement("button"); //usa createElement para crear un nuevo boton aun no agregado al DOM
  deleteButton.textContent = "Delete"; //usa textContent para asignar el texto "Delete" al boton
  deleteButton.onclick = function () {
    //usa onclick para asignar una funcion al boton que se ejecutara cuando se haga click en el boton
    list_element.remove(); //usa remove para eliminar el elemento de lista del DOM
  };
  //Agregar el boton de eliminar al elemento de lista
  list_element.appendChild(deleteButton); //usa appendChild para agregar el boton de eliminar al elemento de lista
  //Agregar el elemento de lista a la lista de tareas
  document.getElementById("screen_list").appendChild(list_element); //usa getElementById para obtener la lista de tareas con id "screen_list" y appendChild para agregar el elemento de lista a la lista de tareas
  //Limpiar el input
  document.getElementById("input_homework").value = ""; //usa getElementById para obtener el input con id "input_homework" y asignar un valor vacio al input para limpiar el input
}

/*
ME EMOCIONA EL HECHO DE PODER DESTRIPAR CADA FUNCION PARA SABER USARLA MAS HALLA DE LO OBVIO
1.- getElementById: Esta funcion nos permite obtener un elemento del DOM a partir de su id, lo cual es muy util para poder manipular elementos especificos del DOM.
2.- createElement: Esta funcion nos permite crear un nuevo elemento del DOM, lo cual es muy util para poder agregar elementos dinamicamente al DOM.
3.- textContent: Esta propiedad nos permite asignar o obtener el contenido de texto de un elemento del DOM, lo cual es muy util para poder manipular el contenido de los elementos del DOM.
4.- appendChild: Esta funcion nos permite agregar un elemento hijo a un elemento padre del DOM, lo cual es muy util para poder agregar elementos dinamicamente al DOM.
5.- remove: Esta funcion nos permite eliminar un elemento del DOM, lo cual es muy util para poder eliminar elementos dinamicamente del DOM.

//funcion para texto listado
function changeTitleColor() {
  let idlist = prompt(
    "Ingrese el id del elemento que desea cambiar el color del texto:",
  ); //prompt para pedir al usuario el id del elemento que desea cambiar el color del texto
  let idlist2 = "tarea-" + idlist; //concatenar el id del elemento con "tarea-" para obtener el id del elemento de lista
  let contenido = prompt("Ingrese el contenido que desea agregar al elemento:"); //prompt para pedir al usuario el contenido que desea agregar al elemento
  let element = document.getElementById(idlist2);
  element.textContent = contenido;
  console.log(element);
}
*/
