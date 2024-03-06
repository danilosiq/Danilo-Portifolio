import React from "react";
import "./Footer.css";
import Social from "../SocialMediasCard/Social";

const Footer = () => {
  return (
    <footer>
      <div className="left">
        <h2>Danilo Dante Siqueira</h2>
      </div>
      <div className="right">
        <Social/>
      </div>
    </footer>
  );
};

export default Footer;
