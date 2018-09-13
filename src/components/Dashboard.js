import React, { Component } from "react";
import Header from "./ui/Header";

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
import Report from "./Report";

import {
  Card,
  Button, 
  CardHeader, 
  CardText  
} from "reactstrap";



class Dashboard extends Component {
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
                <CardHeader>This is my Home Interface</CardHeader>
                <CardText>
                  <ListGroup>
                    <ListGroupItem>ANC 4th visit Report </ListGroupItem>
                    <ListGroupItem>
                      Ruiru Healthcare Malaria Report
                    </ListGroupItem>
                  </ListGroup>
                </CardText>
              </Card>
           
             
              <Link to="/report"><Button color="primary" className="float-right">New</Button></Link>
             
             
            </div>
          </div>
        </div>
    
    );
  }
}
export default Dashboard;
