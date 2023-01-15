import logo from "./logo.svg";
import React from "react";
import { TextWrapper } from "./home-styles";

export const Home = () => {
  return (
    <div className="Home">
      <h1>Home</h1>
      <TextWrapper>
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
            target="_blank"
            href="https://github.com/eviemcn/eviemcn.github.io"
          >
            here is a link
          </a>{" "}
          if you’d like to take a look at the code.
        </p>
      </TextWrapper>
    </div>
  );
};
