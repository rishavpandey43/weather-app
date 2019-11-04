import React from "react";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";

import "./weatherCard.css";

// const url = "https://raw.githubusercontent.com/rishavpandey43/weather-app/master/front-end/src/cityList/cityList.json";

function WeatherCard(props) {
  return (
    <div className="weather-card-wrapper">
      {props.type === "display_city" ? (
        <Link to="/detail">
          <div className="display-city-card card ">
            <div className="card-heading">
              <h3>New Delhi</h3>
            </div>
            <div className="weather-type-img-wrapper">
              <img
                src={require("../../images/sunny.png")}
                alt="sunny"
                className="weather-type-img"
              />
            </div>
            <div className="temp-detail-wrapper">
              <div className="temp-value">
                <span className="text font-weight-bold">31°</span>
              </div>
              <div className="weather-type-name">
                <span className="text">Sunny</span>
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
                      <span className="text">28</span>
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
                      <span className="text">32</span>
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
            <div className="illustrator-div">
              <img
                src={require("../../images/city_illustrator.png")}
                alt="City"
                width="100%"
                height="180px"
              />
            </div>
          </div>
        </Link>
      )}
    </div>
  );
}

export default WeatherCard;
