// Navtosh Adhikari

import React, { Component } from "react";
import { ContactForm } from "./ContactForm";
import { FooterLinks } from "./FooterLinks";
import { FooterBlogs } from "./FooterBlogs";
import { FooterAboutUs } from "./FooterAboutUs";

//import DeviceImg from "../../public/images/respon.png";

export class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6 my-4">
              <h5>ABOUT US</h5>
              <div className="row">
                <div className="col-12">
                  <FooterAboutUs />
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 my-4">
              <h5>QUICK LINKS</h5>
              <div className="row">
                <div className="col-12">
                  <FooterLinks />
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 my-4">
              <h5>LATEST BLOG POSTS</h5>
              <div className="row">
                <div className="col-12">
                  <FooterBlogs />
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 my-4">
              <h5>CONTACT US</h5>
              <div className="row">
                <div className="col-12">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
// Navtosh Adhikari
