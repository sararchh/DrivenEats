let food = '';
let drink = '';
let candy = '';

function selectedFood(elementSelected) {

  const selectedCard = document.querySelector('.selected');
  const selectedIconOld = document.querySelector('.showIconCheck');
  const childrenIcon = elementSelected?.childNodes[9];

  if (selectedIconOld !== null) {
    selectedIconOld.classList.remove('showIconCheck');
  }

  if (selectedCard !== null) {
    selectedCard.classList.remove('selected');
  }

  elementSelected.classList.add('selected');
  childrenIcon.classList.add('showIconCheck');

  food = elementSelected.innerHTML;

  verifyButtonActive();
}

function selectedDrinks(elementSelected) {
  const selectedCard = document.querySelector('.cardFoodDrinks .selected');
  const selectedIconOld = document.querySelector('.showIconChecksDrinks');
  const childrenIcon = elementSelected?.childNodes[9];

  if (selectedIconOld !== null) {
    selectedIconOld.classList.remove('showIconChecksDrinks');
  }

  if (selectedCard !== null) {
    selectedCard.classList.remove('selected');
  }

  elementSelected.classList.add('selected');
  childrenIcon.classList.add('showIconChecksDrinks');

  drink = elementSelected.innerHTML;

  verifyButtonActive();
}

function selectedCandy(elementSelected) {
  const selectedCard = document.querySelector('.cardFoodCandy .selected');
  const selectedIconOld = document.querySelector('.showIconChecksCandy');
  const childrenIcon = elementSelected?.childNodes[9];

  if (selectedIconOld !== null) {
    selectedIconOld.classList.remove('showIconChecksCandy');
  }

  if (selectedCard !== null) {
    selectedCard.classList.remove('selected');
  }

  elementSelected.classList.add('selected');
  childrenIcon.classList.add('showIconChecksCandy');

  candy = elementSelected.innerHTML;

  verifyButtonActive();
}

function verifyButtonActive() {
  const buttonFooter = document.querySelector('.button01');

  if (food !== '' && drink !== '' && candy !== '') {
    buttonFooter.classList.add('active');
  }

}

function showModalOrder() {
  const selectedModalOrder = document.querySelector('.modalOrder');

  if (food !== '' && drink !== '' && candy !== '') {
    selectedModalOrder.classList.add('showModal');
  }

}