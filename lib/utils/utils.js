'use strict';

const Locales = [
  'en-us',
  'es-mx',
  'es-es',
  'pt',
  'de',
  'fr',
  'it',
  'pl',
  'ru',
  'ja',
  'ko',
  'zh-tw',
  'zh-cn'
];

module.exports = {
  checkLang: function(lang) {
    if (Locales.includes(lang.toLowerCase())) return lang;
    return Locales[0];
  }
};
