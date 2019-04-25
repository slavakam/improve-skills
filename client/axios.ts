import axios from 'axios';

export const BASE_URL = 'http://localhost:3001';

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json, text/plain, */*',
  },
});

export default instance;
