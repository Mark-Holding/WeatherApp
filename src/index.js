import './styles.css'

window.onload = () => {

    const apiKey = "XVBGVXQX79W5SUXMLR8Y2YQQ6"
    const location = "London";

    fetchWeatherData(location, apiKey).then((data) => {
        if (data) {
            console.log(data);
        } else {
            console.log("No data returned")
        }
    });

};


  