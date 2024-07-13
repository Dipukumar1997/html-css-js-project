// script.js

const apiKey = 'faf093546a3aea474d697af56cefa664'; // Replace with your OpenWeatherMap API key

// Function to convert temperature units using OpenWeatherMap API
const convert = async () => {
    const inputValue = document.getElementById('inputValue').value.trim();
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;

    if (!inputValue) {
        alert('Please enter a value to convert.');
        return;
    }

    try {
        // Fetch conversion data from OpenWeatherMap API
        const apiUrl = `https://api.openweathermap.org/data/2.5/convert?appid=${apiKey}&q=${inputValue}&units=${fromUnit}&to=${toUnit}`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Update result display
        const resultElement = document.getElementById('result');
        resultElement.textContent = `${inputValue} ${fromUnit} is ${data.value} ${toUnit}.`;

    } catch (error) {
        console.error('Error converting units:', error);
        alert('Failed to convert units. Please try again later.');
    }
};
