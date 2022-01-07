import React, { Component } from "react";
import mainLogo from "../images/logo.png";
import { SearchForm } from "./SearchForm";
import { HeaderLinks } from "./HeaderLinks";
import { HeaderSocialLinks } from "./HeaderSocialLinks";
import { Navigation } from "./Navigation";

export class Header extends Component {
  render() {
    return (
      <header>
        <div className="floating-header">
          <div className="container">
            <div className="row">
              <div className="col-md-7 col-sm-6 col-xs-12 align-self-center">
                <HeaderLinks />
              </div>
              <div className="col-md-5 col-sm-6 col-xs-12 align-self-center">
                <HeaderSocialLinks />
              </div>
              <a className="slide_btn">-</a>
            </div>
          </div>
        </div>
        <div className="navigation-wrap start-header start-style">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <nav className="navbar navbar-expand-md navbar-light p-sm-0 p-md-0 p-lg-0">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>

                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <button
                      className="navbar-toggler btn_sec"
                      type="button"
                      data-toggle="collapse"
                      data-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span class="fa fa-close"></span>
                    </button>
                    <Navigation />
                  </div>
                </nav>
              </div>
            </div>
            <div className="row logo_container">
              <div className="col-lg-8 col-md-8 col-sm-6 col-xs-12">
                <img src={mainLogo} alt="NoBodysFool" className="mainlogo" />
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 align-self-center">
                <SearchForm />
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
