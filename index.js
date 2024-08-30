const prompt = require("prompt-sync");
const entrada = prompt();

var numero = entrada("Digite um número para somar");

var soma = 0;

while (numero != 0) {
  soma += parseInt(numero);
  numero = entrada("Digite um novo valor:");
}

console.log(`A soma é: ${soma}`);

