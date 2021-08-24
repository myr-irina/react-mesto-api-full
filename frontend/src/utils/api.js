class Api {
  constructor({ address, token }) {
    this._address = address;
    this._token = token;
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
        authorization: this._token,
      },
      credentials: "include",
    }).then(this._checkResponse);
  }

  getUserData() {
    return fetch(`${this._address}/users/me`, {
      headers: {
        authorization: this._token,
      },
      credentials: "include",
    }).then(this._checkResponse);
  }

  setUserData({ name, about, avatar }) {
    return fetch(`${this._address}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: this._token,
        "Content-Type": "application/json",
      },
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
      headers: {
        authorization: this._token,
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        avatar: data.avatar,
      }),
    }).then(this._checkResponse);
  }

  createCard({ name, link }) {
    return fetch(`${this._address}/cards`, {
      method: "POST",
      headers: {
        authorization: this._token,
        "Content-Type": "application/json",
      },
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
      headers: {
        authorization: this._token,
      },
      credentials: "include",
    }).then(this._checkResponse);
  }

  addLike(id) {
    return fetch(`${this._address}/cards/likes/${id}`, {
      method: "PUT",
      headers: {
        authorization: this._token,
        "Content-Type": "application/json",
      },
      credentials: "include",
    }).then(this._checkResponse);
  }

  deleteLike(id) {
    return fetch(`${this._address}/cards/likes/${id}`, {
      method: "DELETE",
      headers: {
        authorization: this._token,
      },
      credentials: "include",
    }).then(this._checkResponse);
  }

  changeLikeCardStatus(id, isLiked) {
    if(!isLiked) {
      return this.deleteLike(id)
    } else {
      return this.addLike(id)
    }
  }
}

 const api = new Api({
  address: "https://api.mestoproject.students.nomoredomains.club",
//   token: "4efae440-5715-4ca9-8417-962742ac588e",
});

export default api