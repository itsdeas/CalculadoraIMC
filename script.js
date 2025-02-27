const pesoInput = document.getElementById('peso');
const alturaInput = document.getElementById('altura');
const calcularButton = document.getElementById('calcular');
const resultadoDiv = document.getElementById('resultado');

calcularButton.addEventListener('click', () => {
    const peso = parseFloat(pesoInput.value);
    const altura = parseFloat(alturaInput.value);

    if (isNaN(peso) || isNaN(altura)) {
        resultadoDiv.textContent = 'Por favor, insira valores válidos.';
        return;
    }

    const imc = peso / (altura * altura);
    let classificacao = '';

    if (imc < 18.5) {
        classificacao = 'Atencao! Abaixo do peso! Comece comendo um McDoland's';
    } else if (imc < 25) {
        classificacao = 'Eba! tudo ok. Peso normal! Gostoso';
    } else if (imc < 30) {
        classificacao = 'Atencão! voce está em Sobrepeso, caralho';
    } else {
        classificacao = 'PQP mas tu ta bem grande hein, chama: Obesidade!! fecha a boca porra';
    }

    resultadoDiv.textContent = `Seu IMC é: ${imc.toFixed(2)}. Classificação: ${classificacao}`;
});
