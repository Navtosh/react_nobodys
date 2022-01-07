import React, { Component } from "react";
//import mainLogo from "../../public/images/logo.png";

export class Cards extends Component {
  render() {
    return (
      <div className="card mb-md-3">
        <img
          className="card-img-top"
          src="https://dummyimage.com/85x80/333333/ffffff.png"
          alt=""
          height="80"
          width="85"
        />
        <div className="card-body">
          <h5 className="card-title">
            <a href="">Vivamuslibero Augue</a>
          </h5>
          <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non
            diam erat. In fringilla massa ut nisi ullamcorper pellentesque.
          </p>
        </div>
      </div>
    );
  }
}
