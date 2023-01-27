import "./App.css";
import React from "react";
import { Home } from "./views/home";
import { Header } from "./components/header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Projects } from "./views/projects";
import { Music } from "./views/music";
import { Footer } from "./components/footer";
import styled from "styled-components";
import "./assets/fonts/Chapaza.ttf";
import "./assets/fonts/Chapaza Italic.ttf";
import "./assets/fonts/Recoleta-RegularDEMO.otf";
import "./assets/fonts/AlteHaasGroteskBold.ttf";
import "./assets/fonts/AlteHaasGroteskRegular.ttf";
import "./assets/fonts/LiberationSerif-Regular.ttf";
import "./assets/fonts/LiberationSerif-Italic.ttf";
import "./assets/fonts/DAYROM__.ttf";
import { Spanish } from "./views/spanish";

export const PageContainer = styled.div`
  padding: 40px 30px 60px 30px;
`;

export const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <PageContainer>
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/projects"} element={<Projects />} />
            <Route path={"/music"} element={<Music />} />
            <Route path={"/spanish"} element={<Spanish />} />
          </Routes>
        </PageContainer>
        <Footer />
      </div>
    </Router>
  );
};
