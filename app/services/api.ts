import axios from "axios";
import Constants from "expo-constants";

const isWeb = Constants.platform?.web;

const api = axios.create({
  baseURL: isWeb
    ? "http://localhost:5192/api" // for Expo Web
    : "http://192.168.1.165:5192/api", // for fysisk mobil
});

export default api;
