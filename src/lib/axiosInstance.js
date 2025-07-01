import axios from 'axios';
import Cookies from 'js-cookie';

const baseURL = process.env.NEXT_PUBLIC_URL;

// Public Axios Instance (No authentication)
export const axiosPublic = axios.create({
  baseURL: baseURL,
});

// Private Axios Instance (With authentication)
export const axiosPrivate = axios.create({
  baseURL: baseURL,
  timeout: 20000, // Optional: Set a timeout for requests
});

axiosPrivate.interceptors.request.use(
  (config) => {
    const token = Cookies.get('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);