function resetForm() {
    document.getElementById("conversion-form").reset();
    document.getElementById("result").innerHTML = "";
  }

  document.getElementById("conversion-form").addEventListener("submit", function(event) {
    event.preventDefault();

    var amount = parseFloat(document.getElementById("amount").value);
    var currency = document.getElementById("currency").value;
    var exchangeRate = parseFloat(document.getElementById("exchange-rate").value);
    var result;

    if (currency === "pesos") {
      result = amount / exchangeRate;
      document.getElementById("result").innerHTML = amount + " pesos equivale a " + result.toFixed(2) + " dólares.";
    } else {
      result = amount * exchangeRate;
      document.getElementById("result").innerHTML = amount + " dólares equivale a " + result.toFixed(2) + " pesos.";
    }
  });
