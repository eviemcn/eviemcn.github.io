import styled from "styled-components";

export const Arrow = styled.div`
  padding-left: 5px;
`;

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
  }
  > div {
    > p {
      > a {
        outline: none;
        text-decoration: none;
        color: black;
        :hover,
        :focus {
          color: #a3b051;
          outline: none;
          ${Arrow} {
            display: block;
          }
        }
        :focus-visible {
          color: #a3b051;
          outline: none;
          ${Arrow} {
            display: block;
          }
        }
        :visited {
          color: black;
        }
      }
    }
  }
`;

export const TextWrapperLeft = styled.div`
  font-family: "Serif";
  text-align: right;
  width: 27%;
  padding-top: 20px;
  position: absolute;
  right: 70%;
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
    font-family: "Bold";
    letter-spacing: 1px;
  }
`;

export const TextWrapperRight = styled.div`
  font-family: "Serif";
  text-align: left;
  position: absolute;
  padding-top: 20px;
  left: 32%;
  width: 27%;
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
    font-family: "Bold";
    letter-spacing: 1px;
  }
`;

export const ImagesWrapper = styled.div`
  display: flex;
  flex-flow: column;
  flex-wrap: wrap;
  align-content: flex-end;
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
  margin-left: 50%;
  ${ProjectImage} {
    border: 2px solid #a3b051;
    box-shadow: 5px 5px #a3b051;
  }
`;

export const ImagesLeft = styled.div`
  margin-right: 50%;
  width: 100%;
  ${ProjectImage} {
    border: 2px solid #a3b051;
    box-shadow: -5px 5px #a3b051;
  }
`;

export const ProjectCard = styled.div`
  display: flex;
  padding-top: 50px;
`;
