// // consturl = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai';


// // const options =async()=>{
// //     try {
// //         const response = await fetch(url, options);
// //         const result = await response.text();
// //         console.log(result);
// //     } catch (error) {
// //         console.error(error);
// //     }
// // }

// // options();
// // const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
// const url = "http://api.weatherapi.com/v1/current.json?key=70f4b5bd09ec426eae7170816241207&q=London&aqi=no"
// // const options = {
// // 	method: 'GET',
// // 	headers: {
// // 		'x-rapidapi-key': '8112ada063msheb0a705edbd45a6p1a8642jsn451ee802cec6',
// // 		'x-rapidapi-host': 'weather-by-api-ninjas.p.rapidapi.com'
// // 	}
// // };

// async function fetchWeather() {
// 	try {
// 		const response = await fetch(url, options);
// 		const result = await response.text();
// 		console.log(result);
// 	} catch (error) {
// 		console.error('Error:', error);
// 	}
// }

// fetchWeather();

// const url = 'https://open-weather13.p.rapidapi.com/city/landon/EN';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': '8112ada063msheb0a705edbd45a6p1a8642jsn451ee802cec6',
// 		'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

// script.js

// Function to fetch weather data from WeatherAPI.com
const fetchWeather = async (city) => {
    const apiKey = 'd1f852f15abb4660b3f120929241307';
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    try {
        let response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        let data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        return null;
    }
};

// Function to update HTML elements with weather data
const updateWeather = (data) => {
    if (!data) return;

    // Update city name
    const cityElement = document.querySelector('.city');
    if (cityElement) {
        cityElement.textContent = data.location.name;
    }

    // Update temperature
    const tempElement = document.querySelector('.temp');
    if (tempElement) {
        tempElement.textContent = `${data.current.temp_c} °C`;
    }

    // Update humidity
    const humidityElement = document.querySelector('.humidity');
    if (humidityElement) {
        humidityElement.textContent = `${data.current.humidity}%`;
    }

    // Update wind speed
    const windElement = document.querySelector('.wind');
    if (windElement) {
        windElement.textContent = `${data.current.wind_kph} km/hr`;
    }

    // Update weather icon (optional)
    // Replace 'weather-icon' class with the appropriate class from your HTML
    // Example: const weatherIcon = document.querySelector('.weather-icon');
    // weatherIcon.src = data.current.condition.icon;
};

// Function to handle search button click
const searchWeather = async () => {
    const cityInput = document.getElementById('city');
    const city = cityInput.value.trim();

    if (city) {
        const weatherData = await fetchWeather(city);
        updateWeather(weatherData);
    } else {
        alert('Please enter a city name!');
    }
};

// Event listener for search button click
document.querySelector('button').addEventListener('click', searchWeather);
