/**
 * @param {string} id
 */
export const setUserId = (id) => {
  localStorage.setItem('userId', id);
};

export const getUserId = () => {
  return localStorage.getItem('userId');
};
