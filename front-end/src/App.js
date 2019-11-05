import React from 'react';
import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header/header";

import Routes from "./Routes";

function App(props) {
  return (
    <div className="main-app">
      <Header {...props}></Header>
      <div className="main_container"><Routes {...props}></Routes></div>
    </div>
  );
}

export default App;
