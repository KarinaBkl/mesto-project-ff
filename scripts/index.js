// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу
// Функция для создания карточки

function createCard(name, link) {
  const cardTemplate = document.querySelector('#card-template').content;
  const card = cardTemplate.cloneNode(true);

  card.querySelector('.card__image').src = link;
  card.querySelector('.card__title').textContent = name;
  card.querySelector('.card__image').alt = name;
  card.querySelector('.card__delete-button').addEventListener('click', deletCard);

  return card;
}

function deletCard() {
  const removeCard = event.target.closest('.card');
  removeCard.remove();
}

const showList = document.querySelector('.places__list');
initialCards.forEach(cardData => {
  showList.append(createCard(cardData.name, cardData.link));
});