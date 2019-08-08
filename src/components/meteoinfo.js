import React from "react";

const Meteo = props =>  
    <div>
        {props.city &&   
        <div>      
        <p>Месторасположение: {props.city}, {props.country}</p>
        <p>Температура: {props.temp} С</p>
        <p>Давление: {props.pressure} мм рт.ст</p>
        <p>Скорость ветра: {props.wind} м/с</p>
        <p>Влажность: {props.humidity} %</p>
        </div>
    }
    </div>;

export default Meteo;
