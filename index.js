let number = 0;
const result = document.querySelector('#result-value');
const increment = document.querySelector('#increment');
const decrement = document.querySelector('#decrement');
const reset = document.querySelector('#reset');
const zdc = document.querySelector('#zdc');
const inputValueInc = document.querySelector('#increment-value');
const inputValueDec = document.querySelector('#decrement-value');
const LimiteHauteValue = document.querySelector('#limitehaute');
const LimiteBasseValue = document.querySelector('#limitebasse');
const notification = document.querySelector('#notification');
const NotificationText = document.querySelector('#notification-texte');
const limiteH = 'LIMITE HAUTE ATTINT';
const limiteB = 'LIMITE BASSE ATTINT';

/* FUNCTION */

// INCREMENT
const btnIncrement = () => {
  number = number + +inputValueInc.value;
  result.textContent = number;

  if (number > LimiteHauteValue.value) {
    result.textContent = LimiteHauteValue.value;
    NotificationText.textContent = limiteH;
    Notification();
  }
};

// DECREMENT
const btnDecrement = () => {
  number = number - inputValueDec.value;
  result.textContent = number;

  limite_Basse();
};

// RESET
const btnReset = () => {
  number = 0;
  result.textContent = number;
};

// ZONE DE CLICK
const zdcGauche = (e) => {
  e.preventDefault();
  number--;
  result.textContent = number;
  limite_Basse();
};

// LIMITE BASSE
function limite_Basse() {
  if (number < LimiteBasseValue.value) {
    result.textContent = LimiteBasseValue.value;
    NotificationText.textContent = limiteB;
    Notification();
  }
}

// NOTIFICATION
const Notification = () => {
  notification.classList.add('afficher');
  result.classList.add('limite-atteinte');

  setTimeout(() => {
    notification.classList.remove('afficher');
    result.classList.remove('limite-atteinte');
  }, 3000);
};

/* addEventListener */

// INCREMENT and DECREMENT

increment.addEventListener('click', btnIncrement);

decrement.addEventListener('click', btnDecrement);

// RESET
reset.addEventListener('click', btnReset);

// ZONE DE CLICK
zdc.addEventListener('click', btnIncrement);

zdc.addEventListener('contextmenu', zdcGauche);
