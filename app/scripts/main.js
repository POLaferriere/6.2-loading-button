var ScoresCollection = require('models/scores-collection');

$(document).ready(function() {
  // prepend the contents of `app/templates/application.hbs` into `body`
  $('#container').append(JST.application());

  var scores = new ScoresCollection();

  $('button').on('click', function() {
    scores.fetch();
  });

  scores.on('request', function() {
    $('button').text('loading...');
    $('button').css('color', 'gray');
  });

  scores.on('sync', function(coll) {
    setTimeout(function() {
      $('button').text('Submit');
      $('button').css('color', '#333');
    }, 1000);
  });

  scores.on('add', function(scores) {
    setTimeout(function() {
      renderScores(scores);
    }, 1000);
  });

});

function renderScores(scores) {
  console.log(scores.toJSON());
  $('ul').append(JST.scores(scores.toJSON()));
}
