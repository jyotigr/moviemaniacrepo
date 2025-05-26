import React from "react";
import Fire from "../src/assets/fire.png";
import Star from "../src/assets/glowing-star.png";
import Party from "../src/assets/Party.png";
import "./Navbar.css";
import DarkMode from "./DarkMode/DarkMode.jsx";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Movie Maniac</h1>

      <div className="navbar_links">
        <DarkMode />
        <a href="#popular">
          Popular{" "} <img src={Fire} alt="fire emoji" className="navabar_emoji" />
        </a>
        <a href="#top_rated">
          Top Rated{" "}
          <img src={Star} alt="star emoji" className="navabar_emoji" />
        </a>
        <a href="#upcoming">
          Upcoming{" "}
          <img src={Party} alt="party emoji" className="navabar_emoji" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
