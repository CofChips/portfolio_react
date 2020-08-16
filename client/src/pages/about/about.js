import React, { useState, useEffect } from "react";
import "./about.css";
import Header from "../../components/Header/index";
import Photo from "../../components/Photo/index";
import Body from "../../components/Body/index";
import API from "../../utils/API";
import { ListItem } from "../../components/ListItem";

function About() {
    // const [skills1, setSkills1] = useState([])
    const [skills2, setSkills2] = useState([])
    const [skills3, setSkills3] = useState([])

    useEffect(() => {
        loadSkills()
    }, [])

    function loadSkills() {
        // API.getSkills1()
        //     .then((res) => {
        //         // let newArray=[];
        //         // for (let i = 0; i < res.data.length; i++){
        //         //     newArray.push(res.data[i].name)
        //         // }
        //         setSkills1(res.data)
        //     }

        //     )
        //     .catch(err => console.log(err));

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


    // const skillsList1 = skills1.map((skill) =>
    //     <ListItem key={skill.id.toString()}>
    //         {skill.name}
    //     </ListItem>
    // )

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


        <div>
            <Header header={"Who I am"} />
            <Photo />
            <Body />
            <Header header={"Technical Skills"} />
            <div className="row">
                <div className="col s1 m3 ul"></div>
                <div className="col s5 m3 ul">
                    <ul className="ul">
                        {skillsList2}
                    </ul>
                </div>
                <div className="col s5 m3 ul">
                    <ul className="ul"> 
                        {skillsList3}
                    </ul>
                </div>
                <div className="col s1 m3 ul"></div>

            </div>

        </div>

    )
}

export default About;