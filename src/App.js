import React from "react";
import "./App.css";

import requests from "./api/requests";
// import originals from "./originals";
import { Navbar, Banner, Row } from "./components";
import FavoriteIcon from "@material-ui/icons/Favorite";

function App({ handleClick }) {
  return (
    <div className="app">
      <Navbar />
      <Banner handleClick={handleClick} />
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <footer className="app__footer">
        <small style={{ color: "white" }}>Made with</small>
        <FavoriteIcon className="app__icon" />
        <small className="app__ass" style={{ color: "white" }}>
          by
        </small>
        <a
          href="https://www.linkedin.com/in/manea-ionut-0414b11b6/"
          target="__blank"
        >
          Manea Ionut
        </a>
      </footer>
    </div>
  );
}

export default App;
