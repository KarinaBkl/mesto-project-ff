const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const nameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_description");
const openButtonCard = document.querySelector(".profile__add-button");
const openButtonProfile = document.querySelector(".profile__edit-button");
const openPopupProfile = document.querySelector(".popup_type_edit");
const openAddCard = document.querySelector(".popup_type_new-card");
const nameInputCard = document.querySelector(".popup__input_type_card-name");
const linkInput = document.querySelector(".popup__input_type_url");
const placesContainer = document.querySelector(".places__list");
const cardElement = document.querySelector('.popup__form[name="new-place"]');
const formElementProfile = openPopupProfile.querySelector(".popup__form");

// функция которая выводит карточки на страницу
function addCards(cards, container) {
  cards.forEach((cardData) => {
    container.append(createCard(cardData.name, cardData.link));
  });
};

// вызываем функцию для отображения карточек на странице
addCards(initialCards, placesContainer);

// обработчики событий
formElementProfile.addEventListener("submit", handleFormSubmit);
openButtonProfile.addEventListener("click", function () {
  const textInputName = profileTitle.textContent;
  const textInputDescription = profileDescription.textContent;
  nameInput.value = textInputName;
  jobInput.value = textInputDescription;
  openPopup(openPopupProfile);
});
openButtonCard.addEventListener("click", () => openPopup(openAddCard));
document.addEventListener("keydown", closeByEsc);

// функция при отправке форм
function handleFormSubmit(evt) {
  evt.preventDefault();
  const nameValue = nameInput.value;
  const jobValue = jobInput.value;
  profileTitle.textContent = nameValue;
  profileDescription.textContent = jobValue;
  closePopup(openPopupProfile);
};

// добавление новой карточки карточки
cardElement.addEventListener("submit", function (event) {
  event.preventDefault();
  const card = createCard(nameInputCard.value, linkInput.value, deletCard);
  placesContainer.prepend(card);
  cardElement.reset();
  closePopup(openAddCard);
});

import { initialCards } from "./cards";
import { createCard, deletCard } from "./card";
import { closePopup, openPopup, closeByEsc } from "./modal";
import "../pages/index.css";
import "./cards";
import "./modal";
import "./card";
