*codigo para crear post
*/
var botonLlamar = document.getElementById("btn");
botonLlamar.addEventListener("click", rescatarMensaje);

/**
*Rescatando mensaje de ingreso
*/
function rescatarMensaje(){

	var comment = document.getElementById("comment").value;
	document.getElementById("comment").value = " ";

/**
*Llamando a boton
*/
	var btn = document.getElementById("btn");

/**
*Creando contenedor para mensajes
*/
	var mensaje = document.createElement("div");
	mensaje.classList.add("divNuevo");

	var texto = document.createElement("p");

/**
*Llamando a contenedor de mensajes
*/
	var cont = document.getElementById("cont2");
	var textTwo = document.createTextNode(comment);

/**
*Dandole a cada padre su hijo
*/
	texto.appendChild(textTwo);
	mensaje.appendChild(texto);
	cont2.appendChild(mensaje);
}
/**
*aqui termina el codigo para crear post
*/