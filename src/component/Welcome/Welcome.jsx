import React from "react";
import styles from "./Welcome.module.scss";
import { NavLink } from "react-router-dom";

export const Welcome = () => {
  return (
    <div className={styles.bg}>
      <h1 className={styles.title}>Welcome to the car rental website</h1>
      <p className={styles.title}>You will like our cars</p>
      <NavLink className={styles.link} to="/catalog">
        Join now
      </NavLink>
    </div>
  );
};
