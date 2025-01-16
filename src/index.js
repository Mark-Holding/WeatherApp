import './styles.css'
import fetchWeatherData from './ApiFunc';
import parseWeatherData from './parseData';

// Dynamically load all icons
const icons = require.context('./assets/images', false, /\.(png|jpe?g|svg)$/);

window.onload = () => {

    const apiKey = "XVBGVXQX79W5SUXMLR8Y2YQQ6"
    


    document.getElementById('weather-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const location = document.getElementById('location').value;
        const weatherIcon = document.querySelector('.weatherIcon');
        const temperature = document.querySelector('.temperature');
        const overview = document.querySelector('.overview');
        const description = document.querySelector('.description');

        fetchWeatherData(location, apiKey).then((data) => {
            if (data) {
                const parsedData = parseWeatherData(data);
                const iconPath = icons(`./${parsedData.forecast.icon}.png`);
                const temperatureValue = parsedData.forecast.temp;
                const overviewValue = parsedData.forecast.overview;
                const descriptionValue = parsedData.forecast.description;

                // Dynamically resolve the icon using `icons`
                try {
                    
                    weatherIcon.src = iconPath;
                    temperature.textContent = `${temperatureValue} °F`;
                    overview.textContent = overviewValue;
                    description.textContent = descriptionValue;
                } catch (error) {
                    console.error("Icon not found:", error);
                    weatherIcon.src = './assets/images/clear-day.png'; // Fallback to a default icon
                }

                console.log("Parsed Weather Data:", parsedData);

            } else {
                console.log("No data returned")
            }
        });
    } )

};


  