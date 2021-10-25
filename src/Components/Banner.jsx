import React, { useEffect, useState } from "react";
import axios from "../API/axios";
import requests from "../API/request";
import "../styles/banner.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  return (
    <>
      <header
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `linear-gradient(180deg, transparent, rgb(37, 37, 37, 0.61), #111), url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
          backgroundPosition: "center",
        }}
      >
        <div id="overlay"></div>
        <div className="banner__content">
          <h1 className="title">
            {movie?.title || movie?.name || movie?.original_name}
          </h1>

          <p className="banner__desc">{movie?.overview}</p>

          <div className="banner__buttons">
            <button className="banner__button">
              <PlayArrowIcon />
              Play
            </button>
            <button className="banner__button banner__button2">
              <InfoOutlinedIcon />
              More info
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Banner;
