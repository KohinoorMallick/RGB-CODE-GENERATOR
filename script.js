document.getElementById('generate-btn').addEventListener('click', generateColor);

function generateColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const rgbColor = `rgb(${r}, ${g}, ${b})`;

    document.getElementById('color-box').style.backgroundColor = rgbColor;
    document.getElementById('rgb-value').textContent = rgbColor;
}
