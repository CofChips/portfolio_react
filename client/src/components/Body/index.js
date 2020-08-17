import React from "react";
import "./style.css";

function Body() {
    return (
        <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6 mt-2 pt-3 sans align-left">
                <p> I am a full-stack web developer, marketer, and strategist based in San Francisco, California. Born
                    and raised in the East Bay, I spent the last 12 years as an expatriate in Hong Kong and Indonesia
                    working for the French multi-national insurance company, AXA, most recently as Head of Marketing.
                </p>
                <p>
                    I have a strong attention to detail and a passion for developing user-centric, responsive apps -
                    particularly those that address everyday problems. I tend to approach problem-solving in a
                    structured manner and am a strong proponent of data-driven decision making.
                </p>
                <p>
                    In my free time, you will find me at the beach, along the California coast, enjoying the sea spray
                    as the waves crash into the shore, next to my family.
                </p>
                <p>
                    Click <a href="/assets/img/christopher_neal_lee_resume.pdf" target="blank" className="linkRes">here</a> for my resume.
                </p>
            </div>
            <div className="col-md-3"></div>
        </div>
    )
}

export default Body;