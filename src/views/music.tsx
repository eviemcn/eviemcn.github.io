import React from "react";
import { TopAlbums } from "../components/top-albums/top-albums";
import styled from "styled-components";
import ScrollToTop from "react-scroll-to-top";
import { ReactComponent as ArrowUp } from "../assets/arrowUp16.svg";

export const ArrowWrapper = styled.div<{
  showArrow?: boolean;
}>`
  > svg {
    width: 40px;
    height: 40px;
  }
  :hover {
    > svg {
      > path {
        fill: #a3b051;
      }
    }
  }
`;

export const Music = () => {
  return (
    <div className="Music">
      <ScrollToTop
        smooth
        component={
          <ArrowWrapper>
            <ArrowUp />
          </ArrowWrapper>
        }
        style={{ boxShadow: "none" }}
      />
      <TopAlbums />
    </div>
  );
};
