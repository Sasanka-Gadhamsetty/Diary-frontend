// src/api.js
import axios from 'axios';
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://13.206.121.130:3000'
});
export default api;