import React, { Component } from "react";
import Identicon from "identicon.js";
import small from "../img/Melon.png";
import "./App.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar fixed-top bg-clear shadow">
        <a
          className="navbar-brand"
          href="https://github.com/MBrassey/TurquoiseMelon/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={small}
            width="30"
            height="26"
            className="slogo"
            alt="TurquoiseMelon"
          />
          TurquoiseMelon / CustomPC /
        </a>
        <ul className="navbar-nav">
          <li className="nav-item">
            <small className="text-secondary">
              <small id="account">{this.props.account}</small>
            </small>
            {this.props.account ? (
              <img
                className=""
                width="30"
                height="30"
                src={`data:image/png;base64,${new Identicon(
                  this.props.account,
                  30
                ).toString()}`}
              />
            ) : (
              <span></span>
            )}
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
