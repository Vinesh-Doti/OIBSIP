document.getElementById('convert').addEventListener('click', function () {
    const tempInput = document.getElementById('temperature').value;
    const unit = document.getElementById('unit').value;
    const resultDiv = document.getElementById('result');

    // Validate input
    if (isNaN(tempInput) || tempInput.trim() === "") {
        resultDiv.textContent = "Please enter a valid number!";
        resultDiv.style.color = "red";
        return;
    }

    const temperature = parseFloat(tempInput);
    let convertedTemp = "";
    let message = "";

    // Perform conversion based on the selected unit
    switch (unit) {
        case "celsius":
            const fahrenheit = (temperature * 9 / 5) + 32;
            const kelvin = temperature + 273.15;
            message = `${temperature}°C = ${fahrenheit.toFixed(2)}°F and ${kelvin.toFixed(2)}K`;
            break;
        case "fahrenheit":
            const celsiusFromF = (temperature - 32) * 5 / 9;
            const kelvinFromF = celsiusFromF + 273.15;
            message = `${temperature}°F = ${celsiusFromF.toFixed(2)}°C and ${kelvinFromF.toFixed(2)}K`;
            break;
        case "kelvin":
            const celsiusFromK = temperature - 273.15;
            const fahrenheitFromK = (celsiusFromK * 9 / 5) + 32;
            message = `${temperature}K = ${celsiusFromK.toFixed(2)}°C and ${fahrenheitFromK.toFixed(2)}°F`;
            break;
    }

    // Display the result
    resultDiv.textContent = message;
    resultDiv.style.color = "black";
});
