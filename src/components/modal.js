// функция открытия карточек
function openPopup(popup) {
  popup.classList.add("popup_is-opened");
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
  });
});

// закрывает все попапы кнопкой esc
function closeByEsc(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_is-opened");
    closePopup(openedPopup);
  };
};

// закрывает попап по клику вне области попапа
document.querySelectorAll(".popup").forEach((popup) => {
  popup.addEventListener("click", (event) => {
    if (event.target === popup) {
      closePopup(popup);
    };
  });
});

export { closePopup, openPopup, closeByEsc };
