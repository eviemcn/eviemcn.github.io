import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faPinterest,
  faInstagram,
  faSpotify,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import { FooterContainer } from "./header-styles";

export const Footer = () => {
  return (
    <FooterContainer>
      <a tabIndex={1} href="mailto:evie.mcnaughton@gmail.com" title="Email">
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
      <a
        tabIndex={1}
        href="https://github.com/eviemcn"
        target="_blank"
        title="GitHub"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        tabIndex={1}
        href="https://www.linkedin.com/in/evie-mcnaughton/"
        target="_blank"
        title="LinkedIn"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a
        href="https://www.pinterest.nz/eviemcnaughton/boards/"
        target="_blank"
        title="Pinterest"
      >
        <FontAwesomeIcon icon={faPinterest} />
      </a>
      <a
        href="https://www.instagram.com/evietriesdrawing/"
        target="_blank"
        title="Instagram"
      >
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a
        href="https://open.spotify.com/user/12140180831"
        target="_blank"
        title="Spotify"
      >
        <FontAwesomeIcon icon={faSpotify} />
      </a>
    </FooterContainer>
  );
};
