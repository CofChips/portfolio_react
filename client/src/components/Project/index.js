import React from "react";
import "./style.css";

function Project(props) {
    return (

        <div className="card col-md-4 mb-5 border-0">
            <div className="lighten">
                <a href={props.pic} target="blank">
                    <img src={props.image} className="card-img-top imageP border" alt={props.name} />
                </a>
            </div>
            <div className="card-body text-center">
                <p className="card-title"> <a href={props.live} target="blank" className="text-secondary"> Live site </a> |  <a href={props.repo} target="blank" className="text-secondary">Repository</a></p>
                <p className="card-text text-left">{props.description}</p>
                <p className="card-text text-left">Built with: {props.tech}</p>
            </div>
        </div>

    )
}

export default Project;

