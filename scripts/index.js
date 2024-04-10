// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу
// Функция для создания карточки
function cardAdd (name, link, deletCard) {
  let cardTemplate = document.querySelector('#card-template').content;
  let card = cardTemplate.cloneNode(true);

  card.querySelector('.card__image').src = link;
  card.querySelector('.card__title').textContent = name;
  card.querySelector('.card__delete-button').addEventListener('click', (event) => deletCard(event));
  return card;
};

function deletCard() {
const removeCard = event.target.closest('.card');
removeCard.remove()
};

 const placesList = document.querySelector('.places__list');
  initialCards.forEach(cardData => {
   placesList.append(cardAdd(cardData.name, cardData.link, deletCard));
  });
