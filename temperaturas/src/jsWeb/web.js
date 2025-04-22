function converter() {
    const valor = parseFloat(document.getElementById('valor').value);
    const origem = document.getElementById('de').value;
    const destino = document.getElementById('para').value;

    try {
        const resultado = converterTemperatura(valor, origem, destino);
        document.getElementById('resultado').innerText = `Resultado: ${resultado.toFixed(2)}`;
    } catch (err) {
        document.getElementById('resultado').innerText = `Erro: ${err.message}`;
    }
}
window.converter = converter;
