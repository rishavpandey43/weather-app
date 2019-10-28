import React from 'react';
import { Link } from "react-router-dom";
import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header/header";
import Sidebar from "./components/Sidebar/sidebar";

import Routes from "./Routes";

function App(props) {
  return (
    <div className="main-app">
      <Header {...props}></Header>
      <Routes {...props}></Routes>
    </div>
  );
}

export default App;
