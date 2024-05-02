import React from 'react';
import './descriptionWidgets.css'
import {FaArrowDown, FaArrowUp} from "react-icons/fa";

const DescriptionWidgets = ({weather, units}) => {

    const speedUnit = units === 'metric' ? 'm/s' : 'm/h'
    const tempUnit = units === 'metric' ? '°C' : '°F'

    const cards = [

        {
            id: 1,
            icon: <FaArrowUp />,
            title: "max",
            data: weather.temp_max.toFixed(),
            unit: tempUnit,
        },

        {
            id: 2,
            icon: <FaArrowDown />,
            title: "min",
            data: weather.temp_min.toFixed(),
            unit: tempUnit,
        },

        {
            id: 3,
            title: "pressure",
            data: weather.pressure,
            unit: "hPa"
        },

        {
            id: 4,
            title: "humidity",
            data: weather.humidity,
            unit: "%"
        },

        {
            id: 5,
            title: "speed",
            data: weather.speed,
            unit: speedUnit,
        },

        {
            id: 6,
            title: "feels like",
            data: weather.feels_like.toFixed(),
            unit: tempUnit,
        },

    ]

    return (
        <div className="section section_descriptionWidgets">

            {/*todo начало карточки одного виджета*/}


            {
                cards.map(({id, title, data, unit, icon}) => (

                <div key={id} className="card">

                    {/*иконки стрелок, давления, влажность и тд*/}

                    <div className="description_card_item">

                        {icon}

                        <h5>{title}</h5>

                    </div>

                    <h4>{`${data} ${unit}`}</h4>

                </div>

            ))}


            {/*todo конец карточки одного виджета*/}

        </div>
    );
};

export default DescriptionWidgets;