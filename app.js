//PRUEBA NUMERO 3 DE ENCRIPTADOR DE TEXTO

//g es para toda la linea u oracion
//i es para que afecte tanto mayusculas como minusculas -- e else
//m es para que afecte a multiples lineas a parrafo

function encriptarTexto() {
  var texto = document.getElementById("textarea").value.toLowerCase();

  var txtCifrado = texto.replace(/e/gim, "enter");
  var txtCifrado = txtCifrado.replace(/o/gim, "ober");
  var txtCifrado = txtCifrado.replace(/i/gim, "imes");
  var txtCifrado = txtCifrado.replace(/a/gim, "ai");
  var txtCifrado = txtCifrado.replace(/u/gim, "ufat");

  console.log(txtCifrado);
  document.getElementById("imgDerecha").style.display = "none";
  document.getElementById("textoDerecha").style.display = "none";
  document.getElementById("texto2Derecha").innerHTML = txtCifrado;
  document.getElementById("copiar").style.display = "show";
  document.getElementById("copiar").style.display = "inherit";
}

function desencriptarTexto() {
  var texto = document.getElementById("textarea").value.toLowerCase();

  var txtCifrado = texto.replace(/enter/gim, "e");
  var txtCifrado = txtCifrado.replace(/ober/gim, "o");
  var txtCifrado = txtCifrado.replace(/imes/gim, "i");
  var txtCifrado = txtCifrado.replace(/ai/gim, "a");
  var txtCifrado = txtCifrado.replace(/ufat/gim, "u");

  document.getElementById("imgDerecha").style.display = "none";
  document.getElementById("textoDerecha").style.display = "none";
  document.getElementById("texto2Derecha").innerHTML = txtCifrado;
  document.getElementById("copiar").style.display = "show";
  document.getElementById("copiar").style.display = "inherit";
}

/*
function copiarTexto() {
  // Obtener el elemento que contiene el texto
  var textoElemento = document.getElementById("texto2Derecha").innerText;

  // Crear un elemento de texto temporal
  var textarea = document.createElement("textarea");
  textarea.value = texto;

  // Añadir el elemento al DOM
  document.body.appendChild(textarea);

  // Seleccionar el texto en el elemento
  textarea.select();
  textarea.setSelectionRange(0, 99999); // Para dispositivos móviles

  // Ejecutar el comando de copiar
  document.execCommand("copy");

  // Eliminar el elemento temporal
  document.body.removeChild(textarea);

  // Mostrar algún tipo de confirmación (puede ser una alerta o un mensaje en la interfaz)
  alert("Texto copiado al portapapeles: " + texto);
}*/
function copiarTexto() {
  var textoElemento = document.getElementById("texto2Derecha");
  var texto = textoElemento.innerText;

  navigator.clipboard
    .writeText(texto)
    .then(function () {
      // Éxito al copiar
      alert("¡Texto copiado al portapapeles con exito! ");
    })
    .catch(function (err) {
      // Manejar cualquier error durante la escritura en el portapapeles
      console.error("No se pudo copiar el texto: ", err);
    });
}
