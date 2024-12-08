/* handling Strapi API calls */
import axios from 'axios';

const API_URL = 'http://localhost:1337/api'; // Strapi backend URL

const api = axios.create({
  baseURL: API_URL,
});

export default api;
