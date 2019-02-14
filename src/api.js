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
    editProfile: (token, data) => fetch(`${url}/users/edit`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
      .then((res, err) => {
        if (err) {
          return err;
        }
        return res.json();
      })
      .catch(err => err),
  },
  agents: {
    getModels: token => fetch(`${url}/agents/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res, err) => {
        if (err) {
          return err;
        }
        return res.json();
      })
      .catch(err => err),
    addModel: (token, data) => fetch(`${url}/agents/add-model`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res, err) => {
        if (err) {
          return err;
        }
        return res.json();
      })
      .catch(err => err),
  },
  jobs: {
    addJob: (token, data) => fetch(`${url}/jobs/create`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res, err) => {
        if (err) {
          return err;
        }
        return res.json();
      })
      .catch(err => err),
    getJobs: token => fetch(`${url}/jobs/all`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res, err) => {
        if (err) {
          return err;
        }
        return res.json();
      })
      .catch(err => err),
  },
};

export default api;
