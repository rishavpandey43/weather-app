import React, { Component } from "react";
import axios from "axios";

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
    let _this = this;
    this.props.selectedCityList.map((city, i) => {
      axios
        .get(
          process.env.REACT_APP_OPEN_WEATHER_API +
            "?id=" +
            city.id +
            "&APPID=" +
            process.env.REACT_APP_OPEN_WEATHER_KEY_ID
        )
        .then(res => {
          let tempCitiesWeatherDetail = _this.state.citiesWeatherDetail;
          tempCitiesWeatherDetail.push(res.data);
          _this.setState({ citiesWeatherDetail: tempCitiesWeatherDetail });
        })
        .catch(error => {
          console.log(error);
        });
      return 0;
    });
  }

  render() {
    let weatherCardList = [];
    if (this.state.citiesWeatherDetail.length > 0) {
      weatherCardList = this.state.citiesWeatherDetail.map((city, i) => (
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
