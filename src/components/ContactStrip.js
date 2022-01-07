import React, { Component } from "react";
//import DeviceImg from "../../public/images/respon.png";

export class ContactStrip extends Component {
  render() {
    return (
      <div className="container-fluid white_bg">
        <div className="justify-content-center">
          <div className="container contact_strip">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-12 col-sm-6 col-xs-12 align-self-center">
                <h1>Lorem ipsum dolor sit amet elit !</h1>
                <p>
                  Why not try our services today, you won’t regret your choice !
                </p>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-6 col-xs-12 align-self-center">
                <form>
                  <button
                    className="btn btn-small btn-primary btn-blue btn-contact"
                    value="Contact Us Today"
                  >
                    CONTACT US TODAY
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
