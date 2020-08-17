import React, { useState, useEffect } from "react";
import "./about.css";
import Header from "../../components/Header/index";
import Photo from "../../components/Photo/index";
import Body from "../../components/Body/index";
import API from "../../utils/API";
import { ListItem } from "../../components/ListItem";
import Footer from "../../components/Footer/index";

function About() {
    const [skills1, setSkills1] = useState([])
    const [skills2, setSkills2] = useState([])
    const [skills3, setSkills3] = useState([])

    useEffect(() => {
        document.title = "About"
        loadSkills()
    }, [])

    function loadSkills() {
        API.getSkills1()
            .then((res) => {
                // let newArray=[];
                // for (let i = 0; i < res.data.length; i++){
                //     newArray.push(res.data[i].name)
                // }
                setSkills1(res.data)
            }

            )
            .catch(err => console.log(err));

        API.getSkills2()
            .then((res) => {
                // let newArray=[];
                // for (let i = 0; i < res.data.length; i++){
                //     newArray.push(res.data[i].name)
                // }
                setSkills2(res.data)
            }

            )
            .catch(err => console.log(err));

        API.getSkills3()
            .then((res) => {
                // let newArray=[];
                // for (let i = 0; i < res.data.length; i++){
                //     newArray.push(res.data[i].name)
                // }
                setSkills3(res.data)
            }

            )
            .catch(err => console.log(err));
    };

    // console.log("skills: ", skills1)


    const skillsList1 = skills1.map((skill) =>
        <ListItem key={skill.id.toString()}>
            {skill.name}
        </ListItem>
    )

    const skillsList2 = skills2.map((skill) =>
        <ListItem key={skill.id.toString()}>
            {skill.name}
        </ListItem>
    )

    const skillsList3 = skills3.map((skill) =>
        <ListItem key={skill.id.toString()}>
            {skill.name}
        </ListItem>
    )

    return (


        <div className="container w-100 mt-5 auto">
            <Header header={"Who I am"} />
            <Photo />
            <Body />
            <Header header={"Technical Skills"} />
            <div className="row pb-5">
                <div className="col-md"></div>
                <div className="col-md text-center mt-2 pt-3 sans">
                    <ul className="list p-0" id="skillsList1">
                        {skillsList1}
                    </ul>
                </div>
                <div className="col-md text-center mt-2 pt-3 sans">
                    <ul className="list p-0" id="skillsList2">
                        {skillsList2}
                    </ul>
                </div>
                <div className="col-md text-center mt-2 pt-3 sans">
                    <ul className="list p-0" id="skillsList3">
                        {skillsList3}
                    </ul>
                </div>
                <div className="col-md"></div>
            </div>
            <Footer />
        </div>
    )
}

export default About;