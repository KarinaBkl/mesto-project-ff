// Функция создания карточек
function createCard(name, link, likeCard, deletCard, openPopupWithImage) {
  const cardTemplate = document
    .querySelector("#card-template")
    .content.querySelector(".card");
  const card = cardTemplate.cloneNode(true);
  const cardImage = card.querySelector(".card__image");
  cardImage.src = link;
  card.querySelector(".card__title").textContent = name;
  cardImage.alt = name;
  card
    .querySelector(".card__delete-button")
    .addEventListener("click", deletCard);
  card.querySelector(".card__like-button").addEventListener("click", likeCard);
  cardImage.addEventListener("click", () => {
    openPopupWithImage({ name, link });
  });
  return card;
}

//функция удаления карточек
function deletCard(event) {
  const removeCard = event.target.closest(".card");
  if (removeCard) {
    removeCard.remove();
  }
}

// Функция лайк карточки
function likeCard(event) {
  if (event.target.classList.contains("card__like-button")) {
    event.target.classList.toggle("card__like-button_is-active");
  }
}

export { createCard, likeCard, deletCard };
