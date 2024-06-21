export {
  getCardInfo,
  getUserInfo,
  updateUserProfile,
  addCardToServer,
  deleteCardFromServer,
  cleanLike,
  putLike,
  updateAvatar,
};

// конфиг для запроса
const configApi = {
  baseUrl: "https://mesto.nomoreparties.co/v1/wff-cohort-17",
  headers: {
    authorization: "f2641971-248b-49a3-b277-1116f601bafa",
    "Content-Type": "application/json",
  },
};

//обрабатываем ошибки
const checkResponse = (res) => {
  if (!res.ok) {
    throw new Error(`Ошибка ${res.status}`);
  }

  return res.json();
};

// информация о пользователе
const getUserInfo = () => {
  return fetch(`${configApi.baseUrl}/users/me`, {
    headers: configApi.headers,
  }).then(checkResponse);
};

// информация о карточках
const getCardInfo = () => {
  return fetch(`${configApi.baseUrl}/cards`, {
    headers: configApi.headers,
  }).then(checkResponse);
};

// Функция для отправки запроса на редактирование профиля
function updateUserProfile(name, about) {
  return fetch(`${configApi.baseUrl}/users/me`, {
    method: "PATCH",
    headers: configApi.headers,
    body: JSON.stringify({
      name: name,
      about: about,
    }),
  }).then(checkResponse);
};

// Функция для отправки запроса на добавление карточки
function addCardToServer(name, link) {
  return fetch(`${configApi.baseUrl}/cards`, {
    method: "POST",
    headers: configApi.headers,
    body: JSON.stringify({
      name: name,
      link: link
    }),
  }).then(checkResponse);
};

// Функция для удаления карточки через API
function deleteCardFromServer(cardId) {
  return fetch(`${configApi.baseUrl}/cards/${cardId}`, {
    method: "DELETE",
    headers: configApi.headers,
  }).then(checkResponse);
};

// запрос на постановку лайка
function putLike(cardId) {
  return fetch(`${configApi.baseUrl}/cards/likes/${cardId}`, {
    method: "PUT",
    headers: configApi.headers,
  }).then(checkResponse);
};

// удалить лайк
function cleanLike(cardId) {
  return fetch(`${configApi.baseUrl}/cards/likes/${cardId}`, {
    method: "DELETE",
    headers: configApi.headers,
  }).then(checkResponse);
};

// обновление аватара пользователя
function updateAvatar(avatar) {
  return fetch(`${configApi.baseUrl}/users/me/avatar`, {
    method: "PATCH",
    headers: configApi.headers,
    body: JSON.stringify({
      avatar: avatar,
    }),
  }).then(checkResponse);
};
