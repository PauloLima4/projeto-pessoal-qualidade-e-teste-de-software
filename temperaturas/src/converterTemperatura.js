function converterTemperatura(valor, de, para) {
    if (typeof valor !== "number") {
        return "Entrada inválida. Por favor, informe um número";
    }

    const unidades = ['C', 'F', 'K'];
    if (!unidades.includes(de) || !unidades.includes(para)) {
        return "Unidade inválida. Use C, F ou K";
    }

    // Verificar limites físicos
    if (de === 'K' && valor < 0) {
        return "Temperatura em Kelvin não pode ser negativa";
    }
    if (de === 'C' && valor < -273.15) {
        return "Temperatura em Celsius não pode ser menor que -273.15°C";
    }
    if (de === 'F' && valor < -459.67) {
        return "Temperatura em Fahrenheit não pode ser menor que -459.67°F";
    }

    let celsius;

    // Conversão para Celsius primeiro
    switch (de) {
        case 'C': celsius = valor; break;
        case 'F': celsius = (valor - 32) * 5 / 9; break;
        case 'K': celsius = valor - 273.15; break;
    }

    let resultado;

    // Converter de Celsius para unidade final
    switch (para) {
        case 'C': resultado = celsius; break;
        case 'F': resultado = (celsius * 9 / 5) + 32; break;
        case 'K': resultado = celsius + 273.15; break;
    }

    return `${valor.toFixed(2)}°${de} equivale a ${resultado.toFixed(2)}°${para}`;
}

module.exports = converterTemperatura;
