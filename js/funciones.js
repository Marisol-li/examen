function mostrarInputs() {
    const figura = document.getElementById('figura').value;
    const inputsDiv = document.getElementById('inputs');
    inputsDiv.innerHTML = '';

    if (figura === 'cuadrado') {
        inputsDiv.innerHTML = `
            <img src="cua.png" alt="Cuadrado" class="imagen-figura">
            <label for="lado">Lado:</label>
            <input type="number" id="lado" placeholder="Lado">
        `;
    } else if (figura === 'triangulo') {
        inputsDiv.innerHTML = `
            <img src="triangulo.jpeg" alt="Triángulo" class="imagen-figura">
            <label for="base">Base:</label>
            <input type="number" id="base" placeholder="Base">
            <label for="altura">Altura:</label>
            <input type="number" id="altura" placeholder="Altura">
        `;
    } else if (figura === 'circulo') {
        inputsDiv.innerHTML = `
            <img src="circu.png" alt="Círculo" class="imagen-figura">
            <label for="radio">Radio:</label>
            <input type="number" id="radio" placeholder="Radio">
        `;
    }
}

function calcularArea() {
    const figura = document.getElementById('figura').value;
    let area = 0;

    if (figura === 'cuadrado') {
        const lado = document.getElementById('lado').value;
        area = lado * lado;
    } else if (figura === 'triangulo') {
        const base = document.getElementById('base').value;
        const altura = document.getElementById('altura').value;
        area = (base * altura) / 2;
    } else if (figura === 'circulo') {
        const radio = document.getElementById('radio').value;
        area = Math.PI * radio * radio;
    }

    document.getElementById('resultado').innerText = `El área es: ${area}`;
}
