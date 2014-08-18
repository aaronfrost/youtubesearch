var express = require('express');
var app = express();
var search = require('youtube-search');

var options = {
  maxResults: 20,
  startIndex: 1
};

app.set('port', 3000);
app.use(express.static(__dirname + '/public'));

app.get('/search', function(req, res){

  var searchTerm = req.query.searchTerm;

  if(!searchTerm){
    res.send('');
    return;
  }

  search(searchTerm, options, function(err, results) {
    if(err) return console.log(err);

//    console.log(results);
    console.log("Found results: %d", results.length);
    res.send(results);
  });

});

var server = app.listen(app.get('port'), function() {
  console.log('Listening on port %d', server.address().port);
});