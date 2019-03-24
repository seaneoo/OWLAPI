# OWLAPI

A lightweight and fast promise based API wrapper for the Overwatch League.

[![NPM](https://img.shields.io/npm/v/owlapi.svg?style=popout)](https://www.npmjs.com/package/owlapi) [![Size](https://img.shields.io/bundlephobia/min/owlapi.svg?style=popout)](https://www.npmjs.com/package/owlapi)

## Usage

```javascript
const OWLAPI = require('owlapi');
const owl = new OWLAPI('en-us'); // Optional language argument. Defaults to en-us.
```

### Get an array of all the teams

```javascript
// Return an array for a piece of data from every team.
// Use a variable name from the Team model as the argument.
owl.allTeams('name').then(teams => {});
```

### Get a single team

```javascript
// Returns a Team object.
// Use the name or numeric ID of a team.
owl.team('london spitfire').then(team => {});
```

## Models

### Team

`id, name, abbr, logo, division, location, primaryColor, secondaryColor, tertiaryColor, placement, website`

### Languages

`en-us, es-mx, es-es, pt, de, fr, it, pl, ru, ja, ko, zh-tw, zh-cn`
