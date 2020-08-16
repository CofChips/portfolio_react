import React from "react";
import "./about.css";
import Header from "../../components/Header/index";
import Photo from "../../components/Photo/index";

function About() {
    return (
        <div>
            <Header header={"Who I am"} />
            <Photo/>
        </div>

    )
}

export default About;