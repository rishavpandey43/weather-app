import React, { Component } from "react";
import axios from "axios";

import Loading from "../loading/Loading";

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
      cityList: null,
      displaySearch: false,
      displayCityList: [],
      searchInput: null,
      city404Error: false
    };
  }
  componentWillReceiveProps(prevProps) {
    this.setState({
      cityList: prevProps.mainCityList,
      displayCityList: this.save5CityList(prevProps.mainCityList)
    });
  }

  componentDidMount() {
    if (this.props.mainCityList) {
      this.setState({
        cityList: this.props.mainCityList,
        displayCityList: this.save5CityList(this.props.mainCityList)
      });
    }
  }

  toggleSearchDisplay = target => {
    this.setState({ displaySearch: target });
  };

  filterCityList = cityName => {
    let filterList = [];
    if (this.state.cityList) {
      this.state.cityList.map((city, i) => {
        if (city.name.toUpperCase().search(cityName.toUpperCase()) !== -1) {
          filterList.push(city);
        }
        return 0;
      });
    }
    return filterList;
  };

  save5CityList = cityList => {
    let tempList = [];
    if (cityList.length > 5) {
      for (let i = 0; i < 5; i++) {
        tempList.push(cityList[i]);
      }
    } else
      for (let i = 0; i < cityList.length; i++) {
        tempList.push(cityList[i]);
      }
    if (tempList.length === 0) {
      this.setState({ city404Error: true });
    } else if (tempList.length !== 0) {
      this.setState({ city404Error: false });
    }
    return tempList;
  };

  handleSearchInputChange = e => {
    this.setState({ searchInput: e.target.value });
  };

  handleSearchSubmit = e => {
    e.preventDefault();
    if (this.state.searchInput) {
      this.setState({
        displayCityList: this.save5CityList(
          this.filterCityList(this.state.searchInput)
        )
      });
    }
  };

  render() {
    let displayCityList = [];
    if (this.state.displayCityList.length > 0) {
      displayCityList = this.state.displayCityList.map((city, i) => (
        <li className="search-item" key={i}>
          {city.name}
        </li>
      ));
    }
    return (
      <div className="add-city-container container-fluid mt-4">
        <div className="add-city-card-wrapper">
          <div className="add-city-sec">
            <div className="search-heading mt-4 mb-3">
              <h2>Search City</h2>
            </div>
            <div className="search-sec-wrapper">
              <form onSubmit={this.handleSearchSubmit.bind(null)}>
                <div className="search-input-wrapper">
                  <div className="input-box">
                    <input
                      type="text"
                      placeholder="Enter city name"
                      className="search-input"
                      onChange={this.handleSearchInputChange.bind(null)}
                      onFocus={this.toggleSearchDisplay.bind(null, true)}
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
              <div
                className={
                  this.state.displaySearch
                    ? "search-list-wrapper"
                    : "search-list-wrapper d-none"
                }
              >
                <ul className="search-list">
                  {displayCityList.length === 0 && !this.state.city404Error ? (
                    <Loading />
                  ) : (
                    displayCityList
                  )}
                  {this.state.city404Error ? (
                    <li className="search-item warning">
                      no result found
                      <FontAwesomeIcon
                        icon={faExclamationTriangle}
                        className="text-secondary"
                      />
                    </li>
                  ) : (
                    ""
                  )}
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
