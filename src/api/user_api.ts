import { axios, apiUrl } from '../config/axios';

export const user_login = async (data: any) => {
  try {
    const result = await axios(`${apiUrl}login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify(data),
    });
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const user_register = async (data: any) => {
  try {
    const result = await axios(`${apiUrl}register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify(data),
    });
    return result;
  } catch (error) {
    console.error(error);
  }
};
