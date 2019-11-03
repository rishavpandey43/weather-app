import React, { Component } from "react";

import WeatherCard from "../weatherCard/weatherCard";

class Home extends Component {
  render() {
    return (
      <div className="mt-5">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-4">
            <WeatherCard type="display_city"></WeatherCard>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <WeatherCard type="display_city"></WeatherCard>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <WeatherCard type="add_city"></WeatherCard>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
