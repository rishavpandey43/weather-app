import React from "react";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";

import "./weatherCard.css";

function WeatherCard(props) {
  function changeToCelsius(kelvinTemp) {
    return (kelvinTemp - 273.15).toFixed(2);
  }

  return (
    <div className="weather-card-wrapper">
      {props.type === "display_city" ? (
        <Link to="/detail">
          <div className="display-city-card card ">
            <div className="card-heading">
              <h3>{props.cityDetail.name}</h3>
            </div>
            <div className="weather-type-img-wrapper">
              <img
                src={
                  "http://openweathermap.org/img/wn/" +
                  props.cityDetail.weather[0].icon +
                  "@2x.png"
                }
                alt={props.cityDetail.weather[0].main.toLowerCase()}
                className="weather-type-img"
              />
            </div>
            <div className="temp-detail-wrapper">
              <div className="temp-value">
                <span className="text font-weight-bold">
                  {changeToCelsius(props.cityDetail.main.temp)}°
                </span>
              </div>
              <div className="weather-type-name">
                <span className="text">{props.cityDetail.weather[0].main}</span>
              </div>
              <div className="temp-range-wrapper">
                <div className="row">
                  <div className="col-6 range-div min">
                    <div className="range">
                      <div className="before">
                        <FontAwesomeIcon
                          icon={faCaretDown}
                          className="fa-3x text-danger"
                        />
                      </div>
                      <span className="text">
                        {changeToCelsius(props.cityDetail.main.temp_min)}
                      </span>
                      <div className="after">
                        <span className="text-danger text">Min</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 range-div max">
                    <div className="range">
                      <div className="before">
                        <FontAwesomeIcon
                          icon={faCaretUp}
                          className="fa-3x text-success"
                        />
                      </div>
                      <span className="text">
                        {changeToCelsius(props.cityDetail.main.temp_max)}
                      </span>
                      <div className="after">
                        <span className="text-success text">Max</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ) : (
        <Link to="/add">
          <div className="add-city-card card">
            <div className="card-heading">
              <h3>Add City</h3>
            </div>
            <div className="add-button">
              <img
                src={require("../../images/add_city_img.png")}
                alt="Add City"
                className="add-btn-img"
              />
            </div>
            <div className="add-city-illustrator-div">
              <img
                src={require("../../images/city_illustrator.png")}
                alt="City"
                className="add-city-illustrator-img"
              />
            </div>
          </div>
        </Link>
      )}
    </div>
  );
}

export default WeatherCard;
