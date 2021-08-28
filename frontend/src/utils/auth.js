const BASE_URL = "https://api.mestoproject.students.nomoredomains.club";

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`${res.status}`);
}

export const register = (email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  })
    .then(checkResponse)
};

export const login = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  })
    .then(checkResponse)
};

export const checkToken = () => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: 'include',
  })
    .then(checkResponse)
};

export const signOut = () => {
  return fetch(`${BASE_URL}/signout`, {
      method: "DELETE",
      credentials: "include",
  }).then((res) => checkResponse(res));
};