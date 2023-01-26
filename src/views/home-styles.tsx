import styled from "styled-components";

export const DetailsWrapper = styled.div`
  position: fixed;
  width: 25%;
  right: 5%;
  top: 20%;
  font-family: "Serif";
  text-align: right;
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
  width: 75%;
`;

export const Sketch = styled.div<{
  imageUrl: string;
  filter: boolean;
}>`
  width: 25%;
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
  width: 60%;
  height: 80vmin;
  margin-top: 70px;
  margin-left: 15%;
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
