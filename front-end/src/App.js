import React, {Component} from 'react';
import axios from "axios";


import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header/header";
import Routes from "./Routes";
import './App.css';

const data = require("./cityList/cityList.json")
class App extends Component {
  componentDidMount() {
    const _this = this;
    // axios
    //   .get(
    //     "https://raw.githubusercontent.com/rishavpandey43/weather-app/master/front-end/src/cityList/cityList.json"
    //   )
    //   .then(res => {
    //     _this.props.saveCityList(
    //       res.data.sort((a, b) => {
    //         let aName = a.name.toUpperCase();
    //         let bName = b.name.toUpperCase();
    //         if (
    //           aName !== "" &&
    //           aName !== "-" &&
    //           aName.search("'") === -1 &&
    //           aName.search("\\(") === -1 &&
    //           aName.search("6") === -1
    //         ) {
    //           if (aName < bName) {
    //             return -1;
    //           }
    //           if (aName > bName) {
    //             return 1;
    //           }
    //           return 0;
    //         }
    //         return 0;
    //       })
    //     );
    //   });
    _this.props.saveCityList(
      data.sort((a, b) => {
        let aName = a.name.toUpperCase();
        let bName = b.name.toUpperCase();
        if (
          aName !== "" &&
          aName !== "-" &&
          aName.search("'") === -1 &&
          aName.search("\\(") === -1 &&
          aName.search("6") === -1
        ) {
          if (aName < bName) {
            return -1;
          }
          if (aName > bName) {
            return 1;
          }
          return 0;
        }
        return 0;
      })
    );
  }
  render() {
    return (
      <div className="main-app">
        <Header {...this.props}></Header>
        <div className="main_container">
          <Routes {...this.props}></Routes>
        </div>
      </div>
    );
  }
}


export default App;
