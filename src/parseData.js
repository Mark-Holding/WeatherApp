export default function parseWeatherData (data) {

    const forecast = {

        description: data.description,
        overview: data.currentConditions.conditions,
        temp: data.currentConditions.temp,
        icon: data.currentConditions.icon,

    };

    return { forecast };
}