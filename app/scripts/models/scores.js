var Score = Backbone.Model.extend ({
  idAttribute: '_id',
  defaults: {
   game: 'N/A',
   oppnent: 'N/A',
   score: 'N/A'
 }
});

module.exports = Score;
