import React, { Component } from "react";
//import mainLogo from "../../public/images/logo.png";

export class FooterBlogs extends Component {
  render() {
    return (
      <ul className="list-unstyled">
        <li className="media">
          <div className="media-body">
            <h5 className="mt-0 mb-1">Post Title</h5>
            <h6>
              Admin, domainname.com <br />
              Friday, 6th April 2000
            </h6>
            <p>
              Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi
              a tellus consequat imperdiet.
            </p>
            <a href="">
              Read More <i className="fa fa-angle-double-right"></i>
            </a>
          </div>
        </li>
        <li className="media">
          <div className="media-body">
            <h5 className="mt-0 mb-1">Post Title</h5>
            <h6>
              Admin, domainname.com <br />
              Friday, 6th April 2000
            </h6>
            <p>
              Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi
              a tellus consequat imperdiet.
            </p>
            <a href="">
              Read More <i className="fa fa-angle-double-right"></i>
            </a>
          </div>
        </li>
      </ul>
    );
  }
}
