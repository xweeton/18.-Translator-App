const englishTranslations = {
  "english": {
    "morning": "morning"
  },
  "malay": {
    "morning": "pagi"
  },
  "spanish": {
    "morning": "mañana"
  },
};

const malayTranslations = {
  "english": {
    "pagi": "morning"
  },
  "malay": {
    "pagi": "pagi"
  },
  "spanish": {
    "pagi": "mañana"
  },
};

const spanishTranslations = {
  "english": {
    "mañana": "morning"
  },
  "malay": {
    "mañana": "pagi"
  },
  "spanish": {
    "mañana": "mañana"
  },
};

export function translate(inputLanguage, outputLanguage, inputText) {
  if (inputLanguage === "english") {
    return englishTranslations[outputLanguage][inputText];
  } else if (inputLanguage === "malay") {
    return malayTranslations[outputLanguage][inputText];
  } else if (inputLanguage === "spanish") {
    return spanishTranslations[outputLanguage][inputText];
  }
}