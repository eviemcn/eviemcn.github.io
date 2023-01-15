import styled from "styled-components";

export const TextWrapper = styled.div`
  font-family: "Serif";
  text-align: left;
  width: 50%;
  > h1 {
    font-family: "Bold";
    letter-spacing: 3px;
  }
  > h3 {
    > a {
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
