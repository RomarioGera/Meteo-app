import React from "react";
import './App.css';

const API_KEY = 'b112ddc70c36cf4097cebbdba6258b8f';
class App extends React.Component {

    gettingInfo = async () => {
        const apiUrl = await fetch(`https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_KEY}&units=metric`);
        const data = await apiUrl.json();
        console.log(data);
    }

    render() {
        return ( <div className = "App" >

            </div>
        )
    }
}

export default App;