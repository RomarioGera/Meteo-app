import React from "react";

class Meteo extends React.Component {
  render() {
    return (
      <div>
          {this.props.city &&   
        <div>      
        <p>Месторасположение: {this.props.city}, {this.props.country}</p>
        <p>Температура: {this.props.temp} С</p>
        <p>Давление: {this.props.pressure} мм рт.ст</p>
        <p>Скорость ветра: {this.props.wind} м/с</p>
        <p>Влажность: {this.props.humidity} %</p>
        </div>
        }

      </div>
    );
  }
}

export default Meteo;
