import React, { useState, useEffect } from "react";
import axios from "../api/axios";
import "./Row.css";
import Youtube from "react-youtube";
// const movieTrailer = require('movie-trailer')
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [trailerUrl, setTrailerUrl] = useState("");


  useEffect(() => {
    let mounted = true;
    var timer;
    setLoading(true)

    if (mounted === true) {
      async function fetchData() {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
        timer = setTimeout(() => {
          setLoading(false)

        }, 3000);
      }
      fetchData();

    }

    return () => {
      clearTimeout(timer);
      mounted = false;
    }

  }, [fetchUrl]);



  let opts = {
    height: "390",
    width: "100%",
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  console.log("rerender ")

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          loading === true ? (
            <div className={isLargeRow ? "containerLarge" : "container"} key={movie.id}
            >
              <div className={isLargeRow ? "overlayLarge pulse" : "overlay pulse"}></div>
            </div>
          ) : (
            <img
              key={movie.id}
              onClick={() => handleClick(movie)}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
              alt={movie.name}
            />
          )
        ))}
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
