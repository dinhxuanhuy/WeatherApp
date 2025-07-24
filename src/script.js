async function getWeatherData() {
    const city = document.querySelector('.input-field').value;
    const apikey = process.env.API_KEY;
    const url = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' + city + '?unitGroup=us&key=' + apikey + '&contentType=json';
    console.log(url);
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function extractWeatherInfo(data) {
    function DegreeTransform(degree) {
        let res = (degree - 32) / 1.8; 
        return Math.round(res * 10) / 10; // Round to one decimal place
    }
    const weatherInfo = {
        city: data.resolvedAddress,
        temperature: DegreeTransform(data.currentConditions.temp), // Convert Fahrenheit to Celsius
        description: data.description,
        date: data.currentConditions.datetime,
        windspeed: data.currentConditions.windspeed,
        humidity: data.currentConditions.humidity,
        icon : data.currentConditions.icon,
        condition : data.currentConditions.conditions,
    };
    
    return weatherInfo;
}
function ChangeImg(WeatehrDescription){
    let API_KEY = process.env.GIPHY_API_KEY; // Ensure you have set this environment variable
    // 'https://api.giphy.com/v1/gifs/translate?api_key=iUYQqniye6QkpJGUTraeyxYxUymr1Bnx&s=books'\
    let img = document.querySelector('.weather-icon');
    const url = 'https://api.giphy.com/v1/gifs/translate?api_key=' + API_KEY + '&s=' + WeatehrDescription;
    async function fetchGif() {
        try {
            const response = await fetch(url);
            const data = await response.json();
            return data.data.images.original.url;
        } catch (error) {
            console.error('Error fetching GIF:', error);
        }
    }
    fetchGif().then(gifUrl => {
        img.src = gifUrl;
    });
}
export { getWeatherData, extractWeatherInfo, ChangeImg };