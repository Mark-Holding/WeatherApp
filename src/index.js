import './styles.css'
import fetchWeatherData from './ApiFunc';
import parseWeatherData from './parseData';

window.onload = () => {

    const apiKey = "XVBGVXQX79W5SUXMLR8Y2YQQ6"
    


    document.getElementById('weather-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const location = document.getElementById('location').value;
        
        fetchWeatherData(location, apiKey).then((data) => {
            if (data) {
                const parsedData = parseWeatherData(data);
                console.log("Parsed Weather Data:", parsedData);
            } else {
                console.log("No data returned")
            }
        });
    } )

};


  