'use strict';

const request = require('request-promise');

let OWLAPI = function(lang) {};

OWLAPI.prototype.team = function(key) {
  return request({
    uri: 'https://api.overwatchleague.com/v2/teams',
    json: true
  })
    .then(function(res) {
      console.log(res);
    })
    .catch(function(err) {});
};

module.exports = OWLAPI;
