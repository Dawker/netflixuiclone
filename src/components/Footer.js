import React from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";


const Footer = () => {
  return (
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
  )
}

export default Footer
