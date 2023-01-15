import styled from "styled-components";
import defaultAlbum from "../../assets/compact-disc-solid.svg";

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
`;

export const SelectWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: right;
  padding-top: 50px;
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
  :active {
    > p {
      color: pink;
    }
  }
`;

export const LoadingWrapper = styled.div<{
  loading?: boolean;
}>`
  padding-top: ${(props: any) => (props.loading ? `20%` : `0`)};
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const AlbumTitle = styled.div`
  display: flex;
  align-items: center;
`;

export const ArtistTitle = styled.div`
  display: flex;
  align-items: center;
`;

export const PlayCount = styled.div`
  display: flex;
  align-items: center;
`;

export const AlbumText = styled.div`
  ${AlbumTitle}, ${ArtistTitle}, ${PlayCount} {
    > a,
    p {
      margin: 0;
      text-align: left;
      padding-left: 4px;
      opacity: 0.1;
      transition: 0.2s;
    }
    > svg {
      opacity: 0.2;
      transition: 0.2s;
    }
    padding-left: 12px;
  }
  ${AlbumTitle} {
    > a {
      color: black;
      text-decoration: none;
    }
    padding-bottom: 18px;
    font-family: "Bold";
  }
  ${ArtistTitle}, ${PlayCount} {
    font-size: 14px;
    padding-bottom: 1.5%;
    font-family: "Serif";
  }
  position: absolute;
  left: 31%;
  width: 30%;
`;

export const AlbumTextLeft = styled.div`
  ${AlbumTitle}, ${ArtistTitle}, ${PlayCount} {
    > a,
    p {
      margin: 0;
      text-align: right;
      padding-right: 4px;
      opacity: 0.1;
      transition: 0.2s;
    }
    > svg {
      opacity: 0.2;
      transition: 0.2s;
    }
    justify-content: flex-end;
    padding-right: 12px;
  }
  ${AlbumTitle} {
    > a {
      color: black;
      text-decoration: none;
    }
    padding-bottom: 18px;
    font-family: "Bold";
  }
  ${ArtistTitle}, ${PlayCount} {
    font-size: 14px;
    padding-bottom: 1.5%;
    font-family: "Serif";
  }
  position: absolute;
  right: 69.5%;
  width: 30%;
`;

export const AlbumCover = styled.div<{
  imageUrl?: string;
  albumSize: number;
}>`
  background-image: url(${(props: any) =>
    props.imageUrl !== "" ? props.imageUrl : defaultAlbum});
  background-size: cover;
  width: ${(props: any) => (props.imageUrl !== "" ? props.albumSize : `120`)}px;
  height: ${(props: any) =>
    props.imageUrl !== "" ? props.albumSize : `120`}px;
  margin-right: 50%;
  filter: grayscale(100%);
  transition: 0.2s;
`;

export const AlbumCoverRight = styled.div<{
  imageUrl?: string;
  albumSize: number;
}>`
  background-image: url(${(props: any) =>
    props.imageUrl !== "" ? props.imageUrl : defaultAlbum});
  background-size: cover;
  width: ${(props: any) => (props.imageUrl !== "" ? props.albumSize : `120`)}px;
  height: ${(props: any) =>
    props.imageUrl !== "" ? props.albumSize : `120`}px;
  margin-left: 50%;
  filter: grayscale(100%);
  transition: 0.2s;
`;

export const AlbumWrapper = styled.div<{
  imageUrl?: string;
  albumSize: number;
}>`
  display: flex;
  align-items: flex-end;
  //background-color: pink;
  margin-top: 18px;
  border-radius: 5px;
  :hover,
  :focus {
    outline: none;
    ${AlbumCoverRight} {
      filter: none;
      width: ${(props: any) =>
        props.imageUrl !== "" ? props.albumSize + 10 : `130`}px;
      height: ${(props: any) =>
        props.imageUrl !== "" ? props.albumSize + 10 : `130`}px;
      box-shadow: 2px 2px 5px #f5f4f4;
    }
    ${AlbumTextLeft} {
      ${AlbumTitle}, ${ArtistTitle}, ${PlayCount} {
        > a,
        p {
          opacity: 1;
        }
        > a:hover {
          color: #a3b051;
        }
        > svg {
          opacity: 1;
        }
      }
    }
  }
`;

export const AlbumWrapperTextRight = styled.div<{
  imageUrl?: string;
  albumSize: number;
}>`
  display: flex;
  align-items: flex-end;
  //background-color: pink;
  margin-top: 18px;
  border-radius: 5px;
  justify-content: flex-end;
  :hover,
  :focus {
    outline: none;
    ${AlbumCover} {
      filter: none;
      width: ${(props: any) =>
        props.imageUrl !== "" ? props.albumSize + 10 : `130`}px;
      height: ${(props: any) =>
        props.imageUrl !== "" ? props.albumSize + 10 : `130`}px;
      box-shadow: 2px 2px 5px #f5f4f4;
    }
    ${AlbumText} {
      ${AlbumTitle}, ${ArtistTitle}, ${PlayCount} {
        > a,
        p {
          opacity: 1;
        }
        > a:hover {
          color: #a3b051;
        }
        > svg {
          opacity: 1;
        }
      }
    }
  }
`;
