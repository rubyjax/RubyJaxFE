import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (

  <div className="container-fluid navbar navbar-default">
    <ul className="nav navbar-nav">
      <li className="active"><Link to="/">Home</Link></li>
      <li><Link to="/talks">Talks</Link></li>
      <li><Link to="/jobs">Jobs</Link></li>
    </ul>
  </div>

    );
  }
}
export default Header;
