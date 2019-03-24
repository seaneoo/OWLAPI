'use strict';

const Player = require('./Player');
const { json } = require('../utils');

module.exports = class Team {
  constructor(
    id,
    {
      name,
      abbr,
      logo,
      division,
      location,
      primaryColor,
      secondaryColor,
      tertiaryColor,
      website
    }
  ) {
    this._id = id;
    this._name = name;
    this._abbr = abbr;
    this._logo = logo;
    this._division = division;
    this._location = location;
    this._primaryColor = primaryColor;
    this._secondaryColor = secondaryColor;
    this._tertiaryColor = tertiaryColor;
    this._website = website;
  }

  get id() {
    return this._id;
  }

  set id(id) {
    this._id = id;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  get abbr() {
    return this._abbr;
  }

  set abbr(abbr) {
    this._abbr = abbr;
  }

  get logo() {
    return this._logo;
  }

  set logo(logo) {
    this._logo = logo;
  }

  get division() {
    return this._division;
  }

  set division(division) {
    this._division = division;
  }

  get location() {
    return this._location;
  }

  set location(location) {
    this._location = location;
  }

  get primaryColor() {
    return this._primaryColor;
  }

  set primaryColor(primaryColor) {
    this._primaryColor = primaryColor;
  }

  get secondaryColor() {
    return this._secondaryColor;
  }

  set secondaryColor(secondaryColor) {
    this._secondaryColor = secondaryColor;
  }

  get tertiaryColor() {
    return this._tertiaryColor;
  }

  set tertiaryColor(tertiaryColor) {
    this._tertiaryColor = tertiaryColor;
  }

  get website() {
    return this._website;
  }

  set website(website) {
    this._website = website;
  }

  players() {
    return json
      .parse(`https://api.overwatchleague.com/v2/teams/${this._id}`)
      .then(function(res) {
        let players = [];
        for (let i = 0; i < res.data.players.length; i++) {
          const playerobj = res.data.players[i];
          const player = new Player(playerobj.id, {
            name: playerobj.name,
            fullName: playerobj.fullName,
            role: playerobj.role,
            number: playerobj.number,
            team: res.data.name,
            headshot: playerobj.headshot,
            homeLocation: playerobj.homeLocation
          });
          players.push(player);
        }
        return players;
      });
  }
};
