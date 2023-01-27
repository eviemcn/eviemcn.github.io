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
import { ReactComponent as RefreshIcon } from "../assets/refresh16.svg";

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
          <SketchRow>
            <Sketch imageUrl="" filter={filterValues[0]} />
            <Sketch
              imageUrl="../assets/home/sketches/sketch-pink.png"
              filter={filterValues[1]}
            />
            <Sketch
              imageUrl="../assets/home/sketches/sketch-maroon.png"
              filter={filterValues[2]}
            />
            <Sketch imageUrl="" filter={filterValues[3]} />
          </SketchRow>
          <SketchRow>
            <Sketch
              imageUrl="../assets/home/sketches/sketch-green.png"
              filter={filterValues[4]}
            />
            <Sketch imageUrl="" filter={filterValues[5]} />
            <Sketch
              imageUrl="../assets/home/sketches/sketch-alien.png"
              filter={filterValues[6]}
            />
            <Sketch
              imageUrl="../assets/home/sketches/sketch-purple.png"
              filter={filterValues[7]}
            />
          </SketchRow>
          <SketchRow>
            <Sketch imageUrl="" filter={filterValues[8]} />
            <Sketch
              imageUrl="../assets/home/sketches/sketch-orange.png"
              filter={filterValues[9]}
            />
            <Sketch imageUrl="" filter={filterValues[10]} />
            <Sketch
              imageUrl="../assets/home/sketches/sketch-bluenote.png"
              filter={filterValues[11]}
            />
          </SketchRow>
          <SketchRow>
            <Sketch
              imageUrl="../assets/home/sketches/sketch-aqua.png"
              filter={filterValues[12]}
            />
            <Sketch imageUrl="" filter={filterValues[13]} />
            <Sketch
              imageUrl="../assets/home/sketches/sketch-mustard.png"
              filter={filterValues[14]}
            />
            <Sketch imageUrl="" filter={filterValues[15]} />
          </SketchRow>
        </SketchGrid>
      </SketchWrapper>
      <RefreshWrapper>
        <Refresh
          onClick={() =>
            setFilterValues(
              Array.from({ length: 16 }, () => Math.random() < 0.5)
            )
          }
        >
          <RefreshIcon />
          <p>Refresh Grid</p>
        </Refresh>
      </RefreshWrapper>
    </div>
  );
};
