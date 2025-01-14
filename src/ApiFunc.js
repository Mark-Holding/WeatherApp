

async function fetchWeatherData(location, apiKey) {
    const baseUrl = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline";
    const url = `${baseUrl}/${location}?key=${apiKey}`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        console.log("Weather Data:", data);
        return data;
    } catch (error) {
        console.error("Error fetching weather data:", error.message);
        return null; // Optional: Return null or handle the error as needed
    }


}