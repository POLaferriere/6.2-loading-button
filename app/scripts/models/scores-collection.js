var Score = require('models/scores');

var ScoresCollection = Backbone.Collection.extend ({
  model: Score,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/aaronsstuff'
});

module.exports = ScoresCollection;
