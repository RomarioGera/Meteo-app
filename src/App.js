import React from "react";
import './App.css';
import Info from "./components/info";
import Form from "./components/form";
import Meteo from "./components/meteoinfo";
import Header from "./components/header";
import Favorites from "./components/favorites";

const API_KEY = 'b112ddc70c36cf4097cebbdba6258b8f';

class App extends React.Component {

    gettingInfo = async () => {
        const apiUrl = await fetch(`https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_KEY}&units=metric`);
        const data = await apiUrl.json();
        console.log(data);
    }

    render() {
        return ( < div className = "App" >
            <Header />
            <Info />
            <Form />
            <Meteo />
            <Favorites />
            </div>
        )
    }
}

export default App;