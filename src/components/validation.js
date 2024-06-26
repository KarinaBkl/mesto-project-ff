// Функция, показывающая ошибку
function showError(formElement, inputElement, config, errorMessage) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(config.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(config.errorClass);
};

// Функция, скрывающая ошибку
function hideError(formElement, inputElement, config) {
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
    showError(formElement, inputElement, config, inputElement.validationMessage);
  } else {
    hideError(formElement, inputElement, config);
  }
};

// Функция для отключения кнопки
const disableSubmitButton = (buttonElement, config) => {
  buttonElement.setAttribute("disabled", true);
  buttonElement.classList.add(config.inactiveButtonClass);
};

// Функция для переключения состояния кнопки
function toggleButtonState(formElement, buttonElement, config) {
  if (formElement.checkValidity()) {
    buttonElement.removeAttribute("disabled");
    buttonElement.classList.remove(config.inactiveButtonClass);
  } else {
    disableSubmitButton(buttonElement, config);
  }
};

// Функция для установки слушателей событий на элементы формы
function setEventListeners(formElement, config) {
  const inputList = formElement.querySelectorAll(config.inputSelector);
  const buttonElement = formElement.querySelector(config.submitButtonSelector);
  formElement.addEventListener("submit", function (evt) {
    evt.preventDefault();
  });
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement, config);
      toggleButtonState(formElement, buttonElement, config);
    });
  });
};

// Функция для включения валидации всех форм
function enableValidation(config) {
  const formList = document.querySelectorAll(config.formSelector);
  formList.forEach((formElement) => {
    setEventListeners(formElement, config);
  });
};

//функция для очистки форм валидации
function clearValidation(formElement, config) {
  const inputElements = formElement.querySelectorAll(config.inputSelector);

  inputElements.forEach(inputElement => {
    if (!inputElement.checkValidity()) {
      inputElement.value = "";
    }
    inputElement.classList.remove(config.inputErrorClass);
    inputElement.setCustomValidity("");
    hideError(formElement, inputElement, config);
  });

  disableSubmitButton(formElement.querySelector(config.submitButtonSelector), config);
};

export { clearValidation, enableValidation };