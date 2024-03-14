import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://87.107.104.119:5000/api',
  timeout: 5000, // Request timeout
  headers: {
    'Content-Type': 'application/json', 
  },
});

export default instance;