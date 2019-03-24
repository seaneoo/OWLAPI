'use strict';

const json = require('./json');

const jLocales = require('../data/locales.json'),
  jCompetitors = require('../data/competitors.json');

module.exports = {
  parseLocale: locale => {
    if (jLocales.includes(locale.toLowerCase())) return locale;
    return jLocales[0];
  },

  convertDivision: divId => {
    let divStr = null;
    if (divId == 79) divStr = 'ATL';
    else if (divId == 80) divStr = 'PAC';
    return divStr;
  },

  locateCompetitor: competitor => {
    let id = 0,
      key = null;
    isNaN(competitor)
      ? (key = competitor.toLowerCase().replace(/\s/g, ''))
      : (key = competitor);
    jCompetitors.forEach(team => {
      if (team.values.includes(key)) {
        id = team.id;
      } else if (team.id == key) {
        id = team.id;
      }
    });
    return id;
  },

  locatePlayer: async player => {
    let id = 0,
      key = player
        .toString()
        .toLowerCase()
        .replace(/\s/g, '');
    return json
      .parse(`https://api.overwatchleague.com/players?locale=${global.locale}`)
      .then(function(res) {
        for (let i = 0; i < res.content.length; i++) {
          const element = res.content[i];
          let pId = element.id;
          let pName = element.name.toLowerCase();
          let pFullName =
            element.givenName.toLowerCase().replace(/\s/g, '') +
            element.familyName.toLowerCase().replace(/\s/g, '');

          if (pId == key || pName == key || pFullName == key) {
            id = element.id;
          }
        }
        return id;
      });
  }
};
