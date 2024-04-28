import React, {useState} from "react";
import Yosemite from './pictures/Yosemite.jpg';

function App() {

    const [city, setCity] = useState('Sacramento')
    const [weather, setWeather] = useState(null)
    const [units, setUnits] = useState('metric')


    return (

        <div className="App" style={{backgroundImage: `url(${Yosemite})`}}>

            <h1 style={{ color: "white" }}>Weather App</h1>

            <div className="overlay">


                <div className="container">

                    <div className="section section_input">

                        <input
                            type="text"
                            placeholder="Enter the City"

                        />

                        <button>Search</button>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default App;
