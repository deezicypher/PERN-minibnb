import axios from 'axios';

export default instance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:8000/api/v1/'
})

  