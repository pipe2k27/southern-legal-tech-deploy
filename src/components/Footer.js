import React from "react";
import "./css/Footer.css";

export default function Footer() {
  return (
    <div className="footer" id="footer">
      <img
        src={process.env.PUBLIC_URL + "/images/logo.png"}
        className="footer-logo"
        alt="zoita wood"
      />
      <p>Buenos Aires, Argentina</p>
      <p>Tel / Whatsapp: +54 9 11 4545 9898</p>
      <a href="">
        <i className="fab fa-instagram instagram"></i>
      </a>
    </div>
  );
}
