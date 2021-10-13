import axios from 'axios'
import { setUserId } from '../localStorage';

const BASE_URL = 'https://three-points.herokuapp.com';

/**
 * @param {string} username
 * @param {string} password
 */
export const login = async (username, password) => {
  try {
    const url = `${BASE_URL}/api/login`;
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
    const url = `${BASE_URL}/api/users/${userId}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return Promise.reject(error.data);
  }
};
