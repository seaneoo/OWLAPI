# OWLAPI

A lightweight and fast promise based API wrapper for the Overwatch League.

[![NPM](https://img.shields.io/npm/v/owlapi.svg?style=popout)](https://www.npmjs.com/package/owlapi) [![Size](https://img.shields.io/bundlephobia/min/owlapi.svg?style=popout)](https://www.npmjs.com/package/owlapi)

## Usage

```javascript
const OWLAPI = require('owlapi');
const owl = new OWLAPI('en-us');
```

Locale Codes:

`en-us, es-mx, es-es, pt, de, fr, it, pl, ru, ja, ko, zh-tw, zh-cn`

### Get an array of all the teams

Returns an array containing the data specified for every team.
Possible data keys: `*, id, name, abbr, logo, division, location, primaryColor, secondaryColor, tertiaryColor, website`

```javascript
owl.allTeams('name').then(teams => {});
```

This example will return:

```
[ 'Dallas Fuel',
  'Philadelphia Fusion',
  'Houston Outlaws',
  'Boston Uprising',
  'New York Excelsior',
  'San Francisco Shock',
  'Los Angeles Valiant',
  'Los Angeles Gladiators',
  'Florida Mayhem',
  'Shanghai Dragons',
  'Seoul Dynasty',
  'London Spitfire',
  'Chengdu Hunters',
  'Hangzhou Spark',
  'Paris Eternal',
  'Toronto Defiant',
  'Vancouver Titans',
  'Washington Justice',
  'Atlanta Reign',
  'Guangzhou Charge' ]
```

### Get a single team

Returns a Team object for the specified team from the name or numeric ID.

```javascript
owl.team('vancouver titans').then(team => {});
```

This example will return:

```
Team {
  _id: 7696,
  _name: 'Vancouver Titans',
  _abbr: 'VAN',
  _logo:
   'https://bnetcmsus-a.akamaihd.net/cms/gallery/F1WE9LBKIGHD1543976752064.png',
  _division: 'PAC',
  _location: 'Vancouver',
  _primaryColor: '#09226B',
  _secondaryColor: '#2FB228',
  _tertiaryColor: '#FFFFFF',
  _website: 'https://titans.overwatchleague.com' }
```

### Get an array of all the players

Returns an array containing the data specified for every player.
Possible data keys: `*, id, name, fullName, role, number, team, headshot, homeLocation`

```javascript
owl.allPlayers('name').then(players => {});
```

This example will return:

```
[ 'shu',
  'Happy',
  'dafran',
  'ArK',
  'JJANU',
  'RoKy',
  'Greyy',
  'Finnsi',
  ... more items ]
```

### Get a single player

Returns a Player object for the specified player from the name or numeric ID.

```javascript
owl.player('jjonak').then(player => {});
```

This example will return:

```
Player {
  _id: 4653,
  _name: 'JJONAK',
  _fullName: 'SeongHyun Bang',
  _role: 'support',
  _number: 44,
  _team: 'New York Excelsior',
  _headshot:
   'https://bnetcmsus-a.akamaihd.net/cms/gallery/BK8ZCWMAV6OR1549652238753.png',
  _homeLocation: 'Osan KR' }
```
