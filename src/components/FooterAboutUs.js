import React, { Component } from "react";
//import mainLogo from "../../public/images/logo.png";

export class FooterAboutUs extends Component {
  render() {
    return (
      <div className="card">
        <img
          className="card-img-top"
          src="https://dummyimage.com/215x90/232323/ffffff.png"
          alt=""
        />
        <div className="card-body">
          <p className="card-text">
            Lorem ipsum dolor sit amet,
            <br /> consectetur adipiscing elit. Nunc
            <br />
            non diam erat. In fringilla massa ut
            <br /> nisi ullamcorper pellentesque.
            <br /> Quisque non luctus sem. Nullam <br /> non magna vel nisi
            posuere
            <br /> bibendum vitae sed dui.
          </p>
          <a href="">
            Read More <i className="fa fa-angle-double-right"></i>
          </a>
        </div>
      </div>
    );
  }
}
