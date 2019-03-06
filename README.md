# OWLAPI
A lightweight and fast promise based API wrapper for the Overwatch League.

## Usage

```javascript
const OWLAPI = require('owlapi');
const owl = new OWLAPI('en-us'); // Optional language argument. Defaults to en-us.
```

### Get an array of all the teams

```javascript
// Returns an array of values. Argument for allTeams is an object key.
owl.allTeams('name').then(teams => {
  
});
```
