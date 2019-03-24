'use strict';

const request = require('request-promise');
const { utils, json } = require('./utils');
const { Team, Player } = require('./models');

module.exports = class OWLAPI {
  constructor(locale = 'en-us') {
    global.locale = utils.parseLocale(locale);
  }

  async allTeams(value = 'name') {
    const key = value;
    return json
      .parse(`https://api.overwatchleague.com/v2/teams?locale=${global.locale}`)
      .then(function(res) {
        let competitors = [];
        for (let i = 0; i < res.data.length; i++) {
          const competitorobj = res.data[i];
          const competitor = new Team(competitorobj.id, {
            name: competitorobj.name,
            abbr: competitorobj.abbreviatedName,
            logo: competitorobj.logo.main.png,
            division: utils.convertDivision(competitorobj.divisionId),
            location: competitorobj.location,
            primaryColor: competitorobj.colors.primary.color,
            secondaryColor: competitorobj.colors.secondary.color,
            tertiaryColor: competitorobj.colors.tertiary.color,
            website: competitorobj.website
          });

          if (value == '*') {
            competitors.push(competitor);
          } else {
            competitors.push(competitor[key]);
          }
        }
        return competitors;
      });
  }

  async team(key) {
    let id = utils.locateCompetitor(key);
    return json
      .parse(
        `https://api.overwatchleague.com/v2/teams/${id}?locale=${global.locale}`
      )
      .then(function(res) {
        return new Team(res.data.id, {
          name: res.data.name,
          abbr: res.data.abbreviatedName,
          logo: res.data.logo.main.png,
          division: utils.convertDivision(res.data.divisionId),
          location: res.data.location,
          primaryColor: res.data.colors.primary.color,
          secondaryColor: res.data.colors.secondary.color,
          tertiaryColor: res.data.colors.tertiary.color,
          website: res.data.website
        });
      });
  }

  async allPlayers(value = 'name') {
    const key = value;
    return json
      .parse(`https://api.overwatchleague.com/players?locale=${global.locale}`)
      .then(function(res) {
        let players = [];
        for (let i = 0; i < res.content.length; i++) {
          const playerobj = res.content[i];
          const player = new Player(playerobj.id, {
            name: playerobj.name,
            fullName: playerobj.givenName + ' ' + playerobj.familyName,
            role: playerobj.attributes.role,
            number: playerobj.attributes.player_number,
            team: playerobj.teams[0].team.name,
            headshot: playerobj.headshot,
            homeLocation: playerobj.homeLocation
          });

          if (value == '*') {
            players.push(player);
          } else {
            players.push(player[key]);
          }
        }
        return players;
      });
  }

  async player(key) {
    let id = await utils.locatePlayer(key);
    return json
      .parse(
        `https://api.overwatchleague.com/players/${id}?locale=${global.locale}`
      )
      .then(function(res) {
        let path = res.data.player;
        return new Player(path.id, {
          name: path.name,
          fullName: path.givenName + ' ' + path.familyName,
          role: path.attributes.role,
          number: path.attributes.player_number,
          team: path.teams[0].team.name,
          headshot: path.headshot,
          homeLocation: path.homeLocation + ' ' + path.nationality
        });
      });
  }
};
