import React, { Component } from "react";
//import DeviceImg from "../../public/images/respon.png";

export class ContactForm extends Component {
  render() {
    return (
      <form>
        <fieldset className="form-group">
          <input
            type="text"
            className="form-control  cstm-input"
            id=""
            placeholder="Name"
          />
        </fieldset>
        <fieldset className="form-group">
          <input
            type="email"
            className="form-control cstm-input"
            id=""
            placeholder="Email"
          />
        </fieldset>
        <fieldset className="form-group">
          <input
            type="text"
            className="form-control cstm-input"
            id=""
            placeholder="Subject"
          />
        </fieldset>
        <fieldset className="form-group">
          <textarea
            className="form-control cstm-input"
            id=""
            placeholder="Message"
          ></textarea>
        </fieldset>
        <fieldset className="form-group text-xs-right">
          <button type="button" className="btn btn-secondary-outline btn-small">
            SUBMIT
          </button>
        </fieldset>
      </form>
    );
  }
}
