'use strict';

module.exports = class Player {
  constructor(
    id,
    { name, fullName, role, number, team, headshot, homeLocation }
  ) {
    this._id = id;
    this._name = name;
    this._fullName = fullName;
    this._role = role;
    this._number = number;
    this._team = team;
    this._headshot = headshot;
    this._homeLocation = homeLocation;
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

  get fullName() {
    return this._fullName;
  }

  set fullName(fullName) {
    this._fullName = fullName;
  }

  get role() {
    return this._role;
  }

  set role(role) {
    this._role = role;
  }

  get number() {
    return this._number;
  }

  set number(number) {
    this._number = number;
  }

  get team() {
    return this._team;
  }

  set team(team) {
    this._team = team;
  }

  get headshot() {
    return this._headshot;
  }

  set headshot(headshot) {
    this._headshot = headshot;
  }

  get homeLocation() {
    return this._homeLocation;
  }

  set homeLocation(homeLocation) {
    this._homeLocation = homeLocation;
  }
};
