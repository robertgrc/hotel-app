import axios from "axios";

const hotelApi = axios.create({
  baseURL: "",
});

//Todo: configurar interceptores

export default hotelApi;
