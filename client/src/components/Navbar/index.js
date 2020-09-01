import React from "react";
import "./style.css";
// import something from "../../../public/assets/img/"

function Navbar(){
    return (
      <nav className="navbar navbar-expand flex-column flex-md-row p-0 bg-white bd-navbar overflow-hidden">
      <a className="navbar-brand p-4 font-weight-bold d-none d-md-block h-100 left" href="/">
          <img src="./assets/img/banffsmall.jpg" alt="portfolio" className="rounded-circle image"/>
      </a>
      <div className="d-block d-md-none pt-2 font-weight-bold m-0 w-100">
          <p className="text-center m-0"><a href="/"><img src="./assets/img/banffsmall.jpg" alt="portfolio" className="rounded-circle imageSmall"/></a></p>
      </div>
      <div className="navbar-nav-scroll my-3 ml-md-auto right">
          <ul className="navbar-nav">
              <li className="nav-item">
                  <a className="nav-link text-black-50 border-right py-0 px-3" href="/about"><small>About</small></a>
              </li>
              <li className="nav-item">
                  <a className="nav-link text-black-50 border-right py-0 px-3"
                      href="/portfolio"><small>Portfolio</small></a>
              </li>
              <li className="nav-item">
                  <a className="nav-link text-black-50 py-0 pl-3" href="/contact"><small>Contact</small></a>
                  </li>
          </ul>
      </div>
  </nav>


    )
}

export default Navbar;