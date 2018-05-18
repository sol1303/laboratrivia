var saludarUsario = document.getElementById('bienvenida');
var mostrarResultados = document.getElementById('contenedorPrincipal');
var respuestasCorrectas = document.getElementById('respuestasCorrectas');
var respuestasIncorrectas= document.getElementById('respuestasIncorrectas');


function checkName(){

  var name = document.name.value;
saludarUsario.innerHTML = "😊 Bienvenid@ " + nombreUsuario + " 😊" ;

var iniciarPartida = parseInt(prompt("Ingresa el número que corresponda a tu respuesta \n ¿Quieres iniciar la partida? \n 1.Si \n 2.No"));


mostrarResultados.style.display = '';
if (iniciarPartida == 2) {
  mostrarResultados.innerHTML =  "<h1>Gracias por visitarnos, nos vemos la próxima 😉 </h1>";
}
else {
  respuestasCorrectas.innerHTML = "<h4> Preguntas correctas </h4>";
  respuestasIncorrectas.innerHTML = "<h4> Preguntas incorrectas </h4>";

  alert("Recuerda ingresar el número que corresponde a tu respuesta 😉");

  /* PRIMERA PREGUNTA */
  var primeraPregunta = parseInt(prompt("1.¿Cuál es la bebida preferida de Gonzalo? \n 1. Agua \n 2. Cerveza \n 3. Vino"));
  if (primeraPregunta == 2) {
    respuestasCorrectas.innerHTML += "1.¿Cuál es la bebida preferida de Gonzalo? <br> <strong>Respuesta correcta:</strong> 🍺 La cerveza 🍺";
  } else {
    respuestasIncorrectas.innerHTML += "1.¿Cuál es la bebida preferida de Gonzalo? <br> <strong>La respuesta correcta era:</strong> 🍺 La cerveza 🍺";
  }
  //SEGUNDA PREGUNTA
  var segundaPregunta = prompt("2.¿Qué es lo que más le gusta hacer a Lulú? \n A. Cantar \n B. Dibujar \n C. Programar");
  if (segundaPregunta == "A") {
    respuestasCorrectas.innerHTML += "<br> 2.¿Qué es lo que más le gusta hacer a Lulú? <br> <strong>Respuesta correcta:</strong> 🎤 Cantar 🎤";
    respuestasCorrectas.innerHTML = respuestasCorrectas.innerHTML + "<br> 2.¿Qué es lo que más le gusta hacer a Lulú? <br> <strong>Respuesta correcta:</strong> 🎤 Cantar 🎤";
  } else {
    respuestasIncorrectas.innerHTML += "<br> 2.¿Qué es lo que más le gusta hacer a Lulú? <br> <strong>Respuesta correcta:</strong> 🎤 Cantar 🎤";
  }
}
