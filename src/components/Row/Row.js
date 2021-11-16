import React, { useState, useEffect } from "react";
import axios from "../../api/axios";
import "./Row.css";
import Youtube from "react-youtube";
// const movieTrailer = require('movie-trailer')
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original";

// options for the movie trailer
const opts = {
  height: "390",
  width: "100%",
};

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");


  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);

    }
    fetchData();

  }, [fetchUrl]);




  // a function that is searching for the movie url when clicking on the movie base on the name
  const handleMovieTrailer = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      // searching for a valid trailer url
      movieTrailer(movie?.title || movie?.name || movie?.original_name)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          // setting the trailer url to the state
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => alert(error));
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleMovieTrailer(movie)}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
            alt={movie.name}
          />
        ))}
      </div>
      {/* if the trailer url is not empty, then we will render the trailer */}
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default React.memo(Row);