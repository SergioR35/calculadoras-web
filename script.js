function calcularIVA() {

  let precio = parseFloat(document.getElementById("precio").value);

  let iva = 21;

  let impuesto = precio * iva / 100;

  let total = precio + impuesto;

  document.getElementById("resultado").innerHTML =
    "IVA: " + impuesto.toFixed(2) + "€<br>Total: " + total.toFixed(2) + "€";
}
