import { translate } from './translate.js';

function translateText() {
  const inputText = document.getElementById("inputText").value.toLowerCase();
  const inputLanguage = document.getElementById("inputLanguage").value;
  const outputLanguage = document.getElementById("outputLanguage").value;

  const translated = translate(inputLanguage, outputLanguage, inputText);

  if (translated != undefined) {
    document.getElementById("translatedText").value = `${translated}`;
  } else {
    document.getElementById("translatedText").value = 'Not Found';
  }
}

window.translateText = translateText;