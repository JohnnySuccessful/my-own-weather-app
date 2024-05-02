import React, {useEffect, useState} from "react";
import Yosemite from './pictures/Yosemite.jpg';
import DescriptionWidgets from "./components/DescriptionWidgets";
import {getFormattedWeatherData} from "./WeatherService";

function App() {

    const [city, setCity] = useState('Sacramento')
    const [weather, setWeather] = useState(null)
    const [units, setUnits] = useState('metric')

    useEffect(() => {

        const fetchWeatherData = async () => {
            const data = await getFormattedWeatherData(city, units)

            setWeather(data);

        }

        fetchWeatherData();

    }, [units, city]);

    const handleUnitClick = (e) => {

        const button = e.currentTarget;
        //slice
        const currentUnit = button.innerText.slice(1)

        const isCelsius = currentUnit === "C";

        button.innerText = isCelsius ? "°F" : "°C";
        setUnits(isCelsius ? "metric" : "imperial")

    }

    const enterKeyPressed = (e) => {
        if (e.keyCode === 13) {
            setCity(e.currentTarget.value)
        }
    }

    return (

        <div className="App" style={{backgroundImage: `url(${Yosemite})`}}>

            {/*<h1>Weather API</h1>*/}

            <div className="overlay">
                {
                    weather && (

                        <div className="container">

                            <div className="section section_input">

                                <input
                                    type="text"
                                    placeholder="Enter the City"
                                    onKeyDown={enterKeyPressed}
                                />

                                <button onClick={(e) => handleUnitClick(e)}>°F</button>

                            </div>

                            <div className="section section_temp">
                                <div className="icon">

                                    <h3>{`${weather.name}, ${weather.country}`}</h3>

                                    <img src={weather.iconURL}
                                         alt="wether Icon"
                                    />

                                    <h3>{weather.description}</h3>

                                </div>

                                <div className="temp">

                                    {`${weather.temp.toFixed()} °${
                                        units === 'metric' ? 'C' : 'F'
                                    }`}

                                </div>


                            </div>

                            {/*<h3 style={{color: "white"}}>description widgets are here</h3>*/}

                            <DescriptionWidgets
                            weather={weather}
                            units={units}
                            />

                        </div>

                    )}

            </div>

        </div>
    );
}

export default App;
