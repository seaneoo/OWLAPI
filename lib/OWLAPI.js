'use strict';

const request = require('request-promise');
const utils = require('./utils/utils');
const { Team } = require('./models');

module.exports = class OWLAPI {
  constructor(lang = 'en-us') {
    this.lang = utils.checkLang(lang);
  }

  allTeams(key = 'name') {
    return request({
      uri: `https://api.overwatchleague.com/v2/teams?locale=${this.lang}`,
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

  team(key) {
    let id = utils.findTeam(key);
    return request({
      uri: `https://api.overwatchleague.com/v2/teams/${id}?locale=${this.lang}`,
      json: true
    })
      .then(function(json) {
        return new Team(json.data.id, {
          name: json.data.name,
          abbr: json.data.abbreviatedName,
          logo: json.data.logo,
          division: json.data.divisionId,
          location: json.data.location,
          primaryColor: json.data.colors.primary.color,
          secondaryColor: json.data.colors.secondary.color,
          tertiaryColor: json.data.colors.tertiary.color,
          placement: json.data.placement,
          website: json.data.website
        });
      })
      .catch(function(err) {
        throw new Error(err);
      });
  }
};
