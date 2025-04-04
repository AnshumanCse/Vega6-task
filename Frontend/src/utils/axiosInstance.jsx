

import axios from "axios";
import { handleLogout } from "../pages/authentication/Logout"; // Import your logout function
// const baseURL = "https://troology-test-backend.onrender.com/api/v1";
const baseURL = "http://localhost:8082/api/v1";

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL,

});

// Add a request interceptor to set the Authorization header and content type
axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");

    // If token exists, set it in the Authorization header
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    // Check if the request data is an instance of FormData (for file upload)
    if (config.data instanceof FormData) {
      // Don't set Content-Type to allow the browser to set the boundary automatically for multipart/form-data
      delete config.headers["Content-Type"];
    } else {
      // Set the content type to JSON for other requests
      config.headers["Content-Type"] = "application/json";
    }

    return config;
  },
  (error) => {
    // Handle request errors
    return Promise.reject(error);
  }
);



export default axiosInstance;
