import React, { useEffect, useState } from "react";
import logo from "./assets/logo.png";
import "./Navbar.css";

function Navbar() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener();
    };
  }, []);

  return (
    <div className={`navbar ${show && "navbar__black"}`}>
      <img className="navbar__logo" src={logo} alt="Netflix Logo" />

      <img
        className="navbar__avatar"
        src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
        alt="Netflix Logo"
      />
    </div>
  );
}

export default Navbar;
