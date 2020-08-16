import React from "react";
import "./about.css";
import Header from "../../components/Header/index";
import Photo from "../../components/Photo/index";
import Body from "../../components/Body/index";

function About() {
    return (
        <div>
            <Header header={"Who I am"} />
            <Photo/>
            <Body/>
            <Header header={"Technical Skills"}/>
        </div>

    )
}

export default About;