import React, { Component } from "react";

import "./home.css";

import WeatherCard from "../weatherCard/weatherCard";

class Home extends Component {
  constructor(props) {
    super();
    this.state = {
      selectedCityList: [],
      citiesWeatherDetail: []
    };
  }
  componentDidMount() {
    // let citiesWeatherDetail = this.props.selectedCityList.map((city, i) => {});
    let cityDemo = {
      coord: {
        lat: 39.156479,
        lon: -9.32206
      },
      country: "PT",
      id: 8012562,
      name: "A Dos Cunhados"
    };
    // "api.openweathermap.org/data/2.5/weather?id=2172797";
    // this.setState({ selectedCityList: this.props.selectedCityList });
  }
  render() {
    let weatherCardList = [];
    if (this.state.selectedCityList.length > 0) {
      weatherCardList = this.state.selectedCityList.map((city, i) => (
        <div className="col-12 col-sm-6 col-md-4 mt-3 mb-3" key={i}>
          <WeatherCard type="display_city" cityDetail={city}></WeatherCard>
        </div>
      ));
    }
    return (
      <div className="home-container container-fluid mt-5">
        <div className="row">
          {weatherCardList}
          <div className="col-12 col-sm-6 col-md-4 mt-3 mb-3">
            <WeatherCard type="add_city"></WeatherCard>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
