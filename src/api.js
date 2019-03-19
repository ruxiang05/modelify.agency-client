const url = process.env.REACT_APP_API_URL;

const api = {
  users: {
    signup: data => fetch(`${url}/users/signup`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res, err) => {
        if (err) {
          return err;
        }
        return res.json();
      }),
    login: data => fetch(`${url}/users/login`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res, err) => {
        if (err) {
          return err;
        }
        return res.json();
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
    acceptJob: (token, data) => fetch(`${url}/jobs/accept`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
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
    completeJob: (token, data) => fetch(`${url}/jobs/complete`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
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
    declineJob: (token, data) => fetch(`${url}/jobs/decline`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
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
  chats: {
    getChats: token => fetch(`${url}/chats/`, {
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
    getMessages: (token, id) => fetch(`${url}/chats/getMessages?id=${id}`, {
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
  googleCalendar: {
    authorize: (token, data) => fetch(`${url}/google-calendar/authorize`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
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
    getAuthURL: token => fetch(`${url}/google-calendar/getAuthURL`, {
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
    addEvent: (token, data) => fetch(`${url}/google-calendar/addEvent`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
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
};

export default api;
