import React from "react";
import "./App.css";

import Row from "./components/Row";
import requests from "./api/requests";
// import originals from "./originals";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import FavoriteIcon from "@material-ui/icons/Favorite";

function App({ handleClick }) {
  return (
    <div className="app">
      <Navbar />
      <Banner handleClick={handleClick} />
      <Row
        key={1}
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row key={2} title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row key={3} title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row key={4} title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row key={5} title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Row key={6} title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row key={7} title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row key={8} title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
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
