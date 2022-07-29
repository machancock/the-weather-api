import React, { Component } from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = process.env.REACT_APP_API_KEY;

class App extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=imperial`);
    const data = await api_call.json();

    if (city && country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "not sure what you're looking for..."
      });
    }
  }

  render() {
    const {temperature, humidity, city, country, description, error} = this.state
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-6 title-container">
                  <Titles />
                </div>
                <section className="col-6 form-container">
                  <Form getWeather={this.getWeather} />
                  <Weather 
                    temperature={temperature} 
                    humidity={humidity}
                    city={city}
                    country={country}
                    description={description}
                    error={error}
                  />
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};


export default App;