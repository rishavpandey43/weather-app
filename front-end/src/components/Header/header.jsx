import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import "./header.css";

class Header extends Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-lg">
          <div className="row w-100">
            <div className="col-4">
              <div className="nav-wrapper text-left">
                <div className="sidebar-toggle cursor-pointer">
                  <FontAwesomeIcon icon={faBars} className="size-2x" />
                </div>
                <div className="logo-wrapper pl-4 pr-4">
                  <div className="logo-img">
                    <img
                      src={require("../../images/weather_app_logo.png")}
                      alt="logo"
                      width="40px"
                      height="40px"
                    />
                  </div>
                  <div className="logo-brand pl-2 pr-2">
                    <span className="navbar-brand">Weather Forecaster</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="header-heading text-center">
                <h3>Today</h3>
              </div>
            </div>
            <div className="col-4">
              <div className="mode-toggle-wrapper">
                <span className="toggle-text">Light</span>
                <label className="switch">
                  <input
                    type="checkbox"
                  />
                  <span
                    className="slider round"
                  />
                </label>
                <span className="toggle-text">Dark</span>
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
