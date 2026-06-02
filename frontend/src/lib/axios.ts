import axios from 'axios';

const baseURL = 'http://localhost:5000/api/worldcup';

export const axiosClient = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const message = error?.response?.data?.message ?? error.message ?? 'Unknown API error';
    return Promise.reject(new Error(message));
  },
);
