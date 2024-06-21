const config = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

// Функция, показывающая ошибку
function showError(formElement, inputElement, errorMessage) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(config.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(config.errorClass);
};

// Функция, скрывающая ошибку
function hideError(formElement, inputElement) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(config.inputErrorClass);
  errorElement.textContent = "";
  errorElement.classList.remove(config.errorClass);
};

// Функция, проверяющая на ошибку
function checkInputValidity(formElement, inputElement, config) {
  if (inputElement.validity.patternMismatch) {
    inputElement.setCustomValidity(inputElement.dataset.errorMessage);
  } else {
    inputElement.setCustomValidity("");
  }
  if (!inputElement.validity.valid) {
    showError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideError(formElement, inputElement, config);
  }
};

// Функция для переключения состояния кнопки
function toggleButtonState(formElement, buttonElement) {
  if (formElement.checkValidity()) {
    buttonElement.removeAttribute("disabled");
    buttonElement.classList.remove(config.inactiveButtonClass);
  } else {
    buttonElement.setAttribute("disabled", true);
    buttonElement.classList.add(config.inactiveButtonClass);
  }
};

// Функция для установки слушателей событий на элементы формы
function setEventListeners(formElement) {
  const inputList = formElement.querySelectorAll(config.inputSelector);
  const buttonElement = formElement.querySelector(config.submitButtonSelector);
  formElement.addEventListener("submit", function (evt) {
    evt.preventDefault();
  });
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(formElement, buttonElement);
    });
  });
};

// Функция для включения валидации всех форм
function enableValidation(config) {
  const formList = document.querySelectorAll(config.formSelector);
  formList.forEach((formElement) => {
    setEventListeners(formElement);
  });
};

//функция для очистки форм валидации
function clearValidation(formElement, config) {
  const inputElements = formElement.querySelectorAll(config.inputSelector);
  const errorElements = formElement.querySelectorAll(`.${config.errorClass}`);
  
  inputElements.forEach((inputElement) => {
  if (!inputElement.checkValidity()) {
  inputElement.value = "";
  }
  inputElement.classList.remove(config.inputErrorClass);
  inputElement.setCustomValidity("");
  });
  
  errorElements.forEach((errorElement) => {
  errorElement.textContent = "";
  errorElement.classList.remove(config.errorClass);
  });
  
  const submitButton = formElement.querySelector(config.submitButtonSelector);
  submitButton.classList.add(config.inactiveButtonClass);
  submitButton.disabled = true;
  };

export { clearValidation, config, enableValidation };
