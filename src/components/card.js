const popupImageContainer = document.querySelector(".popup_type_image");
const popupImage = popupImageContainer.querySelector(".popup__image");
const popupCaption = popupImageContainer.querySelector(".popup__caption");

// функция создания карточек
function createCard(name, link) {
  const cardTemplate = document.querySelector("#card-template").content;
  const card = cardTemplate.cloneNode(true);
  const cardImage = card.querySelector(".card__image");
  cardImage.src = link;
  card.querySelector(".card__title").textContent = name;
  cardImage.alt = name;
  card
    .querySelector(".card__delete-button")
    .addEventListener("click", deletCard);
  card.querySelector(".card__like-button").addEventListener("click", likeCard);
  cardImage.addEventListener("click", () => openPopupWithImage({ name, link }));

  return card;
};

//функция удаления карточек
function deletCard() {
  const removeCard = event.target.closest(".card");
  if (removeCard) {
    removeCard.remove();
  }
};

// функция лайк карточки
function likeCard(evt) {
  if (evt.target.classList.contains("card__like-button"))
    evt.target.classList.toggle("card__like-button_is-active");
};

// функция открытия при клике по изображению карточки
function openPopupWithImage(cardData) {
  popupImage.src = cardData.link;
  popupImage.alt = cardData.name;
  popupCaption.textContent = cardData.name;
  popupImageContainer.classList.add("popup_is-opened");
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && document.querySelector(".popup_is-opened")) {
      document
        .querySelector(".popup_type_image")
        .classList.remove("popup_is-opened");
    };
  });
};

export { createCard, likeCard, deletCard };
