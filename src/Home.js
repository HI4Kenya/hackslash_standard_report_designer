import React, { Component } from "react";
import {BrowserRouter as Router} from "react-router-dom";
import Routes from "./Routes";
class Home extends Component {
  render() {
    return (
      <Router>
        <Routes />
      </Router>
    );
  }
}
export default Home;
