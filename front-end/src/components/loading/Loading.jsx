import React, { Component } from "react";

import "./loading.css";

class Loading extends Component {
  render() {
    return (
      <div className="loader-wrapper">
        <div className="ripple-loader">
          <img src={require("../../images/loader.gif")} alt=""/>
        </div>
      </div>
    );
  }
}

export default Loading;
