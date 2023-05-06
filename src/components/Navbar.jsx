import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/favourites">Favourites</Link>
      <Link to="/add-movie">Add Movie</Link>
    </div>
  );
}

export default Navbar;
