import React, { Component } from "react";
import $ from 'jquery';
// import TestList from './TestList';
// import 'bootstrap/dist/css/bootstrap.css';
import ListBox from 'react-listbox';
import 'react-listbox/dist/react-listbox.css';
import PropTypes from 'prop-types';
import Selection from '../Selection';
class SideBar extends Component {

    

    handleClick = (reference, e) => {

        if ($(reference + "-options").css('display') == 'none') {
            $(reference + "-options").css("display", "block");
        } else {
            $(reference + "-options").css("display", "none");
        }

    }

    render() {    

        return (
            <div className="row">
                <div className="col-12">
                    <ul className="list-group">
                        <li className="list-group-item" id="weekly-tab" onClick={(e) => this.handleClick("#weekly-tab", e)}>Weekly</li>
                        <li className="list-group-item hidden" id="weekly-tab-options">
                            <div className="row ">
                                <div className="col-12 form-check">
                                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                                    <label className="form-check-label">Last week</label>
                                </div>
                                <div className="col-12 form-check">
                                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                                    <label className="form-check-label">12 weeks</label>
                                </div>

                                <div className="col-12 form-check">
                                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                                    <label className="form-check-label">4 weeks</label>
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item" id="quarterly-tab" onClick={(e) => this.handleClick("#quarterly-tab", e)}>Quarterly</li>
                        <li className="list-group-item hidden" id="quarterly-tab-options">
                            <div className="row">
                                <div className="col-12 form-check">
                                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                                    <label className="form-check-label">Current Quarter</label>
                                </div>
                                <div className="col-12 form-check">
                                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                                    <label className="form-check-label">Last Quarter</label>
                                </div>
                                <br />
                                <div className="col-12 form-check">
                                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                                    <label className="form-check-label">Last 4 quarters</label>
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item" id="semi-annually-tab" onClick={(e) => this.handleClick("#semi-annually-tab", e)}>Semi-Annually</li>
                        <li className="list-group-item hidden" id="semi-annually-tab-options">
                            <div className="row">
                                {/* <div className="col-12 form-check">
                                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                                    <label className="form-check-label">This 6 Months</label>
                                </div>
                                <br />
                                <div className="col-12 form-check">
                                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                                    <label className="form-check-label">Last 6 Months</label>
                                </div>
                                <br /> */}
                               <Selection />
                            </div>
                        </li>

                        <li className="list-group-item" id="annually-tab" onClick={(e) => this.handleClick("#annually-tab", e)} >Annually</li>
                        <li className="list-group-item hidden" id="annually-tab-options">
                            <div className="row">
                                <div className="col-12 form-check">
                                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                                    <label className="form-check-label">2018</label>
                                </div>
                                <div className="col-12 form-check">
                                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                                    <label className="form-check-label">2017</label>
                                </div>
                                <br />
                                <div className="col-12 form-check">
                                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                                    <label className="form-check-label">2016</label>
                                </div>
                                <div className="col-12 form-check">
                                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                                    <label className="form-check-label">2015</label>
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item hidden">Annually</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default SideBar;