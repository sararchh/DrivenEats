function selectedFood(value) {
  const selectedCard = document.querySelector('.selected'); 

  if(selectedCard !== null){
    selectedCard.classList.remove('selected');
  }

  const element = document.querySelector(value);

  element.classList.add('selected');
}

function selectedDrinks(value) {
  const selectedCard = document.querySelector('.cardFoodDrinks .selected'); 

  if(selectedCard !== null){
    selectedCard.classList.remove('selected');
  }

  const element = document.querySelector(value);

  element.classList.add('selected');
}

function selectedCandy(value) {
  const selectedCard = document.querySelector('.cardFoodCandy .selected'); 

  if(selectedCard !== null){
    selectedCard.classList.remove('selected');
  }

  const element = document.querySelector(value);

  element.classList.add('selected');
}