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

  console.log(txtCifrado);
  document.getElementById("imagen de la derecha").style.display = "none";
  /*
    document.getElementById("texto de la derecha").style.display = none;
    document.getElementById("texto2 de la derecha").innerHTML= txtCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
  
  */
}

function copiar() {}
