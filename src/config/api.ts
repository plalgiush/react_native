import Axios from 'axios';

const apiUrl: string = 'http://localhost:8000';

export const axios = Axios.create({
  baseURL: `${apiUrl}/api/v1/`,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
  responseType: 'json',
  withCredentials: true,
});

export const baseURL = apiUrl;
