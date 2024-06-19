import i18next from 'i18next';
import { spanish, english } from './languages.js';
(async () => {
  const langSelected = getStorage('languageKey') || 'es';
  await i18next.init({
    lng: langSelected, // if you're using a language detector, do not define the lng option
    debug: true,
    resources: {
    es: {
      translation: spanish
    },
    en: {
      translation: english
    }
    }
    });
})();



export { i18next };