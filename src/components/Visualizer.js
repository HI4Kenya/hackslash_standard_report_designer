import React, { Component } from "react";
import Header from "./ui/Header";
import Charts from 'react-charts';
import { ListGroup, ListGroupItem } from "reactstrap";
//import ReactDOM from "react-dom";
//import { Link } from 'react-router';
import {
  BrowserRouter as Router,
  NavLink,
  Link,
  Redirect,
  Switch,
  Route
} from "react-router-dom";
//import { Redirect } from 'react-router-dom'
//import App from "./App";
//import Report from "./components/Report";

import {
  Card,
  Button, 
  CardHeader, 
  CardText  
} from "reactstrap";


// <Router>
//   <Route path="/components/report" component={Report} />
// </Router>
class Visualizer extends Component {
  // state = {
  //   redirect: false
  // };

  // setRedirect = () => {
  //   this.setState({
  //     redirect: true
  //   });
  // };

  // renderRedirect = () => {
  //   if (this.state.redirect) {
  //     return <Redirect to="/report" />;
  //   }
  // };

  
  render() {
    return (      
        <div className="container-fluid">
          <br />
          <Header />

          <div className="row">
            <div className="col-md-3">
              <br />
              <Card>
                <CardHeader>Selected report attributes</CardHeader>
              </Card>
            </div>
            <div className="col-md-9">
              <br />
              <Card color="primary">
                <CardHeader>data Visualizer Customize</CardHeader>
                <CardText>
                  
                </CardText>
              </Card>
             <Router>
             
             <Button color="primary" className="float-right">Save</Button>
             
              </Router>
            </div>
          </div>
        </div>
    
    );
  }
}
export default Visualizer;
