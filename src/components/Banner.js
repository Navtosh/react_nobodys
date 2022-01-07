import React, { Component } from "react";
//import mainLogo from "../../public/images/logo.png";
import { BannerDiscription } from "./BannerDiscription";
import { BannerImage } from "./BannerImage";

export class Banner extends Component {
  render() {
    return (
      <div className="container-fluid gray_bg">
        <div className="justify-content-center">
          <div className="container">
            <div className="justify-content-center">
              <div id="demo" className="carousel slide" data-ride="carousel">
                <ul className="carousel-indicators">
                  <li
                    data-target="#demo"
                    data-slide-to="0"
                    className="active"
                  ></li>
                  <li data-target="#demo" data-slide-to="1"></li>
                  <li data-target="#demo" data-slide-to="2"></li>
                  <li data-target="#demo" data-slide-to="3"></li>
                  <li data-target="#demo" data-slide-to="4"></li>
                </ul>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="row">
                      <div className="col-lg-5 col-md-5 col-sm-6 col-xs-12 align-self-center">
                        <BannerDiscription />
                      </div>
                      <div className="col-lg-7 col-md-7 col-sm-6 col-xs-12 align-self-center">
                        <BannerImage />
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-lg-5 col-md-5 col-sm-6 col-xs-12 align-self-center">
                        <BannerDiscription />
                      </div>
                      <div className="col-lg-7 col-md-7 col-sm-6 col-xs-12 align-self-center">
                        <BannerImage />
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-lg-5 col-md-5 col-sm-6 col-xs-12 align-self-center">
                        <BannerDiscription />
                      </div>
                      <div className="col-lg-7 col-md-7 col-sm-6 col-xs-12 align-self-center">
                        <BannerImage />
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-lg-5 col-md-5 col-sm-6 col-xs-12 align-self-center">
                        <BannerDiscription />
                      </div>
                      <div className="col-lg-7 col-md-7 col-sm-6 col-xs-12 align-self-center">
                        <BannerImage />
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-lg-5 col-md-5 col-sm-6 col-xs-12 align-self-center">
                        <BannerDiscription />
                      </div>
                      <div className="col-lg-7 col-md-7 col-sm-6 col-xs-12 align-self-center">
                        <BannerImage />
                      </div>
                    </div>
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
