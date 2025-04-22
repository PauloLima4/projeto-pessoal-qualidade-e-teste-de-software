function converterTemperatura(valor, origem, destino) {
    origem = origem.toUpperCase();
    destino = destino.toUpperCase();

    if (origem === destino) return valor;

    let celsius;

    // Converter origem para Celsius
    switch (origem) {
        case 'C': celsius = valor; break;
        case 'F': celsius = (valor - 32) * 5/9; break;
        case 'K': celsius = valor - 273.15; break;
        default: throw new Error("Unidade de origem inválida");
    }

    // Converter Celsius para destino
    switch (destino) {
        case 'C': return celsius;
        case 'F': return (celsius * 9/5) + 32;
        case 'K': return celsius + 273.15;
        default: throw new Error("Unidade de destino inválida");
    }
}

// Compatível com Node.js e navegador
if (typeof module !== 'undefined') {
    module.exports = converterTemperatura;
} else {
    window.converterTemperatura = converterTemperatura;
}
