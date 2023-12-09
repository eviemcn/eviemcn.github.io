import logo from "./logo.svg";
import React, { useState } from "react";
import {
  DetailsWrapper,
  Refresh,
  RefreshWrapper,
  Sketch,
  SketchGrid,
  SketchRow,
  SketchWrapper,
  TextWrapper,
} from "./home-styles";
import { ReactComponent as PixelPortrait } from "../assets/portrait-pixel.svg";

export const Home = () => {
  const [filterValues, setFilterValues] = useState(
    Array.from({ length: 16 }, () => Math.random() < 0.5)
  );

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
          <img src={require('../assets/pixels-slow.gif')} alt="portrait" />
        </SketchGrid>
      </SketchWrapper>
    </div>
  );
};
