const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
<<<<<<< HEAD
=======
const formElement = document.querySelector(".popup__form");
>>>>>>> ac26bc6393f9c575d7642aad66198ec14f7d4c3a
const nameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_description");
const openButtonCard = document.querySelector(".profile__add-button");
const openButtonProfile = document.querySelector(".profile__edit-button");
const openPopupProfile = document.querySelector(".popup_type_edit");
const openAddCard = document.querySelector(".popup_type_new-card");
<<<<<<< HEAD
const nameInputCard = document.querySelector(".popup__input_type_card-name");
const linkInput = document.querySelector(".popup__input_type_url");
const placesContainer = document.querySelector(".places__list");
const cardElement = document.querySelector('.popup__form[name="new-place"]');
const formElementProfile = openPopupProfile.querySelector(".popup__form");
=======
const popup = document.querySelectorAll(".popup");
const nameInputCard = document.querySelector(".popup__input_type_card-name");
const linkInput = document.querySelector(".popup__input_type_url");
const showList = document.querySelector(".places__list");
const addNewCard = document.querySelector('.popup__form[name="new-place"]');
>>>>>>> ac26bc6393f9c575d7642aad66198ec14f7d4c3a

// функция которая выводит карточки на страницу
function addCards(cards, container) {
  cards.forEach((cardData) => {
    container.append(createCard(cardData.name, cardData.link));
  });
<<<<<<< HEAD
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
=======
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
>>>>>>> ac26bc6393f9c575d7642aad66198ec14f7d4c3a

// функция при отправке форм
function handleFormSubmit(evt) {
  evt.preventDefault();
  const nameValue = nameInput.value;
  const jobValue = jobInput.value;
  profileTitle.textContent = nameValue;
  profileDescription.textContent = jobValue;
<<<<<<< HEAD
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
=======
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
>>>>>>> ac26bc6393f9c575d7642aad66198ec14f7d4c3a
