import React from "react";
import "./App.css";
import Info from "./components/info";
import Form from "./components/form";
import Meteo from "./components/meteoinfo";
import Header from "./components/header";
import Favorites from "./components/favorites";

const API_KEY = "b112ddc70c36cf4097cebbdba6258b8f";

class App extends React.Component {
  state = {
    city: undefined,
    country: undefined,
    temp: undefined,
    pressure: undefined,
    wind: undefined,
    humidity: undefined,
    error: undefined
  };

  gettingWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;

    if (city) {
      const api_url = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await api_url.json();
      let pressure = (data.main.pressure * 0.750062).toFixed();
      this.setState({
        city: data.name,
        country: data.sys.country,
        temp: data.main.temp,
        pressure: pressure,
        wind: data.wind.speed,
        humidity: data.main.humidity
      });
    } else if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const latitude = position.coords.latitude.toFixed(2);
        const longitude = position.coords.longitude.toFixed(2);

        let getWeather = () => {
          const xhr = new XMLHttpRequest();
          xhr.open(
            "GET",
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`,
            false
          );
          xhr.send();
          if (xhr.status === 200) return JSON.parse(xhr.responseText);
          else
            alert(`Load geolocation ERROR: ${xhr.status} : ${xhr.statusText}`);
        };

        const weatherByDefault = getWeather();

        this.setState({
          city: weatherByDefault.name,
          country: weatherByDefault.sys.country,
          temp: weatherByDefault.main.temp,
          pressure: weatherByDefault.main.pressure,
          wind: weatherByDefault.wind.speed,
          humidity: weatherByDefault.main.humidity
        });
      });
    } else {
      alert("Определение местоположения не поддерживается");
    }
  };

  render() {
    return (
      <div>
        <Header />
        <Info />
        <Form weatherMethod={this.gettingWeather} />
        <Meteo
          city={this.state.city}
          country={this.state.country}
          temp={this.state.temp}
          pressure={this.state.pressure}
          wind={this.state.wind}
          humidity={this.state.humidity}
        />
        <Favorites />
      </div>
    );
  }
}

export default App;
