const API_KEY = '29acafe14c99b0b09f2bae7f3c63c37f'

// 'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}'

const getFormattedWeatherData = async (city, units = 'metric') => {

    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`

    const getIconURL = (iconId) => `https://openweathermap.org/img/wn/${iconId}.png`

    const data = await fetch(URL)

        .then((res) => res.json())
        .then((data) => data);

    console.log(data)

    const {

        wind: {speed},

        main:  {temp, temp_max, temp_min, pressure, humidity, feels_like},

        name,

        sys: {country},

        weather,

    } = data

    const {description, icon} = weather[0]

    return {
        description,
        iconURL: getIconURL(icon),
        country,
        name,
        temp,
        temp_max,
        temp_min,
        pressure,
        humidity,
        feels_like,
        speed,
    }

}


export {getFormattedWeatherData};
