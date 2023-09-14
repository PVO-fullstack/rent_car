import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/catalog">Catalog</NavLink>
        <NavLink to="favorites">Favorites</NavLink>
      </nav>
    </div>
  );
};
