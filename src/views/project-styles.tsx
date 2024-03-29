import styled from "styled-components";

export const Arrow = styled.div`
  padding-left: 5px;
`;

export const NavListItem = styled.p`
  display: flex;
  > a {
    outline: none;
    color: black;
    :hover,
    :focus {
      color: #a3b051;
      outline: none;
    }
    :focus-visible {
      color: #a3b051;
      outline: none;
    }
    :visited {
      color: black;
    }
  }
  @media only screen and (min-width: 850px) {
    justify-content: flex-end;
    > a {
      text-decoration: none;
    }
  }
`;

export const DetailsWrapper = styled.div`
  padding-top: 20px;
  @media only screen and (min-width: 850px) {
    padding-top: 0;
    position: fixed;
    width: 25%;
    right: 5%;
    top: 20%;
    text-align: right;
  }
  font-family: "Regular";
  text-align: left;
  > h1 {
    @media only screen and (min-width: 850px) {
      font-family: "Bold";
    }
    font-family: "Regular";
    letter-spacing: 3px;
  }
  > h3 {
    @media only screen and (min-width: 850px) {
      font-family: "Bold";
    }
    font-family: "Regular";
    letter-spacing: 1px;
  }
`;

export const TextWrapperLeft = styled.div`
  @media only screen and (min-width: 1040px) {
    text-align: right;
    width: 27%;
    position: absolute;
    right: 70%;
  }
  text-align: left;
  font-family: "Regular";
  > h1 {
    font-family: "Bold";
    letter-spacing: 3px;
  }
  > h3 {
    > a {
      color: black;
      outline: none;
      text-decoration: none;
      :hover,
      :focus {
        color: #a3b051;
        outline: none;
      }
    }
    @media only screen and (min-width: 850px) {
      font-family: "Bold";
    }
    font-family: "Regular";
    letter-spacing: 1px;
  }
`;

export const TextWrapperRight = styled.div`
  @media only screen and (min-width: 1040px) {
    position: absolute;
    left: 32.5%;
    width: 27%;
    padding-bottom: 10px;
  }
  text-align: left;
  font-family: "Regular";
  > h1 {
    font-family: "Bold";
    letter-spacing: 3px;
  }
  > h3 {
    > a {
      outline: none;
      text-decoration: none;
      color: black;
      :hover,
      :focus {
        color: #a3b051;
        outline: none;
      }
      :visited {
        color: black;
      }
    }
    color: black;
    @media only screen and (min-width: 850px) {
      font-family: "Bold";
    }
    font-family: "Regular";
    letter-spacing: 1px;
  }
`;

export const ImagesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media only screen and (min-width: 1040px) {
    flex-flow: column;
    flex-wrap: wrap;
    align-content: flex-end;
  }
`;

export const ProjectsWrapper = styled.div`
  @media only screen and (min-width: 850px) {
    width: 60%;
    padding-top: -10px;
  }
  padding-top: 10px;
  padding-bottom: 30px;
`;

export const ProjectImage = styled.div<{
  imageUrl: string;
}>`
  background-image: url(${(props: any) => props.imageUrl});
  background-size: cover;
  width: 300px;
  height: 150px;
  filter: grayscale(100%);
  margin-bottom: 15px;
  transition: 0.2s;
  :hover {
    filter: none;
    cursor: zoom-in;
  }
`;

export const ImagesRight = styled.div`
  @media only screen and (min-width: 1040px) {
    margin-left: 50%;
  }
  ${ProjectImage} {
    border: 2px solid #a3b051;
    box-shadow: 5px 5px #a3b051;
    margin-right: 20px;
    @media only screen and (min-width: 850px) {
      margin-right: 0;
    }
  }
`;

export const ImagesLeft = styled.div`
  @media only screen and (min-width: 1040px) {
    margin-right: 50%;
  }
  width: 100%;
  ${ProjectImage} {
    border: 2px solid #a3b051;
    box-shadow: -5px 5px #a3b051;
    margin-right: 20px;
    @media only screen and (min-width: 850px) {
      margin-right: 0;
    }
  }
`;

export const ProjectCard = styled.div`
  @media only screen and (min-width: 1040px) {
    display: flex;
  }
  padding-top: 50px;
`;
