import React from "react";
import DeveloperCard from "../../styles/DeveloperCard";
import Contribute from "../../components/Contribute";
import { Navbar } from "../../components/Navbar";
import "./ourteam.css";
import { Footer } from "../../containers/Footer.js"
import devData from "../../assets/devData";

// /** functionality for loading developer cards components, and the contribute components **/
export default function OurTeam() {
  const devCards = [];

  for (const [name, value] of Object.entries(devData)) {
    devCards.push(
      <DeveloperCard>
        <img src={value.img} alt={name} className="dev-pic" />
        <p className="dev-name">{value["dev-name"]}</p>
        <a href={value["github-link"]}>{value["github-handle"]}</a>
      </DeveloperCard>
    );
  }
  devCards.reverse();
  
  return (
    <div className="ourteam">
      <Navbar/>
      <div className="footer">
      <div className="team-content">
      <h2 className="team-h2">About OverVue</h2>
       <h3 className="team-h3">OverVue is an Open Source prototyping tool that allows developers to seemlessly create and visualize Vue applications. </h3>
        <h4 className="team-h4">Our Team</h4>
        <h5 className="team-h5">Our product is built by a diverse community of developers who are passionate about improving prototype driven development.</h5>
      </div>
        <div className="devCards">
          <div className="orderDevCards">
          {devCards}
          </div>
        </div>
        <Contribute />
      </div>
      <Footer />
    </div>
  )
};