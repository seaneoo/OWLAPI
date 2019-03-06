# OWLAPI
A lightweight and fast promise based API wrapper for the Overwatch League.

## Usage

```javascript
const OWLAPI = require('owlapi');
const owl = new OWLAPI('en-us');

owl.allTeams().then(team => {
  console.log(team);
});
```
