// Функция создания карточек
<<<<<<< HEAD
// Функция для создания карточки
function createCard(name, link, likes, ownerId, cardId, userId, likeCard, deletCard, openPopupWithImage) {
=======
function createCard(name, link, likeCard, deletCard, openPopupWithImage) {
>>>>>>> c3aa0bd7eec42aef7eac998d55d2da897434059c
  const cardTemplate = document
    .querySelector("#card-template")
    .content.querySelector(".card");
  const card = cardTemplate.cloneNode(true);
  const cardImage = card.querySelector(".card__image");
<<<<<<< HEAD
  const deleteButton = card.querySelector(".card__delete-button");
  const meterLike = card.querySelector(".meter__likes");
  const likeCardButton = card.querySelector(".card__like-button");
  meterLike.textContent = likes.length;
  cardImage.src = link;
  card.querySelector(".card__title").textContent = name;
  cardImage.alt = name;
  if (ownerId === userId) {
    deleteButton.style.display = "block";
    deleteButton.addEventListener("click", () => deletCard(card, userId, ownerId, cardId));
  } else {
    deleteButton.style.display = "none";
  }
  if (likes.some((user) => user._id === userId)) {
    likeCardButton.classList.add("card__like-button_is-active")
  }
likeCardButton.addEventListener("click", () => likeCard(likeCardButton, cardId, meterLike));
=======
  cardImage.src = link;
  card.querySelector(".card__title").textContent = name;
  cardImage.alt = name;
  card
    .querySelector(".card__delete-button")
    .addEventListener("click", deletCard);
  card.querySelector(".card__like-button").addEventListener("click", likeCard);
>>>>>>> c3aa0bd7eec42aef7eac998d55d2da897434059c
  cardImage.addEventListener("click", () => {
    openPopupWithImage({ name, link });
  });
  return card;
}

//функция удаления карточек
<<<<<<< HEAD
function deletCard(card, userId, ownerId, cardId) {
  if (ownerId === userId) {
    deleteCardFromServer(cardId)
      .then(() => {
        card.remove();
      })
      .catch((error) => {
        console.error("Произошла ошибка:", error);
      });
  } else {
    console.error("Можно удалять только собственные посты");
=======
function deletCard(event) {
  const removeCard = event.target.closest(".card");
  if (removeCard) {
    removeCard.remove();
>>>>>>> c3aa0bd7eec42aef7eac998d55d2da897434059c
  }
}

// Функция лайк карточки
<<<<<<< HEAD
function likeCard(likeCardButton, cardId, meterLike) {
  const likeDinamic = likeCardButton.classList.contains("card__like-button_is-active") ? cleanLike : putLike;
  likeDinamic(cardId)
  .then((res) => {
   meterLike.textContent = res.likes.length;
   likeCardButton.classList.toggle("card__like-button_is-active");
  })
  .catch((error) => {
   console.log(error);
  })
 }


export { createCard, likeCard, deletCard };
import { deleteCardFromServer, cleanLike, putLike } from "./api";
=======
function likeCard(event) {
  if (event.target.classList.contains("card__like-button")) {
    event.target.classList.toggle("card__like-button_is-active");
  }
}

export { createCard, likeCard, deletCard };
>>>>>>> c3aa0bd7eec42aef7eac998d55d2da897434059c
