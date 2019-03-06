'use strict';

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
      placement,
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
    this._placement = placement;
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

  get placement() {
    return this._placement;
  }

  set placement(placement) {
    this._placement = placement;
  }

  get website() {
    return this._website;
  }

  set website(website) {
    this._website = website;
  }
};
