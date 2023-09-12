import axios from "axios";

axios.defaults.baseURL = "https://64256c4a9e0a30d92b3199d6.mockapi.io";

export const getCar = async () => {
  const car = await axios.get("/car");
  return car.data;
};
