// функция открытия карточек
function openPopup(popup) {
  popup.classList.add("popup_is-opened");
<<<<<<< HEAD
  document.addEventListener("keydown", closeByEsc);
};

//функция закрытия попапов
function closePopup(popupToClose) {
  popupToClose.classList.remove("popup_is-opened");
  document.removeEventListener("keydown", closeByEsc);
};

// закрывает все попапы по клику на х
document.querySelectorAll(".popup__close").forEach((button) => {
  button.addEventListener("click", function (event) {
    event.stopPropagation();
    const popup = button.closest(".popup");
    closePopup(popup);
=======
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
>>>>>>> ac26bc6393f9c575d7642aad66198ec14f7d4c3a
  });
});

// закрывает все попапы кнопкой esc
<<<<<<< HEAD
function closeByEsc(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_is-opened");
    closePopup(openedPopup);
  };
};
=======
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    popup.forEach((popup) => {
      popup.classList.remove("popup_is-opened");
    });
  }
});
>>>>>>> ac26bc6393f9c575d7642aad66198ec14f7d4c3a

// закрывает попап по клику вне области попапа
document.querySelectorAll(".popup").forEach((popup) => {
  popup.addEventListener("click", (event) => {
    if (event.target === popup) {
<<<<<<< HEAD
      closePopup(popup);
    };
  });
});

export { closePopup, openPopup, closeByEsc };
=======
      popup.classList.remove("popup_is-opened");
    }
  });
});

export { closePopup, openPopup };

import { popup } from "./index";
>>>>>>> ac26bc6393f9c575d7642aad66198ec14f7d4c3a
