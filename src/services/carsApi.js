import axios from "axios";
import { BASE_API_URL } from "../config/apiConfig";

// Create axios instance
const api = axios.create({
  baseURL: BASE_API_URL + "/api/cars",
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 10 second timeout
});

export const carsApi = {
    getBrands: () => api.get('brands')
};