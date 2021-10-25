//https://api.themoviedb.org/3
import axios from "axios";

// base URL to make API requests to the database
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
}); //creating an instance so we can get the data and append it to the base URL

export default instance;
