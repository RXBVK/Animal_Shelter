import React from "react";
let longitude = 16.997556;
let latitude = 51.153165;
let api_key = '123';
const proxy = "https://cors-anywhere.herokuapp.com/";
class Weather extends React.Component {
    state = {
        summary: "",
        temperature: "",
        precipProbability: "",
        pressure: ""
    }
    getWeather = async () => {
        const api = await fetch(`${proxy}https://api.darksky.net/forecast/${api_key}/${latitude},${longitude},${this.props.arrival}T12:00:00?lang=pl&units=si`);
        const data = await api.json();
        console.log(data);
        this.setState({
            summary: data.currently.summary,
            temperature: data.currently.temperature,
            precipProbability: data.currently.precipProbability * 100,
            pressure: data.currently.pressure
        })
    }
    render() {
        return (
            <div className="weather-info">
                <h3>Pogoda w dniu przyjazdu: </h3>
                <p>Stan ogólny: {this.state.summary}</p>
                <p>Temperatura: {this.state.temperature}&deg;C</p>
                <p>Szansa na opady: {this.state.precipProbability}%</p>
                <p>Ciśnienie: {this.state.pressure} hPa</p>
                <i className="fas fa-cloud-sun"></i>
            </div>
        )
    }
}
export default Weather