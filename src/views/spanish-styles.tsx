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
      font-family: "Serif Italic";
      text-decoration: none;
      :hover {
        color: #a3b051;
      }
    }
  }
`;

export const SelectWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  @media only screen and (min-width: 850px) {
    justify-content: right;
    padding-top: 50px;
  }
  padding-top: 30px;
`;

export const SelectOption = styled.div<{
  lineDecoration?: boolean;
}>`
  font-family: "Bold";
  cursor: pointer;
  letter-spacing: 1px;
  padding: 0 12px;
  > p {
    margin: 0;
  }
  border-right-style: ${(props: any) =>
    props.lineDecoration ? `solid` : `none`};
  :hover,
  :focus {
    > p {
      color: #a3b051;
    }
    outline: none;
  }
`;

export const TranslationText = styled.p<{
  showTranslation?: boolean;
}>`
  font-family: "Serif";
  opacity: ${(props: any) => (props.showTranslation ? `1` : `0.3`)};
`;

export const SpanishText = styled.h1`
  @media only screen and (min-width: 850px) {
    font-family: "Bold";
  }
  font-family: "Regular";
  letter-spacing: 1px;
  cursor: pointer;
  :hover {
    color: #a3b051;
  }
`;

export const SpanishWrapper = styled.div<{
  random?: boolean;
}>`
  @media only screen and (min-width: 850px) {
    width: 75%;
    padding-top: ${(props: any) => (props.random ? `140px` : `0`)};
  }
`;
