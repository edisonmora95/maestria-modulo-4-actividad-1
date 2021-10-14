import axios from 'axios'

import { setUserId } from '../localStorage';
import {
  BASE_URL,
  LOGIN,
  GET_LOGGED_USER,
} from '../routes';

/**
 * @param {string} username
 * @param {string} password
 */
export const login = async (username, password) => {
  try {
    const url = `${BASE_URL}${LOGIN}`;
    const body = {
      username,
      password,
    }
    const response = await axios.post(url, body);
    const { id = '' } = response.data;
    setUserId(id);
    return response.data;
  } catch (error) {
    return Promise.reject(error.data);
  }
};

/**
 * @param {string} userId
 */
export const getLoggedUser = async (userId) => {
  try {
    const url = `${BASE_URL}${GET_LOGGED_USER}${userId}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return Promise.reject(error.data);
  }
};
