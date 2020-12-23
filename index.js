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

/* FUNCTION */

// INCREMENT
const btnIncrement = () => {
  number += +inputValueInc.value;
  result.textContent = number;

  const limiteH = LimiteHauteValue.value;

  if (number >= limiteH) {
    result.textContent = limiteH;
    NotifText(`LIMITE HAUTE (${limiteH}) ATTEINTE`);
    Notification();
  }
};

// DECREMENT
const btnDecrement = () => {
  number -= inputValueDec.value;
  result.textContent = number;
  limite_Basse();
};

// RESET
const btnReset = () => {
  Reset();
};

// ZONE DE CLICK
const zdcGauche = (e) => {
  e.preventDefault();
  number -= inputValueDec.value;
  result.textContent = number;
  limite_Basse();
};

function Reset() {
  number = 0;
  result.textContent = number;
  inputValueDec.value = 1;
  inputValueInc.value = 1;
  LimiteHauteValue.value = 3;
  LimiteBasseValue.value = -3;
}

// LIMITE BASSE
function limite_Basse() {
  const limiteB = LimiteBasseValue.value;

  if (number <= limiteB) {
    result.textContent = limiteB;
    NotifText(`LIMITE BASSE (${limiteB}) ATTEINTE`);
    Notification();
  }
}

// NOTIFICATION
function NotifText(val) {
  return (NotificationText.textContent = val);
}

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
