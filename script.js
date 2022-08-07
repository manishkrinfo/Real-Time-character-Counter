const charVal = document.getElementById('textarea');
let totalCount = document.getElementById('total-conter');
let remainingCount = document.getElementById('remaining-counter');

let userChar = 0;


// to update character on screen
const updateCounter = () => {
    userChar = charVal.value.length;

    totalCount.innerText = userChar;

    remainingCount.innerText = 150 - userChar;
}

charVal.addEventListener('keyup', () => updateCounter() );

// to copy the text
const copyText = () => {
    charVal.select();
    charVal.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(charVal.value);
  };