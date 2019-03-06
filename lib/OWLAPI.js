'use strict';

const request = require('request-promise');
const utils = require('./utils/utils');

module.exports = class OWLAPI {
  constructor(lang) {
    this.lang = utils.checkLang(lang);
  }

  allTeams(key = 'name') {
    return request({
      uri: 'https://api.overwatchleague.com/v2/teams',
      json: true
    })
      .then(function(json) {
        let competitors = [];
        for (let i = 0; i < json.data.length; i++) {
          const competitor = json.data[i];
          competitors.push(competitor[key]);
        }
        return competitors;
      })
      .catch(function(err) {
        throw new Error(err);
      });
  }
};
