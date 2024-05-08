// функция открытия карточек
function openPopup(popup) {
  popup.classList.add("popup_is-opened");
}

//функция закрытия попапов
function closePopup() {
  popup.forEach(function (popup) {
    popup.classList.remove("popup_is-opened");
  });
}

// закрывает все попапы по клику на х
document.querySelectorAll(".popup__close").forEach((button) => {
  button.addEventListener("click", function () {
    popup.forEach((popup) => {
      popup.classList.remove("popup_is-opened");
    });
  });
});

// закрывает все попапы кнопкой esc
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    popup.forEach((popup) => {
      popup.classList.remove("popup_is-opened");
    });
  }
});

// закрывает попап по клику вне области попапа
document.querySelectorAll(".popup").forEach((popup) => {
  popup.addEventListener("click", (event) => {
    if (event.target === popup) {
      popup.classList.remove("popup_is-opened");
    }
  });
});

export { closePopup, openPopup };

import { popup } from "./index";
