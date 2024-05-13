const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const nameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_description");
const openButtonCard = document.querySelector(".profile__add-button");
const openButtonProfile = document.querySelector(".profile__edit-button");
const popupProfile = document.querySelector(".popup_type_edit");
const nameInputCard = document.querySelector(".popup__input_type_card-name");
const linkInput = document.querySelector(".popup__input_type_url");
const placesContainer = document.querySelector(".places__list");
const formElement = document.querySelector('.popup__form[name="new-place"]');
const formElementProfile = popupProfile.querySelector(".popup__form");
const popupImageContainer = document.querySelector(".popup_type_image");
const popupImage = popupImageContainer.querySelector(".popup__image");
const popupCaption = popupImageContainer.querySelector(".popup__caption");
const cardPopup = document.querySelector(".popup_type_new-card"); 

// функция которая выводит карточки на страницу
function addCards(cards, container) {
  cards.forEach((cardData) => {
    container.append(createCard(cardData.name, cardData.link, likeCard, deletCard, openPopupWithImage));
  });
};

// вызываем функцию для отображения карточек на странице
addCards(initialCards, placesContainer);

// обработчики событий
formElementProfile.addEventListener("submit", handleFormSubmit);
openButtonProfile.addEventListener("click", function () {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
  openPopup(popupProfile);
});
openButtonCard.addEventListener("click", () => openPopup(cardPopup));

// функция при отправке форм
function handleFormSubmit(evt) {
  evt.preventDefault();
  const nameValue = nameInput.value;
  const jobValue = jobInput.value;
  profileTitle.textContent = nameValue;
  profileDescription.textContent = jobValue;
  closePopup(openPopupProfile);
};

// добавление новой карточки 
formElement.addEventListener("submit", function (event) {
  event.preventDefault();
  const card = createCard(nameInputCard.value, linkInput.value, likeCard, deletCard, openPopupWithImage);
  placesContainer.prepend(card);
  formElement.reset();
  closePopup(cardPopup);
});

// функция открытия при клике по изображению карточки
function openPopupWithImage(cardData) {
  popupImage.src = cardData.link;
  popupImage.alt = cardData.name;
  popupCaption.textContent = cardData.name;
  openPopup(popupImageContainer);
};

// закрывает попап по клику вне области попапа
document.querySelectorAll(".popup").forEach((popup) => {
  popup.addEventListener("click", (event) => {
    if (event.target === popup) {
      closePopup(popup);
    }
  });
});

// закрывает попапы по клику на х
document.querySelectorAll(".popup__close").forEach((button) => {
  button.addEventListener("click", function (event) {
    event.stopPropagation();
    const popup = button.closest(".popup");
    closePopup(popup);
  });
});

import { initialCards } from "./cards";
import { createCard, deletCard, likeCard} from "./card";
import { closePopup, openPopup} from "./modal";
import "../pages/index.css";
