import React, { Component } from "react";
import axios from "axios";

import Loading from "../loading/Loading";

import "./cityDetail.css";

class CityDetail extends Component {
  constructor(props) {
    super();
    this.state = {
      cityDetail: null
    };
  }
  componentDidMount() {
    if (this.props.selectedCityList.length > 0) {
      let cityId = this.props.match.params.cityId;
      axios
        .get(
          process.env.REACT_APP_OPEN_WEATHER_API +
            "?id=" +
            cityId +
            "&APPID=" +
            process.env.REACT_APP_OPEN_WEATHER_KEY_ID
        )
        .then(res => {
          this.setState({ cityDetail: res.data });
        })
        .catch(error => {
          console.log(error);
        });
    } else this.props.history.push("/");
  }
  changeToCelsius = kelvinTemp => {
    return (kelvinTemp - 273.15).toFixed(2);
  };

  changeUnixToUTC = unix_timestamp => {
    let date = new Date(unix_timestamp * 1000);
    // Hours part from the timestamp
    let hours = date.getHours();
    // Minutes part from the timestamp
    let minutes = "0" + date.getMinutes();
    // Seconds part from the timestamp
    let seconds = "0" + date.getSeconds();

    // Will display time in 10:30:23 format
    let formattedTime =
      hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
    // console.log(formattedTime);
    return formattedTime;
  };
  render() {
    return (
      <div className="city-detail-container container-fluid pt-5 pb-5">
        <div className="detail-card-wrapper">
          <div className="detail-card city-detail">
            {this.state.cityDetail ? (
              <div className="row">
                <div className="col-12 col-sm-6">
                  <div className="weather-detail">
                    <div className="temp-detail pt-4">
                      <span className="temp-value">
                        {this.changeToCelsius(this.state.cityDetail.main.temp)}°
                      </span>
                      <br />
                      <span className="temp-type">
                        {this.state.cityDetail.weather[0].main}
                      </span>
                    </div>
                    <div className="insights-detail mt-5">
                      <div className="insight-item">
                        <div className="insight-logo pr-2">
                          <img
                            src={require("../../images/pressure.png")}
                            alt="pressure"
                            className="insight-logo-img"
                          />
                        </div>
                        <div className="insight-detail">
                          <div className="insight-title">
                            <span>Pressure</span>
                          </div>
                          <div className="insight-value pt-1">
                            <span>
                              {this.state.cityDetail.main.pressure} hPa
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="insight-item">
                        <div className="insight-logo pr-2">
                          <img
                            src={require("../../images/humidity.png")}
                            alt="humidity"
                            className="insight-logo-img"
                          />
                        </div>
                        <div className="insight-detail">
                          <div className="insight-title">
                            <span>Humidity</span>
                          </div>
                          <div className="insight-value pt-1">
                            <span>{this.state.cityDetail.main.humidity}%</span>
                          </div>
                        </div>
                      </div>
                      <div className="insight-item">
                        <div className="insight-logo pr-2">
                          <img
                            src={require("../../images/wind_speed.png")}
                            alt="wind speed"
                            className="insight-logo-img"
                          />
                        </div>
                        <div className="insight-detail">
                          <div className="insight-title">
                            <span>Wind Speed</span>
                          </div>
                          <div className="insight-value pt-1">
                            <span>{this.state.cityDetail.wind.speed} km/h</span>
                          </div>
                        </div>
                      </div>
                      <div className="insight-item">
                        <div className="insight-logo pr-2">
                          <img
                            src={require("../../images/visibility.png")}
                            alt="visibility"
                            className="insight-logo-img"
                          />
                        </div>
                        <div className="insight-detail">
                          <div className="insight-title">
                            <span>Visibility</span>
                          </div>
                          <div className="insight-value pt-1">
                            <span>{this.state.cityDetail.visibility} M</span>
                          </div>
                        </div>
                      </div>
                      <div className="insight-item">
                        <div className="insight-logo pr-2">
                          <img
                            src={require("../../images/sunrise.png")}
                            alt="sunrise"
                            className="insight-logo-img"
                          />
                        </div>
                        <div className="insight-detail">
                          <div className="insight-title">
                            <span>Sunrise</span>
                          </div>
                          <div className="insight-value pt-1">
                            <span>
                              {this.changeUnixToUTC(
                                this.state.cityDetail.sys.sunrise
                              )} UTC
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="insight-item">
                        <div className="insight-logo pr-2">
                          <img
                            src={require("../../images/sunset.png")}
                            alt="sunset"
                            className="insight-logo-img"
                          />
                        </div>
                        <div className="insight-detail">
                          <div className="insight-title">
                            <span>Sunset</span>
                          </div>
                          <div className="insight-value pt-1">
                            <span>
                              {this.changeUnixToUTC(
                                this.state.cityDetail.sys.sunset
                              )} UTC
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6">
                  <div className="city-name">
                    <div className="city-title">
                      <h2>{this.state.cityDetail.name}</h2>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Loading></Loading>
            )}
          </div>
          <div className="detail-card d-none"></div>
        </div>
      </div>
    );
  }
}

export default CityDetail;
