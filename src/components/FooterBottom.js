import React, { Component } from "react";
//import DeviceImg from "../../public/images/respon.png";

export class FooterBottom extends Component {
  render() {
    return (
      <footer className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <p>Copyright &copy; 2013 Domain Name - All Rights Reserved</p>
            </div>
            <div className="col-md-5 ">
              <p className="float-right">Template by OS Templates</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
