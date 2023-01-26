import styled from "styled-components";

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
  font-family: "Serif";
  text-align: left;
  > h1 {
    font-family: "Bold";
    letter-spacing: 3px;
  }
  > h3 {
    font-family: "Bold";
    letter-spacing: 1px;
    color: #a3b051;
    margin: 0;
  }
  > p {
    > a {
      font-family: "Serif Italic";
      text-decoration: none;
      :hover {
        color: #a3b051;
      }
    }
  }
`;

export const SketchWrapper = styled.div`
  width: 100%;
  @media only screen and (min-width: 850px) {
    width: 75%;
  }
`;

export const SketchRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 40%;
  @media only screen and (min-width: 850px) {
    height: 28%;
    padding-bottom: 0;
  }
  @media only screen and (min-width: 1440px) {
    display: flex;
    flex-wrap: nowrap;
    height: 22%;
    padding-bottom: 0;
  }
`;

export const Sketch = styled.div<{
  imageUrl: string;
  filter: boolean;
}>`
  @media only screen and (min-width: 1440px) {
    width: 25%;
  }
  @media only screen and (min-width: 850px) {
    width: 33.3%;
  }
  width: 50%;
  height: 100%;
  background-image: url(${(props: any) => props.imageUrl});
  background-size: cover;
  background-position: center;
  filter: ${(props: any) => (props.filter ? `grayscale(100%)` : `none`)};
  transition: 0.2s;
  :hover {
    filter: ${(props: any) =>
      props.filter || props.imageUrl === "" ? `none` : `grayscale(100%)`};
    background-color: #a3b051;
  }
`;

export const SketchGrid = styled.div`
  @media only screen and (min-width: 850px) {
    width: 80%;
  }
  @media only screen and (min-width: 1440px) {
    width: 60%;
    margin-left: 15%;
  }
  height: 80vmin;
  margin-top: 70px;
`;

export const TextWrapper = styled.div`
  font-family: "Serif";
  text-align: left;
  width: 50%;
  > h1 {
    font-family: "Bold";
    letter-spacing: 3px;
  }
`;
