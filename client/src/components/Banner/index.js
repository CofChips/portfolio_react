import React from "react";
import "./style.css";

function Banner(props) {
    return (
        <div className="container-fluid w-100 centered">
        <div className="row align-middle">
            <div className="col-md text-center p-0 indexFont">
                <p>Hi, I'm</p>
            </div>
        </div>
        <div className="row">
            <div className="col-md text-center" >
                <h1 className="head">Christopher Lee</h1>
            </div>
        </div>
        <div className="row">
            <div className="col-md text-center mt-2 roboto">
                <p>full-stack web developer | marketer | strategist</p>
            </div>

        </div>




    </div>
    )
}

export default Banner;

