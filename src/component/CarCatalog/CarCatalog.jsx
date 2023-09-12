import React, { useEffect, useState } from "react";
import { getCar } from "../../styles/api/api";
import { Card } from "../Card/Card";
import styles from "./CarCatalog.module.scss";

export const CarCatalog = () => {
  const [cars, setCars] = useState();

  console.log("cars", cars);

  useEffect(() => {
    (async () => {
      const allCar = await getCar();
      setCars(allCar);
    })();
  }, []);

  return (
    <div className={styles.conteiner}>
      <ul className={styles.cards}>
        {cars && cars.map((car) => <Card key={car.id} data={car} />)}
      </ul>
    </div>
  );
};
