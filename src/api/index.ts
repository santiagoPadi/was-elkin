import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000",  //aca cambias para conectar tu backend
});

export default api;
