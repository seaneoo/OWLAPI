const request = require('request-promise');

module.exports = {
  parse: async uri => {
    return request({ uri, json: true })
      .then(function(res) {
        return res;
      })
      .catch(function(err) {
        throw new Error(err);
      });
  }
};
