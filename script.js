let food = '';
let drink = '';
let candy = '';

let nameUser = '';
let addressUser = '';

let valueFood = 0;
let valueDrink = 0;
let valueCandy = 0;

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

  food = elementSelected;

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

  drink = elementSelected;

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

  candy = elementSelected;

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
    nameUser = prompt('Digite seu nome:');
    addressUser = prompt('Digite seu endereço:');
    getResume();
    selectedModalOrder.classList.add('showModal');
  }

}

function getResume() {
  const product01 = food.childNodes[3].innerHTML;
  const value01 = food.childNodes[7].innerHTML;

  const product02 = drink.childNodes[3].innerHTML;
  const value02 = drink.childNodes[7].innerHTML;

  const product03 = candy.childNodes[3].innerHTML;
  const value03 = candy.childNodes[7].innerHTML;

  const selectedOrderFood = document.querySelector('.orderFood p');
  selectedOrderFood.innerHTML = product01;

  const selectedOrderDrink = document.querySelector('.orderDrink p');
  selectedOrderDrink.innerHTML = product02;

  const selectedOrderCandy = document.querySelector('.orderCandy p');
  selectedOrderCandy.innerHTML = product03;

  const selectedOrderFoodValue = document.querySelector('.orderFood span');
  selectedOrderFoodValue.innerHTML = value01;
  const valueSplitFood = value01.split("R$");
  const valueFoodPosition = valueSplitFood[1];
  valueFood = Number(valueFoodPosition.replace(',', '.'));

  const selectedOrderDrinkValu = document.querySelector('.orderDrink span');
  selectedOrderDrinkValu.innerHTML = value02;
  const valueSplitDrink = value02.split("R$");
  const valueDrinkPosition = valueSplitDrink[1];
  valueDrink = Number(valueDrinkPosition.replace(',', '.'));

  const selectedOrderCandyValue = document.querySelector('.orderCandy span');
  selectedOrderCandyValue.innerHTML = value03;
  const valueSplitCandy = value03.split("R$");
  const valueCandyPosition = valueSplitCandy[1];
  valueCandy = Number(valueCandyPosition.replace(',', '.'));

  const total = sumValues();

  const selectedButtonConfirm = document.querySelector(".buttonConfirm");

  let messageWhatsapp = `
  \n\n Olá, gostaria de fazer o pedido: \n
  - Prato: ${product01} \n
  - Bebida: ${product02} \n
  - Sobremesa: ${product03} \n
  Nome: ${nameUser} \n
  Endereco: ${addressUser} \n
  Total: R$ ${total} \n
  `
  selectedButtonConfirm.href = `https://wa.me/5527995704833?text=${encodeURI(messageWhatsapp)}`

}

function sumValues() {
  const result = (valueFood + valueDrink + valueCandy).toFixed(2);
  const resultFormatted = result.replace('.', ',');

  const totalItems = document.querySelector('.totalItem');
  totalItems.innerHTML = `R$ ${resultFormatted}`;

  return resultFormatted;
}

function handleButtonCancel() {
  const buttonCancel = document.querySelector('.buttonCancel');
  const selectedModalOrder = document.querySelector('.modalOrder');

  selectedModalOrder.classList.remove('showModal');
}
