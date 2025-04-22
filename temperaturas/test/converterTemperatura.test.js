const converterTemperatura = require('../src/converterTemperatura');

describe("Conversão de temperaturas entre Celsius, Fahrenheit e Kelvin", () => {
    test("1. Fahrenheit para Celsius", () => {
        expect(converterTemperatura(212, "F", "C"))
            .toBe("212.00°F equivale a 100.00°C");
    });

    test("2. Celsius para Kelvin", () => {
        expect(converterTemperatura(0, "C", "K"))
            .toBe("0.00°C equivale a 273.15°K");
    });

    test("3. Kelvin para Fahrenheit", () => {
        expect(converterTemperatura(273.15, "K", "F"))
            .toBe("273.15°K equivale a 32.00°F");
    });

    test("4. Valor negativo em Kelvin", () => {
        expect(converterTemperatura(-1, "K", "C"))
            .toBe("Temperatura em Kelvin não pode ser negativa");
    });

    test("5. Valor menor que zero absoluto em Celsius", () => {
        expect(converterTemperatura(-274, "C", "F"))
            .toBe("Temperatura em Celsius não pode ser menor que -273.15°C");
    });

    test("6. Valor menor que zero absoluto em Fahrenheit", () => {
        expect(converterTemperatura(-500, "F", "K"))
            .toBe("Temperatura em Fahrenheit não pode ser menor que -459.67°F");
    });

    test("7. Entrada inválida (string)", () => {
        expect(converterTemperatura("quente", "C", "K"))
            .toBe("Entrada inválida. Por favor, informe um número");
    });

    test("8. Unidade de origem inválida", () => {
        expect(converterTemperatura(100, "X", "C"))
            .toBe("Unidade inválida. Use C, F ou K");
    });

    test("9. Unidade de destino inválida", () => {
        expect(converterTemperatura(100, "C", "Z"))
            .toBe("Unidade inválida. Use C, F ou K");
    });

    test("10. Conversão precisa com casas decimais", () => {
        expect(converterTemperatura(36.6, "C", "F"))
            .toBe("36.60°C equivale a 97.88°F");
    });
});
