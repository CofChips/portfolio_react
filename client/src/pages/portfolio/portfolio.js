import React, { useState, useEffect } from "react";
import "./portfolio.css";
import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";
import API from "../../utils/API";
import Project from "../../components/Project/index";



function Portfolio() {
    const [portfolio, setPortfolio] = useState([])

    useEffect(() => {
        document.title = "Portfolio"
        loadPortfolio()
    }, [])

    function loadPortfolio() {
        API.getPortfolio()
            .then((res) => {
                setPortfolio(res.data)
            }
            )
            .catch(err => console.log(err));
    };

    const portfolios = portfolio.map((project) =>
        <Project key={project.name.toString()}
            name={project.name}
            live={project.live}
            image={project.img}
            repo={project.repo}
            pic={project.live}
            description={project.description}
            tech={project.tech}
        />
    )

    return (
        <div className="container w-100 mt-5 auto">
            <Header header={"Portfolio"} />
            <div className="row m-0" id="portfolioEls">
                {portfolios}
            </div>
            <Footer />
        </div>

    )
}

export default Portfolio;