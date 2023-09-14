import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <nav className={styles.header}>
      <NavLink className={styles.link} to="/">
        Home
      </NavLink>
      <NavLink className={styles.link} to="/catalog">
        Catalog
      </NavLink>
      <NavLink className={styles.link} to="favorites">
        Favorites
      </NavLink>
    </nav>
  );
};
