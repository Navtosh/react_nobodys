// Navtosh Adhikari
import React, { Component } from "react";
import DeviceImg from "../images/respon.png";
import { Cards } from "./Cards";

export class MainContaint extends Component {
  render() {
    return (
      <div className="container-fluid white_bg">
        <div className="justify-content-center">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 align-self-center device-response">
                <img src={DeviceImg} alt="NoBodysFool" />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 align-self-center tile_container">
                <div className="row justify-content-center">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 align-self-top">
                    <Cards />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 align-self-top">
                    <Cards />
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 align-self-top">
                    <Cards />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 align-self-top">
                    <Cards />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
// Navtosh Adhikari
