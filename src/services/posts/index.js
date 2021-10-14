import axios from 'axios';

import { BASE_URL, GET_POSTS} from '../routes';

export const getPosts = async () => {
  try {
    const url = `${BASE_URL}${GET_POSTS}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return Promise.reject(error.data);
  }
};

/**
 * @param {string} postId
 */
export const likePost = async (postId) => {
  try {
    const url = `${BASE_URL}/api/posts/${postId}/like`;
    const response = await axios.post(url);
    return response.data;
  } catch (error) {
    return Promise.reject(error.data);
  }
};