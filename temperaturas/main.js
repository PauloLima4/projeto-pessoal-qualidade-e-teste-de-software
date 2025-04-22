const readline = require('readline');
const converterTemperatura = require('./src/converterTemperatura');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("=== Conversor de Temperaturas ===");
rl.question('Digite o valor da temperatura: ', (valorInput) => {
    const valor = parseFloat(valorInput);

    rl.question('Digite a unidade de origem (C, F ou K): ', (origem) => {
        rl.question('Digite a unidade de destino (C, F ou K): ', (destino) => {
            const resultado = converterTemperatura(valor, origem, destino);
            console.log("\nResultado:", resultado);
            rl.close();
        });
    });
});
