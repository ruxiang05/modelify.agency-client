import jwtDecode from 'jwt-decode';

const getToken = () => localStorage.getItem('jwt-token');

const setToken = token => localStorage.setItem('jwt-token', token);

const getCurrentUser = () => {
  const token = getToken();
  if (token) return jwtDecode(token);
  return null;
};

const logOut = () => localStorage.removeItem('jwt-token');

export {
  getToken, setToken, getCurrentUser, logOut,
};
