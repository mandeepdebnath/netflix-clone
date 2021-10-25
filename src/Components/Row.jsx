import React, { useEffect, useState } from "react";
import axios from "../API/axios";
import "../styles/row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const imgBaseUrl = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl, isLargeRow }) {
  // using useState hook to store values temporarily, the values get stored in the variable 'movies' when the setMovies functions triggers
  const [movies, setMovies] = useState([]);

  const [trailerUrl, setTrailerUrl] = useState(""); //getting trailer URL

  // a snippet of code which runs based on a specific condition/variable --> useEffect hook <-- we are gonna make a request to the movies database as soon as the Row component loads

  useEffect(() => {
    // if [], run the code once when the row loads and don't run again

    async function fetchData() {
      const request = await axios.get(fetchUrl);
      // console.log(request);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="row">
      {/* TITLE */}
      <h2 className="row__title">{title}</h2>

      {/* MOVIE POSTERS */}
      <div className="row__posters">
        {movies.map((movie) => {
          return (
            <img
              key={movie.id}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              src={`${imgBaseUrl}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
              title={movie?.title || movie?.name || movie?.original_name}
              onClick={() => handleClick(movie)}
            />
          );
        })}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
