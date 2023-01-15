import React from "react";
import { TextWrapper } from "./project-styles";
import { Carousel } from "react-responsive-carousel";

export const Projects = () => {
  return (
    <div className="Projects">
      <TextWrapper>
        <h1>Projects</h1>
        <div style={{ display: "flex" }}>
          <img src="../../assets/projects/website/my-web.png"></img>
          <img src="../assets/projects/website/my-web2.png"></img>
          <img src="src/assets/projects/website/my-web3.png"></img>
        </div>
        <h3>This website</h3>
        <p>
          A personal website to showcase my projects as well as build on my web
          development skills.
          <br />
          Initial iteration pictured.
        </p>
        <small>Ongoing project</small>
        <div style={{ display: "flex" }}></div>
        <h3>
          <a target="_blank" href="https://dooleymcnaughtondental.co.nz/">
            Dooley & McNaughton Dental Website
          </a>
        </h3>
        <p>
          A website for Dooley & McNaughton Dental. The client wanted an
          informative and easy to use website with minimal pages to ensure ease
          of navigation.
        </p>
        <small>Created website in September 2019</small>
        <div style={{ display: "flex" }}></div>
        <h3>Granology</h3>
        <p>
          Designed branding and packaging for small health cereal company,
          Granology.
        </p>
        <small>Branding created in July 2019</small>
        <div style={{ display: "flex" }}></div>
        <h3>Balsamiq Wireframe Mockup</h3>
        <p>
          Created a mockup using Balsamiq to practise using a wireframing tool.
          The mockup is an online learning tool for studying Te Reo Māori.
        </p>
        <small>Prototype</small>
      </TextWrapper>
    </div>
  );
};
