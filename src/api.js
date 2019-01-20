const url = process.env.REACT_APP_API_URL;

const api = {
  users: {
    signup: data => fetch(`${url}/users/signup`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    }),
    login: data => fetch(`${url}/users/login`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    }),
  },
};

export default api;
