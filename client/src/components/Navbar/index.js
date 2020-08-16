import React from "react";
import "./style.css";
// import something from "../../../public/assets/img/"

function Navbar(){
    return (
        <nav className="transparent z-depth-0">
        <div className="nav-wrapper navBar">
          <a href="/" className="brand-logo logo"><img className="logo" src="./assets/img/banffsmall.jpg" alt="logo"/></a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a className="grey-text text-darken-1" href="/about">About</a></li>
            <li><a className="grey-text text-darken-1" href="/portfolio">Portfolio</a></li>
            <li><a className="grey-text text-darken-1" href="/contact">Contact</a></li>
          </ul>
        </div>
      </nav>
    )
}

export default Navbar;