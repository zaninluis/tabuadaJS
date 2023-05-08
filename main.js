function tabuada() {
    const numero = document.getElementById("numero").value;
    let resultadoTabuada = document.getElementById("resultado");
    if (numero < 1||numero > 10){
        alert ("O número que você digitou é maior que 10, digite apenas números menores ou igual a 10!");
        return
    }
    let resultadoHTML = "";
    for (let i = 1; i <= 10; i++) {
      let resultado = numero * i;
      resultadoHTML += `${numero} x ${i} = ${resultado}<br>`;
    }
    resultadoTabuada.innerHTML = resultadoHTML;
  }