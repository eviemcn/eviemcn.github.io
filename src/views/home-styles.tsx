import styled from "styled-components";

export const DetailsWrapper = styled.div`
  padding-top: 20px;
  @media only screen and (min-width: 850px) {
    padding-top: 0;
    position: fixed;
    width: 35%;
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
    color: #a3b051;
    margin: 0;
  }
  > p {
    > a {
      font-family: "Bold";
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
    height: 24%;
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
  background-color: ${(props: any) => (props.filter ? `#a3b05100` : `#a3b051`)};
  transition: 0.2s;
  :hover {
    filter: ${(props: any) =>
      props.filter || props.imageUrl === "" ? `none` : `grayscale(100%)`};
    background-color: ${(props: any) =>
      props.filter ? `#a3b051` : "#a3b05100"};
  }
`;

export const SketchGrid = styled.div`
  @media only screen and (min-width: 850px) {
    width: 70%;
    margin-left: 10%;
    margin-top: 5%;
  }
  @media only screen and (min-width: 1440px) {
    width: 70%;
    margin-left: 8%;
    margin-bottom: 0;
  }
  display: flex;
  height: 70vmin;
  :hover {
    > svg {
      > path {
        fill: #a3b051;
      }
    }
  }
`;

export const RefreshWrapper = styled.div`
  display: flex;
  @media only screen and (min-width: 850px) {
    position: fixed;
    width: 25%;
    right: 5%;
    bottom: 10%;
    justify-content: flex-end;
  }
`;

export const Refresh = styled.div`
  font-family: "Regular";
  display: flex;
  align-items: center;
  border-radius: 3px;
  border: 1px solid #a3b051;
  > svg {
    fill: #a3b051;
  }
  color: #a3b051;
  padding: 10px;
  > p {
    padding-left: 5px;
    margin: 0;
    user-select: none;
  }
  :hover {
    color: white;
    background-color: #a3b051;
    > svg {
      fill: white;
    }
  }
  cursor: pointer;
`;

export const TextWrapper = styled.div`
  font-family: "Regular";
  text-align: left;
  width: 50%;
  > h1 {
    @media only screen and (min-width: 850px) {
      font-family: "Bold";
    }
    font-family: "Regular";
    letter-spacing: 3px;
  }
`;
