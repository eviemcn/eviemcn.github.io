import axios from "axios";
import React, { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";
import {
  AlbumCover,
  AlbumCoverRight,
  AlbumText,
  AlbumTextLeft,
  AlbumTitle,
  AlbumWrapper,
  AlbumWrapperTextRight,
  ArtistTitle,
  DetailsWrapper,
  LoadingWrapper,
  PlayCount,
  SelectOption,
  SelectWrapper,
} from "./top-albums-styles";
import { ReactComponent as AlbumIcon } from "../../assets/album16.svg";
import { ReactComponent as ArtistIcon } from "../../assets/artist16.svg";
import { ReactComponent as SongIcon } from "../../assets/song16.svg";

export type Album = {
  artist: {
    url: string;
    name: string;
  };
  image: {
    size: string;
    "#text": string;
  }[];
  url: string;
  playcount: number;
  name: string;
};

const emptyAlbum = {
  artist: {
    url: "",
    name: "",
  },
  image: [{ size: "", "#text": "" }],
  url: "",
  playcount: 0,
  name: "",
};

const options = [
  { value: "1month", label: "Last 30 Days" },
  { value: "6month", label: "Last 6 Months" },
  { value: "overall", label: "Of All Time" },
];

const renderLeftOrRight = (album: Album, index: number, loading: boolean) => {
  const scale = Math.random();
  const albumSize = Math.floor(scale * 150) + 100;
  //console.log(index, albumSize);
  if (index % 2 === 0) {
    //console.log(album);
    return (
      <AlbumWrapperTextRight
        albumSize={albumSize}
        imageUrl={album?.image[0].size !== "" ? album?.image[3]["#text"] : ""}
        tabIndex="-1"
      >
        {album?.image[0].size !== "" ? (
          <>
            <AlbumCover
              albumSize={albumSize}
              imageUrl={album?.image[3]["#text"]}
            >
              <a
                style={{ display: "block", height: "100%" }}
                href={album?.url}
                target="_blank"
                tabIndex={-1}
              ></a>
            </AlbumCover>
          </>
        ) : null}
        <AlbumText>
          {loading ? null : (
            <>
              <AlbumTitle>
                <AlbumIcon />
                <a href={album?.url} target="_blank" tabIndex={-1}>
                  {album?.name}
                </a>
              </AlbumTitle>
              <ArtistTitle>
                <ArtistIcon />
                <p>{album?.artist.name}</p>
              </ArtistTitle>
              <PlayCount>
                <SongIcon />
                <p>Plays: {album?.playcount !== 0 ? album?.playcount : null}</p>
              </PlayCount>
            </>
          )}
        </AlbumText>
      </AlbumWrapperTextRight>
    );
  }
  return (
    <AlbumWrapper
      albumSize={albumSize}
      imageUrl={album?.image[0].size !== "" ? album?.image[3]["#text"] : ""}
      tabIndex="-1"
    >
      {album?.image[0].size !== "" ? (
        <>
          <AlbumCoverRight
            albumSize={albumSize}
            imageUrl={album?.image[3]["#text"]}
          >
            <a
              style={{ display: "block", height: "100%" }}
              href={album?.url}
              target="_blank"
              tabIndex={-1}
            ></a>
          </AlbumCoverRight>
        </>
      ) : null}
      <AlbumTextLeft albumSize={albumSize}>
        {loading ? null : (
          <>
            <AlbumTitle>
              <a href={album?.url} target="_blank" tabIndex={-1}>
                {album?.name}
              </a>
              <AlbumIcon />
            </AlbumTitle>
            <ArtistTitle>
              <p>{album?.artist.name}</p>
              <ArtistIcon />
            </ArtistTitle>
            <PlayCount>
              <p>Plays: {album?.playcount !== 0 ? album?.playcount : null}</p>

              <SongIcon />
            </PlayCount>
          </>
        )}
      </AlbumTextLeft>
    </AlbumWrapper>
  );
};

const getData = async (request: string) => {
  const data = await axios.get(request);
  return data;
};

export const getAlbums = async (period: string) => {
  const api_key = "ede34f68bfab5ab14120091e2f7d41d0";
  const user = "eviemcnaughton";
  const api_root = "https://ws.audioscrobbler.com/2.0/";

  const request = `${api_root}?method=user.gettopalbums&period=${period}&user=${user}&api_key=${api_key}&format=json`;

  try {
    const response = await getData(request);
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const TopAlbums = () => {
  const [albums, setAlbums] = useState<[Album]>();
  const [loading, setLoading] = useState(false);
  const [period, setPeriod] = useState<any>({
    value: "1month",
    label: "Last 30 Days",
  });

  useEffect(() => {
    setLoading(true);
    setAlbums([emptyAlbum]);
    getAlbums(period.value).then((output) => {
      setAlbums(output?.data?.topalbums.album);
      setLoading(false);
    });
  }, [period]);

  return (
    <>
      <div style={{ display: "flex" }}>
        <div style={{ width: "60%" }}>
          <LoadingWrapper loading={loading}>
            <Circles width="60" height="60" color="#A3B051" visible={loading} />
          </LoadingWrapper>
          <div style={{ paddingTop: "30px" }}>
            {albums?.map((album, index) => {
              return renderLeftOrRight(album, index, loading);
            })}
          </div>
        </div>
        <DetailsWrapper>
          <h1>Listening Habits</h1>
          <p>
            My most listened to albums on Spotify over different time periods,
            gathered using data from the Last.fm API.
          </p>
          <SelectWrapper>
            <div style={{ display: "flex" }}>
              <SelectOption
                lineDecoration={true}
                tabIndex="1"
                onClick={() => setPeriod(options[0])}
              >
                <p>{options[0].label}</p>
              </SelectOption>
              <SelectOption
                lineDecoration={true}
                tabIndex="1"
                onClick={() => setPeriod(options[1])}
              >
                <p>{options[1].label}</p>
              </SelectOption>
              <SelectOption tabIndex="1" onClick={() => setPeriod(options[2])}>
                <p>{options[2].label}</p>
              </SelectOption>
            </div>
          </SelectWrapper>
        </DetailsWrapper>
      </div>
    </>
  );
};
