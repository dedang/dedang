import axios from "axios";

export default axios.create({
  baseURL: "http://192.168.10.185:8080/api",
  headers: {
    "Content-type": "application/json"
  }
});