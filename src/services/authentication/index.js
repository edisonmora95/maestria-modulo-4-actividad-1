import axios from 'axios'

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
    return response;
  } catch (error) {
    return Promise.reject(error.data);
  }
};
