import axios from "axios";

//Useful for async thunk
const instance = axios.create({
  baseURL: "http://localhost:5000/api",
});

export default instance;
