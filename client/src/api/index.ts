import axios from 'axios';

export const fetchUser = () => axios.get('http://localhost:3001/user');
