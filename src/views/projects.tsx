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
  ProjectCard,
  ProjectImage,
  TextWrapperLeft,
  TextWrapperRight,
} from "./project-styles";

export const Projects = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [images, setImages] = useState([""]);
  const [showArrow, setShowArrow] = useState(null);

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
      <div style={{ width: "60%", paddingBottom: "30px", paddingTop: "-10px" }}>
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
              <ProjectImage
                onClick={() => {
                  setImages([
                    "../assets/projects/website/my-web.png",
                    "../assets/projects/website/my-web2.png",
                    "../assets/projects/website/my-web3.png",
                  ]);
                  openImageViewer(1);
                }}
                imageUrl="../assets/projects/website/my-web2.png"
              />
              <ProjectImage
                onClick={() => {
                  setImages([
                    "../assets/projects/website/my-web.png",
                    "../assets/projects/website/my-web2.png",
                    "../assets/projects/website/my-web3.png",
                  ]);
                  openImageViewer(2);
                }}
                imageUrl="../assets/projects/website/my-web3.png"
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
          <TextWrapperLeft>
            <h3>
              <a target="_blank" href="https://dooleymcnaughtondental.co.nz/">
                Dooley & McNaughton Dental Website
              </a>
            </h3>
            <p>
              A website for Dooley & McNaughton Dental. The client wanted an
              informative and easy to use website with minimal pages to ensure
              ease of navigation.
            </p>
            <small>Created website in September 2019</small>
          </TextWrapperLeft>
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
              <ProjectImage
                onClick={() => {
                  setImages([
                    "../assets/projects/dental/dental-home.png",
                    "../assets/projects/dental/dental-contact.png",
                  ]);
                  openImageViewer(1);
                }}
                imageUrl="../assets/projects/dental/dental-contact.png"
              />
            </ImagesWrapper>
          </ImagesRight>
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
              <ProjectImage
                onClick={() => {
                  setImages([
                    "../assets/projects/granology/granology1.png",
                    "../assets/projects/granology/granology2.png",
                    "../assets/projects/granology/granology3.png",
                  ]);
                  openImageViewer(1);
                }}
                imageUrl="../assets/projects/granology/granology2.png"
              />
              <ProjectImage
                onClick={() => {
                  setImages([
                    "../assets/projects/granology/granology1.png",
                    "../assets/projects/granology/granology2.png",
                    "../assets/projects/granology/granology3.png",
                  ]);
                  openImageViewer(2);
                }}
                imageUrl="../assets/projects/granology/granology3.png"
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
        <ProjectCard id="balsamiq">
          <TextWrapperLeft>
            <h3>Balsamiq Wireframe Mockup</h3>
            <p>
              Created a mockup using Balsamiq to practise using a wireframing
              tool. The mockup is an online learning tool for studying Te Reo
              Māori.
            </p>
            <small>Prototype</small>
          </TextWrapperLeft>
          <ImagesRight>
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
              <ProjectImage
                onClick={() => {
                  setImages([
                    "../assets/projects/balsamiq/Ako-landing-balsamiq.JPG",
                    "../assets/projects/balsamiq/ako-learn-balsamiq.JPG",
                    "../assets/projects/balsamiq/Ako-login-balsamiq.JPG",
                    "../assets/projects/balsamiq/ako-topic-balsamiq.JPG",
                  ]);
                  openImageViewer(1);
                }}
                imageUrl="../assets/projects/balsamiq/ako-learn-balsamiq.JPG"
              />
              <ProjectImage
                onClick={() => {
                  setImages([
                    "../assets/projects/balsamiq/Ako-landing-balsamiq.JPG",
                    "../assets/projects/balsamiq/ako-learn-balsamiq.JPG",
                    "../assets/projects/balsamiq/Ako-login-balsamiq.JPG",
                    "../assets/projects/balsamiq/ako-topic-balsamiq.JPG",
                  ]);
                  openImageViewer(2);
                }}
                imageUrl="../assets/projects/balsamiq/Ako-login-balsamiq.JPG"
              />
              <ProjectImage
                onClick={() => {
                  setImages([
                    "../assets/projects/balsamiq/Ako-landing-balsamiq.JPG",
                    "../assets/projects/balsamiq/ako-learn-balsamiq.JPG",
                    "../assets/projects/balsamiq/Ako-login-balsamiq.JPG",
                    "../assets/projects/balsamiq/ako-topic-balsamiq.JPG",
                  ]);
                  openImageViewer(3);
                }}
                imageUrl="../assets/projects/balsamiq/ako-topic-balsamiq.JPG"
              />
            </ImagesWrapper>
          </ImagesRight>
        </ProjectCard>
      </div>
      <DetailsWrapper>
        <h1>Projects</h1>
        <p>Past and current projects I am working on or have worked on.</p>
        <h3>Jump to:</h3>
        <div>
          <p style={{ display: "flex", justifyContent: "flex-end" }}>
            <a
              href="#website"
              onMouseOver={() => setShowArrow(0)}
              onMouseLeave={() => setShowArrow(null)}
            >
              This Website
            </a>
            <Arrow
              style={{ display: showArrow === 0 ? "inline-flex" : "none" }}
            >
              <ArrowLeft fill="black" />
            </Arrow>
          </p>
          <p style={{ display: "flex", justifyContent: "flex-end" }}>
            <a
              href="#dental-website"
              onMouseOver={() => setShowArrow(1)}
              onMouseLeave={() => setShowArrow(null)}
            >
              Dooley & McNaughton Dental Website
            </a>
            <Arrow
              style={{ display: showArrow === 1 ? "inline-flex" : "none" }}
            >
              <ArrowLeft />
            </Arrow>
          </p>
          <p style={{ display: "flex", justifyContent: "flex-end" }}>
            <a
              href="#granology"
              onMouseOver={() => setShowArrow(2)}
              onMouseLeave={() => setShowArrow(null)}
            >
              Granology
            </a>
            <Arrow
              style={{ display: showArrow === 2 ? "inline-flex" : "none" }}
            >
              <ArrowLeft />
            </Arrow>
          </p>
          <p style={{ display: "flex", justifyContent: "flex-end" }}>
            <a
              href="#balsamiq"
              onMouseOver={() => setShowArrow(3)}
              onMouseLeave={() => setShowArrow(null)}
            >
              Balsamiq Wireframe Mockup
            </a>
            <Arrow
              style={{ display: showArrow === 3 ? "inline-flex" : "none" }}
            >
              <ArrowLeft />
            </Arrow>
          </p>
        </div>
      </DetailsWrapper>

      {isViewerOpen && (
        <ImageViewer
          backgroundStyle={{
            zIndex: 10,
            backgroundColor: "rgb(0,0,0,0.9)",
            padding: "0 200px",
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
