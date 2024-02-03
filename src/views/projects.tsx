import React, { useState, useCallback } from "react";
import ScrollToTop from "react-scroll-to-top";
import ImageViewer from "react-simple-image-viewer";
import { ArrowWrapper } from "./music";
import { ReactComponent as ArrowUp } from "../assets/arrowUp16.svg";
import { ReactComponent as ArrowLeft } from "../assets/arrowLeft16.svg";
import { ReactComponent as ArrowRight } from "../assets/arrowRight16.svg";
import { ReactComponent as Close } from "../assets/close16.svg";
import {
  Arrow,
  DetailsWrapper,
  ImagesLeft,
  ImagesRight,
  ImagesWrapper,
  NavListItem,
  ProjectCard,
  ProjectImage,
  ProjectsWrapper,
  TextWrapperLeft,
  TextWrapperRight,
} from "./project-styles";

export const Projects = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [images, setImages] = useState([""]);
  const [showArrow, setShowArrow] = useState(99);

  const openImageViewer = useCallback((index: number) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div className="Projects">
      <ScrollToTop
        smooth
        component={
          <ArrowWrapper>
            <ArrowUp />
          </ArrowWrapper>
        }
        style={{ boxShadow: "none" }}
      />
      <DetailsWrapper>
        <h1>Projects</h1>
        <p>Past and current projects I am working on or have worked on.</p>
        <h3>Jump to:</h3>
        <div>
          <NavListItem>
            <a
              href="#website"
              onMouseOver={() => setShowArrow(0)}
              onMouseLeave={() => setShowArrow(99)}
            >
              This Website
            </a>
            <Arrow
              style={{ display: showArrow === 0 ? "inline-flex" : "none" }}
            >
              <ArrowLeft fill="black" />
            </Arrow>
          </NavListItem>
          <NavListItem>
            <a
              href="#dental-website"
              onMouseOver={() => setShowArrow(1)}
              onMouseLeave={() => setShowArrow(99)}
            >
              Dooley & McNaughton Dental Website
            </a>
            <Arrow
              style={{ display: showArrow === 1 ? "inline-flex" : "none" }}
            >
              <ArrowLeft />
            </Arrow>
          </NavListItem>
          <NavListItem>
            <a
              href="#granology"
              onMouseOver={() => setShowArrow(2)}
              onMouseLeave={() => setShowArrow(99)}
            >
              Granology
            </a>
            <Arrow
              style={{ display: showArrow === 2 ? "inline-flex" : "none" }}
            >
              <ArrowLeft />
            </Arrow>
          </NavListItem>
          <NavListItem>
            <a
              href="#whakaara"
              onMouseOver={() => setShowArrow(3)}
              onMouseLeave={() => setShowArrow(99)}
            >
              Whakaara Android Designs
            </a>
            <Arrow
              style={{ display: showArrow === 3 ? "inline-flex" : "none" }}
            >
              <ArrowLeft />
            </Arrow>
          </NavListItem>
          <NavListItem>
            <a
              href="#balsamiq"
              onMouseOver={() => setShowArrow(4)}
              onMouseLeave={() => setShowArrow(99)}
            >
              Balsamiq Wireframe Mockup
            </a>
            <Arrow
              style={{ display: showArrow === 4 ? "inline-flex" : "none" }}
            >
              <ArrowLeft />
            </Arrow>
          </NavListItem>
        </div>
      </DetailsWrapper>
      <ProjectsWrapper>
        <ProjectCard id="website">
          <ImagesLeft>
            <ImagesWrapper>
              <ProjectImage
                onClick={() => {
                  setImages([
                    "../assets/projects/website/my-web.png",
                    "../assets/projects/website/my-web2.png",
                    "../assets/projects/website/my-web3.png",
                  ]);
                  openImageViewer(0);
                }}
                imageUrl="../assets/projects/website/my-web.png"
              />
            </ImagesWrapper>
          </ImagesLeft>
          <TextWrapperRight>
            <h3>This Website</h3>
            <p>
              A personal website to showcase my projects as well as build on my
              web development skills.
              <br />
              Previous iterations pictured.
            </p>
            <small>Ongoing project</small>
          </TextWrapperRight>
        </ProjectCard>
        <ProjectCard id="dental-website">
          <ImagesRight>
            <ImagesWrapper>
              <ProjectImage
                onClick={() => {
                  setImages([
                    "../assets/projects/dental/dental-home.png",
                    "../assets/projects/dental/dental-contact.png",
                  ]);
                  openImageViewer(0);
                }}
                imageUrl="../assets/projects/dental/dental-home.png"
              />
            </ImagesWrapper>
          </ImagesRight>
          <TextWrapperLeft>
            <h3>
              <a target="_blank" href="https://dooleymcnaughtondental.co.nz/">
                Dooley & McNaughton Website
              </a>
            </h3>
            <p>
              The client wanted an informative and easy to use website with
              minimal pages.
            </p>
            <small>Created website in September 2019</small>
          </TextWrapperLeft>
        </ProjectCard>
        <ProjectCard id="granology">
          <ImagesLeft>
            <ImagesWrapper>
              <ProjectImage
                onClick={() => {
                  setImages([
                    "../assets/projects/granology/granology1.png",
                    "../assets/projects/granology/granology2.png",
                    "../assets/projects/granology/granology3.png",
                  ]);
                  openImageViewer(0);
                }}
                imageUrl="../assets/projects/granology/granology1.png"
              />
            </ImagesWrapper>
          </ImagesLeft>
          <TextWrapperRight>
            <h3>Granology</h3>
            <p>
              Designed branding and packaging for small health cereal company,
              Granology.
            </p>
            <small>Branding created in July 2019</small>
          </TextWrapperRight>
        </ProjectCard>
        <ProjectCard id="whakaara">
          <ImagesRight>
            <ImagesWrapper>
              <ProjectImage
                onClick={() => {
                  setImages([
                    "../assets/projects/whakaara/whakaara.png",
                    "../assets/projects/whakaara/whakaara2.png",
                    "../assets/projects/whakaara/whakaara3.png",
                  ]);
                  openImageViewer(0);
                }}
                imageUrl="../assets/projects/whakaara/whakaara.png"
              />
            </ImagesWrapper>
          </ImagesRight>
          <TextWrapperLeft>
            <h3>
              <a
                target="_blank"
                href="https://www.figma.com/file/q02rqZ8gLY5tr4453EaOFc/Whakaara-Design?type=design&node-id=0%3A1&mode=design&t=OniAYxn13a7PWGbM-1"
              >
                Whakaara Designs
              </a>
            </h3>
            <p>
              Created Android designs using Figma to practise using a Figma in
              my personal time. The mockup is an <br />
              <a target="_blank" href="https://github.com/ahudson20/whakaara">
                alarm clock application.
              </a>
            </p>
            <small>Prototype</small>
          </TextWrapperLeft>
        </ProjectCard>
        <ProjectCard id="balsamiq">
          <ImagesLeft>
            <ImagesWrapper>
              <ProjectImage
                onClick={() => {
                  setImages([
                    "../assets/projects/balsamiq/Ako-landing-balsamiq.JPG",
                    "../assets/projects/balsamiq/ako-learn-balsamiq.JPG",
                    "../assets/projects/balsamiq/Ako-login-balsamiq.JPG",
                    "../assets/projects/balsamiq/ako-topic-balsamiq.JPG",
                  ]);
                  openImageViewer(0);
                }}
                imageUrl="../assets/projects/balsamiq/Ako-landing-balsamiq.JPG"
              />
            </ImagesWrapper>
          </ImagesLeft>
          <TextWrapperRight>
            <h3>Balsamiq Wireframe Mockup</h3>
            <p>
              Created a mockup using Balsamiq to practise using a wireframing
              tool. The mockup is an online learning tool for studying Te Reo
              Māori.
            </p>
            <small>Prototype</small>
          </TextWrapperRight>
        </ProjectCard>
      </ProjectsWrapper>

      {isViewerOpen && (
        <ImageViewer
          backgroundStyle={{
            zIndex: 10,
            backgroundColor: "rgb(0,0,0,0.9)",
            padding: "0 15%",
          }}
          src={images}
          currentIndex={currentImage}
          disableScroll={false}
          closeOnClickOutside={true}
          onClose={closeImageViewer}
          leftArrowComponent={
            <ArrowLeft fill="white" style={{ width: "36px", height: "36px" }} />
          }
          rightArrowComponent={
            <ArrowRight
              fill="white"
              style={{ width: "36px", height: "36px" }}
            />
          }
          closeComponent={
            <Close fill="white" style={{ width: "36px", height: "36px" }} />
          }
        />
      )}
    </div>
  );
};
