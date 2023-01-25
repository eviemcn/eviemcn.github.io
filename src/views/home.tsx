import logo from "./logo.svg";
import React from "react";
import {
  DetailsWrapper,
  Sketch,
  SketchGrid,
  SketchWrapper,
  TextWrapper,
} from "./home-styles";

export const Home = () => {
  return (
    <div className="Home">
      <DetailsWrapper>
        <h1>About</h1>
        <p>
          I am a front-end website developer and designer with interest in graph
          databases and API. <br />
          Initially, this website was used to help gain further skills using
          HTML, CSS and JavaScript. I have now rewritten the site using
          Typescript and React as I have become more familiar using these.
          <br />
          My interests include design, music, art, film and food. I hope to
          incorporate these into this website somehow. <br />
          The website is currently being hosted on Github,{" "}
          <a
            tabIndex={0}
            target="_blank"
            href="https://github.com/eviemcn/my-website"
          >
            here is a link
          </a>{" "}
          if you’d like to take a look at the code.
        </p>
        <h3>Evie McNaughton</h3>
      </DetailsWrapper>
      <SketchWrapper>
        <SketchGrid>
          <div style={{ display: "flex", height: "22%" }}>
            <Sketch imageUrl="" />
            <Sketch
              imageUrl="../assets/home/sketches/sketch-pink.png"
              filter={Math.random() < 0.5}
            />
            <Sketch
              imageUrl="../assets/home/sketches/sketch-maroon.png"
              filter={Math.random() < 0.5}
            />
            <Sketch imageUrl="" />
          </div>
          <div style={{ display: "flex", height: "22%" }}>
            <Sketch
              imageUrl="../assets/home/sketches/sketch-green.png"
              filter={Math.random() < 0.5}
            />
            <Sketch imageUrl="" />
            <Sketch
              imageUrl="../assets/home/sketches/sketch-alien.png"
              filter={Math.random() < 0.5}
            />
            <Sketch
              imageUrl="../assets/home/sketches/sketch-purple.png"
              filter={Math.random() < 0.5}
            />
          </div>
          <div style={{ display: "flex", height: "22%" }}>
            <Sketch imageUrl="" />
            <Sketch
              imageUrl="../assets/home/sketches/sketch-orange.png"
              filter={Math.random() < 0.5}
            />
            <Sketch imageUrl="" />
            <Sketch
              imageUrl="../assets/home/sketches/sketch-bluenote.png"
              filter={Math.random() < 0.5}
            />
          </div>
          <div style={{ display: "flex", height: "22%" }}>
            <Sketch
              imageUrl="../assets/home/sketches/sketch-aqua.png"
              filter={Math.random() < 0.5}
            />
            <Sketch imageUrl="" />
            <Sketch
              imageUrl="../assets/home/sketches/sketch-mustard.png"
              filter={Math.random() < 0.5}
            />
            <Sketch imageUrl="" />
          </div>
        </SketchGrid>
      </SketchWrapper>
    </div>
  );
};
