import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faExclamationTriangle
} from "@fortawesome/free-solid-svg-icons";

import "./addCity.css";

class AddCity extends Component {
  constructor(props) {
    super();
    this.state = {
      displaySearchList: false
    }
  }


  render() {
    return (
      <div className="add-city-container mt-4">
        <div className="add-city-card-wrapper">
          <div className="add-city-sec">
            <div className="search-heading mt-4 mb-3">
              <h2>Search City</h2>
            </div>
            <div className="search-sec-wrapper">
              <form>
                <div className="search-input-wrapper">
                  <div className="input-box">
                    <input
                      type="text"
                      placeholder="Enter city name"
                      className="search-input"
                    />
                  </div>
                  <div className="search-btn">
                    <button className="btn" type="submit">
                      <FontAwesomeIcon
                        icon={faSearch}
                        className="text-white fa-2x"
                      />
                    </button>
                  </div>
                </div>
              </form>
              <div className="search-list-wrapper d-none">
                <ul className="search-list">
                  <li className="search-item">Agra</li>
                  <li className="search-item">Agra</li>
                  <li className="search-item">Agra</li>
                  <li className="search-item">Agra</li>
                  <li className="search-item warning">
                    no result found
                    <FontAwesomeIcon
                      icon={faExclamationTriangle}
                      className="text-secondary"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="fav-city-sec d-none">
            <div className="fav-city-heading mt-4 mb-3">
              <h2>City of the Month</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default AddCity;
