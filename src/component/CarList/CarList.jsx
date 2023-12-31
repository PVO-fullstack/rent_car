import PropTypes from "prop-types";
import { Card } from "../Card/Card";
import styles from "./CarList.module.scss";
import { useEffect, useState } from "react";

export const CarList = ({ cars, changeFav, fav }) => {
  const [rentalCars, setrentalCars] = useState();

  useEffect(() => {
    setrentalCars(cars);
  }, [cars]);

  return (
    <ul className={styles.cards}>
      {rentalCars &&
        rentalCars.map((car) => (
          <Card key={car.id} fav={fav} change={changeFav} data={car} />
        ))}
    </ul>
  );
};

CarList.propTypes = {
  cars: PropTypes.array,
  changeFav: PropTypes.func,
  fav: PropTypes.bool,
};
