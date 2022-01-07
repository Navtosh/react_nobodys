// Navtosh Adhikari
import React, { Component } from "react";
//import DeviceImg from "../../public/images/respon.png";

export class SearchForm extends Component {
  render() {
    return (
      <form>
        <div className="input-group">
          <input
            type="text"
            className="form-control cstm-input"
            placeholder="Search Our Website..."
          />
          <span className="input-group-btn">
            <button
              className="btn btn-small btn-primary btn-blue ml-md-1 cstm-btn"
              value="SEARCH"
            >
              SEARCH
            </button>
          </span>
        </div>
      </form>
    );
  }
}
// Navtosh Adhikari
