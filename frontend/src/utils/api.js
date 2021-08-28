class Api {
  constructor(options) {
    this._address = options.address;
    this._headers = options.headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`${res.status}`);
  }

  getInitialCards() {
    return fetch(`${this._address}/cards`, {
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }).then(this._checkResponse);
  }

  getUserData() {
    return fetch(`${this._address}/users/me`, {
      method: 'GET',
      headers: this._headers,
      credentials: "include",
    }).then(this._checkResponse);
  }

  setUserData({ name, about, avatar }) {
    return fetch(`${this._address}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      credentials: "include",
      body: JSON.stringify({
        name,
        about,
        avatar,
      }),
    }).then(this._checkResponse);
  }

  updateAvatar(data) {
    return fetch(`${this._address}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      credentials: "include",
      body: JSON.stringify({
        avatar: data.avatar,
      }),
    }).then(this._checkResponse);
  }

  createCard({ name, link }) {
    return fetch(`${this._address}/cards`, {
      method: "POST",
      headers: this._headers,
      credentials: "include",
      body: JSON.stringify({
        name,
        link,
      }),
    }).then(this._checkResponse);
  }

  deleteCard(id) {
    return fetch(`${this._address}/cards/${id}`, {
      method: "DELETE",
      headers: this._headers,
      credentials: "include",
    }).then(this._checkResponse);
  }

  addLike(id) {
    return fetch(`${this._address}/cards/${id}/likes`, {
      method: "PUT",
      headers: this._headers,
      credentials: "include",
    }).then(this._checkResponse);
  }

  deleteLike(id) {
    return fetch(`${this._address}/cards/${id}/likes`, {
      method: "DELETE",
      headers: this._headers,
      credentials: "include",
    }).then(this._checkResponse);
  }

  changeLikeCardStatus(id, isLiked) {
    if (!isLiked) {
      return this.deleteLike(id);
    } else {
      return this.addLike(id);
    }
  }
}

const api = new Api({
  address: "https://api.mestoproject.students.nomoredomains.club",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
