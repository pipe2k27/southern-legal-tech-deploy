import React, { useState } from "react";
import "./css/Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [clicked, clicker] = useState(false);

  function handleClick(prevClicked) {
    clicker((prevClicked) => {
      return !prevClicked;
    });
  }

  return (
    <div className="header" id="header">
      <Link to="/">
        <img
          src={process.env.PUBLIC_URL + "/images/logo.png"}
          alt="logo-word"
          className="logo-word"
        ></img>
      </Link>

      <div className={clicked ? "navbar drop" : "navbar colapse"}>
        <Link to="/" className="nav-element">
          Home
        </Link>
        <Link to="/#footer" className="nav-element">
          Contacto
        </Link>
        <Link to="/create-document" className="nav-element">
          Documentos
        </Link>
      </div>
      <i onClick={handleClick} className="fas fa-bars"></i>
    </div>
  );
}
