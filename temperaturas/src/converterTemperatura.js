function converterTemperatura(valor, origem, destino) {
    if (typeof valor !== 'number' || isNaN(valor)) {
        return "Entrada inválida. Por favor, informe um número";
    }

    const unidades = ['C', 'F', 'K'];
    origem = origem.toUpperCase();
    destino = destino.toUpperCase();

    if (!unidades.includes(origem) || !unidades.includes(destino)) {
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

    if (origem === 'C') {
        celsius = valor;
    } else if (origem === 'F') {
        celsius = (valor - 32) * 5 / 9;
    } else if (origem === 'K') {
        celsius = valor - 273.15;
    }

    let resultado;

    if (destino === 'C') {
        resultado = celsius;
    } else if (destino === 'F') {
        resultado = (celsius * 9 / 5) + 32;
    } else if (destino === 'K') {
        resultado = celsius + 273.15;
    }

    return `${valor.toFixed(2)}°${origem} equivale a ${resultado.toFixed(2)}°${destino}`;
}

module.exports = converterTemperatura;
