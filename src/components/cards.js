<<<<<<< HEAD
export const initialCards = [
=======
const initialCards = [
>>>>>>> ac26bc6393f9c575d7642aad66198ec14f7d4c3a
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

<<<<<<< HEAD


=======
// функция создания карточек
function createCard(name, link) {
  const cardTemplate = document.querySelector("#card-template").content;
  const card = cardTemplate.cloneNode(true);

  card.querySelector(".card__image").src = link;
  card.querySelector(".card__title").textContent = name;
  card.querySelector(".card__image").alt = name;
  card
    .querySelector(".card__delete-button")
    .addEventListener("click", deletCard);
  card.querySelector(".card__like-button").addEventListener("click", likeCard);
  card
    .querySelector(".card__image")
    .addEventListener("click", openPopupWithImage);

  return card;
}
// вызываем функцию для отображения карточек на странице
addCards(initialCards, showList);

//функция удаления карточек
function deletCard() {
  const removeCard = event.target.closest(".card");
  if (removeCard) {
    removeCard.remove();
  }
}

// функция лайк карточки
function likeCard(evt) {
  if (evt.target.classList.contains("card__like-button"))
    evt.target.classList.toggle("card__like-button_is-active");
}

export { createCard, likeCard, deletCard };

import { showList, addCards } from "./index";
import { openPopupWithImage } from "./index";
>>>>>>> ac26bc6393f9c575d7642aad66198ec14f7d4c3a
