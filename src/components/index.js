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
<<<<<<< HEAD
const cardPopup = document.querySelector(".popup_type_new-card");
const profileImage = document.querySelector('.profile__image');
const profileEditAvatar = document.querySelector('.profile__image-button');
const profileEditAvatarPopup = document.querySelector('.popup_type_edit-avatar');
const profileFormAvatar = profileEditAvatarPopup.querySelector('.popup__avatar');
const avatarInput = document.querySelector('.popup_type_edit-avatar-url');
let userId;

//промис для отображения информации 
Promise.all([getUserInfo(), getCardInfo()])
.then(([userData, cardData]) => {
  profileDescription.textContent = userData.about;
  profileTitle.textContent = userData.name;
  profileImage.src = userData.avatar;
  userId = userData._id;
  cardData.forEach(function (card) {
    placesContainer.append(
      createCard(
        card.name,
        card.link,
        card.likes,
        card.owner._id,
        userId,
        likeCard,
        deletCard,
        openPopupWithImage
      )
    )
  })
})
.catch((error) => {
  console.error("Произошла ошибка:", error);
});
=======
const cardPopup = document.querySelector(".popup_type_new-card"); 

// функция которая выводит карточки на страницу
function addCards(cards, container) {
  cards.forEach((cardData) => {
    container.append(createCard(cardData.name, cardData.link, likeCard, deletCard, openPopupWithImage));
  });
};

// вызываем функцию для отображения карточек на странице
addCards(initialCards, placesContainer);
>>>>>>> c3aa0bd7eec42aef7eac998d55d2da897434059c

// обработчики событий
formElementProfile.addEventListener("submit", handleFormSubmit);
openButtonProfile.addEventListener("click", function () {
<<<<<<< HEAD
  openPopup(popupProfile);
  clearValidation(formElementProfile, config); 
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
});
openButtonCard.addEventListener("click", () => {
  openPopup(cardPopup);
  clearValidation(formElement, config);
});
profileEditAvatar.addEventListener('click', () => {
  openPopup(profileEditAvatarPopup);
  avatarInput.value = "";
  clearValidation(profileFormAvatar, config);
});
profileFormAvatar.addEventListener("submit", handleAvatarFormSubmit)
=======
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
  openPopup(popupProfile);
});
openButtonCard.addEventListener("click", () => openPopup(cardPopup));
>>>>>>> c3aa0bd7eec42aef7eac998d55d2da897434059c

// функция при отправке форм
function handleFormSubmit(evt) {
  evt.preventDefault();
  const nameValue = nameInput.value;
  const jobValue = jobInput.value;
  profileTitle.textContent = nameValue;
  profileDescription.textContent = jobValue;
<<<<<<< HEAD
  const popupElement = document.querySelector(".popup_is-opened");
  const popupButton = popupElement.querySelector(".popup__button");
  popupButton.textContent = 'Сохранение...';

  updateUserProfile(nameValue, jobValue)
    .then(() => {
      closePopup(popupProfile);
    })
    .catch((error) => {
      console.error('Ошибка при обновлении профиля:', error);
    })
    .finally(() => {
      popupButton.textContent = 'Сохранить';
    });
}

//обновление аватара
function handleAvatarFormSubmit(evt) {
  evt.preventDefault();
  const avatarValue = avatarInput.value;
  const popupElement = document.querySelector(".popup_is-opened");
  const popupButton = popupElement.querySelector(".popup__button");
  popupButton.textContent = 'Сохранение...';
  updateAvatar(avatarValue)
    .then((data) => {
      profileImage.src = data.avatar;
      closePopup(profileEditAvatarPopup);
    })
    .catch((error) => {
      console.error('Ошибка при обновлении аватара:', error);
    })
    .finally(() => {
      popupButton.textContent = 'Сохранить';
    });
}

// добавление новой карточки
formElement.addEventListener("submit", function (event) {
  event.preventDefault();
  const popupElement = document.querySelector(".popup_is-opened");
  const popupButton = popupElement.querySelector(".popup__button");
  popupButton.textContent = 'Сохранение...'; 
  addCardToServer(nameInputCard.value, linkInput.value)
  .then(data => {
    const card = createCard(
      data.name,
      data.link,
      data.likes,
      data.owner._id,
      data._id,
      userId,
      likeCard,
      deletCard,
      openPopupWithImage
    );
    placesContainer.prepend(card);
  })
  .catch(error => {
    console.error('Ошибка при добавлении карточки:', error);
  })
  .finally(() => {
    formElement.reset();
    closePopup(cardPopup);
    popupButton.textContent = 'Сохранить'; 
  });
=======
  closePopup(openPopupProfile);
};

// добавление новой карточки 
formElement.addEventListener("submit", function (event) {
  event.preventDefault();
  const card = createCard(nameInputCard.value, linkInput.value, likeCard, deletCard, openPopupWithImage);
  placesContainer.prepend(card);
  formElement.reset();
  closePopup(cardPopup);
>>>>>>> c3aa0bd7eec42aef7eac998d55d2da897434059c
});

// функция открытия при клике по изображению карточки
function openPopupWithImage(cardData) {
  popupImage.src = cardData.link;
  popupImage.alt = cardData.name;
  popupCaption.textContent = cardData.name;
  openPopup(popupImageContainer);
<<<<<<< HEAD
}
=======
};
>>>>>>> c3aa0bd7eec42aef7eac998d55d2da897434059c

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

<<<<<<< HEAD
enableValidation(config);

import { initialCards } from "./cards";
import { createCard, deletCard, likeCard } from "./card";
import { closePopup, openPopup } from "./modal";
import "../pages/index.css";
import { clearValidation, config, enableValidation } from "./validation";
import { getUserInfo, getCardInfo, updateUserProfile, addCardToServer, updateAvatar } from "./api";
=======
import { initialCards } from "./cards";
import { createCard, deletCard, likeCard} from "./card";
import { closePopup, openPopup} from "./modal";
import "../pages/index.css";
>>>>>>> c3aa0bd7eec42aef7eac998d55d2da897434059c
