const canvas = document.getElementById('setCanvas');
const ctx = canvas.getContext('2d');
const voltageSlider = document.getElementById('voltage');
const temperatureSlider = document.getElementById('temperature');
const capacitanceSlider = document.getElementById('capacitance');
const voltageValue = document.getElementById('voltageValue');
const temperatureValue = document.getElementById('temperatureValue');
const capacitanceValue = document.getElementById('capacitanceValue');
const exportDataButton = document.getElementById('exportData');

canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;

// Initial parameters
let voltage = parseFloat(voltageSlider.value);
let temperature = parseFloat(temperatureSlider.value);
let capacitance = parseFloat(capacitanceSlider.value);

function drawSET() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#007BFF";
    ctx.font = "16px Arial";
    ctx.fillText(`Gate Voltage: ${voltage.toFixed(1)} V`, 20, 30);
    ctx.fillText(`Temperature: ${temperature.toFixed(0)} K`, 20, 60);
    ctx.fillText(`Capacitance: ${capacitance.toFixed(1)} fF`, 20, 90);

    // Simulate Coulomb blockade oscillations
    ctx.beginPath();
    ctx.moveTo(50, canvas.height / 2);
    for (let x = 50; x < canvas.width - 50; x++) {
        const oscillation = Math.sin((x + voltage * 50) / 100) * (100 / (temperature / 50));
        ctx.lineTo(x, canvas.height / 2 - oscillation);
    }
    ctx.strokeStyle = "#FF5722";
    ctx.lineWidth = 2;
    ctx.stroke();
}

function updateValues() {
    voltage = parseFloat(voltageSlider.value);
    temperature = parseFloat(temperatureSlider.value);
    capacitance = parseFloat(capacitanceSlider.value);

    voltageValue.textContent = `${voltage.toFixed(1)} V`;
    temperatureValue.textContent = `${temperature.toFixed(0)} K`;
    capacitanceValue.textContent = `${capacitance.toFixed(1)} fF`;
}

function exportData() {
    const data = {
        voltage: voltage.toFixed(1),
        temperature: temperature.toFixed(0),
        capacitance: capacitance.toFixed(1),
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'set_simulation_data.json';
    a.click();
    URL.revokeObjectURL(url);
}

// Event listeners
voltageSlider.addEventListener('input', () => {
    updateValues();
    drawSET();
});

temperatureSlider.addEventListener('input', () => {
    updateValues();
    drawSET();
});

capacitanceSlider.addEventListener('input', () => {
    updateValues();
    drawSET();
});

exportDataButton.addEventListener('click', exportData);

// Initial rendering
updateValues();
drawSET();
