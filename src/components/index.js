const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const formElement = document.querySelector(".popup__form");
const nameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_description");
const openButtonCard = document.querySelector(".profile__add-button");
const openButtonProfile = document.querySelector(".profile__edit-button");
const openPopupProfile = document.querySelector(".popup_type_edit");
const openAddCard = document.querySelector(".popup_type_new-card");
const popup = document.querySelectorAll(".popup");
const nameInputCard = document.querySelector(".popup__input_type_card-name");
const linkInput = document.querySelector(".popup__input_type_url");
const showList = document.querySelector(".places__list");
const addNewCard = document.querySelector('.popup__form[name="new-place"]');

// функция которая выводит карточки на страницу
function addCards(cards, container) {
  cards.forEach((cardData) => {
    container.append(createCard(cardData.name, cardData.link));
  });
}

// обработчики событий
formElement.addEventListener("submit", handleFormSubmit);
openButtonProfile.addEventListener("click", () => openPopup(openPopupProfile));
openButtonCard.addEventListener("click", () => openPopup(openAddCard));

// для заполнеия полей  «Имя» и «О себе»
const textInputName = profileTitle.textContent;
const textInputDescription = profileDescription.textContent;
nameInput.value = textInputName;
jobInput.value = textInputDescription;

// функция при отправке форм
function handleFormSubmit(evt) {
  evt.preventDefault();
  const nameValue = nameInput.value;
  const jobValue = jobInput.value;
  profileTitle.textContent = nameValue;
  profileDescription.textContent = jobValue;
  closePopup();
}

// добавление новой карточки карточки
addNewCard.addEventListener("submit", function (event) {
  event.preventDefault();
  const card = createCard(nameInputCard.value, linkInput.value, deletCard);
  showList.prepend(card);
  this.reset();
  closePopup();
});

// функция открытия при клике по изображению карточки
function openPopupWithImage() {
  const popupImageContainer = document.querySelector(".popup_type_image");
  const popupImage = popupImageContainer.querySelector(".popup__image");
  const popupCaption = popupImageContainer.querySelector(".popup__caption");
  const cardLink = document.querySelectorAll(".card__image");
  cardLink.forEach(() => {
    popupImage.src = this.src;
    popupImage.alt = this.alt;
    const titleText =
      this.parentElement.querySelector(".card__title").textContent;
    popupCaption.textContent = titleText;
    popupImageContainer.classList.add("popup_is-opened");
  });
}
// экспорт переменных
export {
  openPopupProfile,
  openAddCard,
  popup,
  nameInputCard,
  linkInput,
  showList,
};
//экспорт функций
export { openPopupWithImage, addCards };

import { createCard, deletCard } from "./cards";
import { closePopup, openPopup } from "./modal";
import "../pages/index.css";
import "./cards";
import "./modal";
