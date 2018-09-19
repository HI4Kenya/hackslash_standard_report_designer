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
//import Report from "./components/Re                                                                                                                                                                                                                                                                         port";

import {
  Card,
  Button,                                                                          
  CardHeader, 
  CardText ,
  Form, FormGroup
} from "reactstrap";
import { Row, Col } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';


//Charts data
var data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [{
    label: "Measles",
    borderColor: 'rgb(255, 99, 132)',
    data: [4, 14, 12, 2, 1, 5, 13],
  },
  {
    label: "Rubella",
    borderColor: '#0000FF',
    data: [3, 10, 5, 2, 20, 16, 10],
  }]
}
//end charts data
class Visualizer extends Component {

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

            {/* return chart */}
            <div className="col-md-9">
              <br />
              <Card>
                <CardHeader>data Visualizer Customize</CardHeader>
                <div className="col-10" id="chart_section">
            <Form>
          <FormGroup>
              <Row>
                  <Col md={5}>
                  <select class="selectpicker form-control input-place"  name="select_option" id="disease" onChange="setCode(this)" required>
                  {/* multiple data-live-search="true" */}
                  <option value="">Select Region</option>
                  <option value="44">Central</option>
                  <option value="55">Coast</option>
                  <option value="33">Eastern</option>
                  <option value="22">Nairobi</option>
                  <option value="11">N/Eastern</option>
                  <option value="32">Nyanza</option>
                  <option value="34">Western</option>
                  </select>
                  </Col>
                  <Col md={5}>
                  <select class="form-control" id="county">
                  <option>Select County</option>
                  </select>
                  </Col>
                  <Col md={2}>
                  <Button>Generate Chart</Button>
                  </Col>
                  
              </Row>
              
          </FormGroup>
          
      </Form>
          <Line data={data} className="fullsize" />
        </div>
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
