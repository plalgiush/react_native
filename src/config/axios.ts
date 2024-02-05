import Axios from 'axios';
import { BASE_URL } from '@env';

export const axios = Axios.create({
  baseURL: BASE_URL,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
  responseType: 'json',
  withCredentials: true,
});

export const baseURL = axios.defaults.baseURL;
