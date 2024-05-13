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

// закрывает все попапы кнопкой esc
function closeByEsc(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_is-opened");
    closePopup(openedPopup);
  }
};

export { closePopup, openPopup, closeByEsc };

