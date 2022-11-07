botonCalcular.addEventListener("click", resumen);
botonReset.addEventListener("click", limpiarInput);

function alert(message) {
  if (!document.getElementById("mensaje")) {
    var wrapper = document.createElement("div");
    wrapper.innerHTML =
      '<div class="label" id="mensaje" style="color: red;">' +
      message +
      "</div>";
    document.getElementById("inputCantidad").style.borderColor = "red";
    document.getElementById("invalido").append(wrapper);
  }
}

function limpiarInput() {
    document.getElementById("precioTotal").innerHTML = "";
    console.log(document.getElementById("precioTotal"));
    
    document.getElementById("inputCantidad").style.borderColor = "";
    document.getElementById("mensaje").remove();
}

function resumen() {
  let cantidad = document.getElementById("inputCantidad").value;
  let categoria = document.getElementById("selectCategoria").value;

  let resultado;

  if (cantidad == "") {
    alert("Necesita completar este campo");
    resultado = "";
  } else {
    if (document.getElementById("mensaje")) {
      limpiarInput();
    }
    if (categoria == "Estudiante") {
      resultado = parseFloat(cantidad) * 200 * 0.2;
    } else if (categoria == "Trainee") {
      resultado = parseFloat(cantidad) * 200 * 0.5;
    } else {
      resultado = parseFloat(cantidad) * 200 * 0.85;
    }
  }

  document.getElementById("precioTotal").innerHTML = resultado;
}
