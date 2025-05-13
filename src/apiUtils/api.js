import axios from "axios";

// Base URL from Vite env
const BASE_URL = import.meta.env.VITE_API_URL;

// Anonymous Axios instance (No authentication required)
export const anonAxiosInstance = axios.create({
    baseURL: BASE_URL,  
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });