import React from "react";
import "./style.css";

function Footer() {
    return (
        <footer className="footer">
        <div className="container-fluid text-center footheight">
            <a href="https://github.com/CofChips" target="blank"><i className="fa fa-github-square git link" ></i></a>
            <span>&nbsp;</span>
            <a href="https://www.linkedin.com/in/christophernlee/"><i className="fa fa-linkedin-square li link"></i></a>
        </div>
    </footer>
    )
}

export default Footer;