import React, { Component } from "react";
import Header from "./ui/Header";
import ReportItems from './ui/ReportItems';
import { ListGroup, ListGroupItem } from "reactstrap";
//import ReactDOM from "react-dom";
//import { Link } from 'react-router';
import SideBar from './SideBar';
import { Link } from 'react-router-dom'
import App from "./App";
import {
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  Collapse,
  CardTitle,
  CardText,
  ToolTip
} from "reactstrap";


class Report extends Component{
    render(){
        return(
<div className="container-fluid">
<br/>
        {/* Application Top Bar */}
        <Header />

        {/* End of Application top bar */}
        <br/>
        <div className="row">
        
          <div className="col-md-3">

<br/>
            {/*  The application Sidebar*/}
            <SideBar/>

            {/* End Of Sidebar */}

          </div>
          <div className="col-md-9">
            <br />
            <Card color="">
              <CardHeader>Selected Data Attributes</CardHeader>
              <CardText>
                knvklsnvksl
              </CardText>
            </Card>
         
            <Link to="/App"><Button color="primary" className="float-right">Next</Button></Link>
          </div>
          </div>
</div>

        );
    }
}

export default Report;