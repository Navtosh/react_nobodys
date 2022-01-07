import React, { Component } from "react";

export class BannerDiscription extends Component {
  render() {
    return (
      <div className="banner_discription">
        <h1>Your title can be long and descriptive</h1>
        <p>
          Cursuspenatisaccum ut curabitur nulla tellus tor
          <br />
          ames a in curabitur pede. Idet mollisi eros dis
          <br /> orci congue elis et curabitur.
        </p>
        <button className="btn btn-small btn-primary btn-blue " value="SEARCH">
          READ MORE <i className="fa fa-angle-double-right"></i>
        </button>
      </div>
    );
  }
}
