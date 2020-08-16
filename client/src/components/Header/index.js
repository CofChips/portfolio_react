import React from "react";
import "./style.css";

function Header(props){
    return (
        <div className="row">
        <div className="col m1 l2"></div>
        <div className="col s12 m10 l8 border"><h1 className="header">{props.header}</h1></div>
        <div className="col m1 l2"></div>
      </div>
    )
}

export default Header;