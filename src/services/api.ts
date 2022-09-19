import axios from 'axios'
import { getUserLocalStorage } from '../contexts/AuthProvider/util';

export const api = axios.create({
  baseURL: 'https://sociosassociacao.herokuapp.com',
});


api.interceptors.request.use(
  (config) => {
    const user = getUserLocalStorage()

    (config.headers ??= {}).Authorization = `Bearer ${localStorage.getItem('token')}`

    return config
  },
  (error) => {
    return Promise.reject(error);
  }
)

