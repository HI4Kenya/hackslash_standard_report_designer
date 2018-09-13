import React, { Component } from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import Routes from "./Routes";

// const Report = () => {
//     return (

//           <Link to="/components/report"><button>Show the List</button></Link>

//     )
//   }
//   const Dashboard = () => {
//     return (

//           <Link to="/components/dashboard"><button>Show the List</button></Link>

//     )
//   }

//   const App= () => {
//     return (

//         <Link to="/components/app"><button>Back Home</button></Link>

//     )
//   }

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
