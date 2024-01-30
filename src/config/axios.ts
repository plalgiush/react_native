import Axios from 'axios';

const baseURL: string | undefined = process.env.BASE_URL;

export const axios = Axios.create({
  baseURL: `${baseURL}/api/v1/`,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
  responseType: 'json',
  withCredentials: true,
});

export const apiUrl = axios;
