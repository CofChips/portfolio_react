import React from "react";
import "./style.css";
// import something from "../../../public/assets/img/"

function Photo() {
    return (
        <div className="row">
            <div className="col s2"></div>
            <div className="col s8 container"><img className="photo" src="./assets/img/profile.jpeg" alt="portfolio"/></div>
            <div className="col s2"></div>
        </div>
    )
}

export default Photo;