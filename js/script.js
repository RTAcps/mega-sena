function sortearNumeros() {
  const numerosSorteados = new Set();
  while (numerosSorteados.size < 6) {
    const numeroAleatorio = Math.floor(Math.random() * 60) + 1;
    numerosSorteados.add(numeroAleatorio);
  }
  return Array.from(numerosSorteados).sort((a, b) => a - b);
}

document
  .getElementById("sortear-button")
  .addEventListener("click", function () {
    for (let i = 1; i <= 5; i++) {
      const numerosSorteados = sortearNumeros();
      const numerosSorteadosContainer = document.getElementById(
        `numeros-sorteados-${i}`
      );
      numerosSorteadosContainer.innerHTML = "";

      numerosSorteados.forEach((numero) => {
        const numeroElement = document.createElement("div");
        numeroElement.textContent = numero;
        numeroElement.classList.add("numero-bolinha");
        numerosSorteadosContainer.appendChild(numeroElement);
      });
    }
  });
