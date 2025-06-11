function converterTemperatura(valor, origem, destino) {
    valor = parseFloat(valor); 

    if (typeof valor !== 'number' || isNaN(valor)) {
        return "Entrada inválida. Por favor, informe um número";
    }

    origem = origem.toUpperCase();
    destino = destino.toUpperCase();

    const unidadesValidas = ['C', 'F', 'K'];
    if (!unidadesValidas.includes(origem) || !unidadesValidas.includes(destino)) {
        return "Unidade inválida. Use C, F ou K";
    }

    if (origem === 'K' && valor < 0) {
        return "Temperatura em Kelvin não pode ser negativa";
    }
    if (origem === 'C' && valor < -273.15) {
        return "Temperatura em Celsius não pode ser menor que -273.15°C";
    }
    if (origem === 'F' && valor < -459.67) {
        return "Temperatura em Fahrenheit não pode ser menor que -459.67°F";
    }

    let celsius;
    switch (origem) {
        case 'C': celsius = valor; break;
        case 'F': celsius = (valor - 32) * 5/9; break;
        case 'K': celsius = valor - 273.15; break;
    }

    let convertido;
    switch (destino) {
        case 'C': convertido = celsius; break;
        case 'F': convertido = (celsius * 9/5) + 32; break;
        case 'K': convertido = celsius + 273.15; break;
    }

    const unidades = {
        C: "°C",
        F: "°F",
        K: "K"
    };

    return `${valor.toFixed(2)}${unidades[origem]} equivale a ${convertido.toFixed(2)}${unidades[destino]}`;
}

if (typeof module !== 'undefined') {
    module.exports = converterTemperatura;
} else {
    window.converterTemperatura = converterTemperatura;
}
