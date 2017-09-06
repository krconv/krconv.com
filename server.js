var url = require('url'),
  express = require('express'),
  path = require('path'),
  fs = require('fs'),
  port = 8080;

const app = express();
app.use('/static/css/', express.static('public/static/css'));
app.use('/static/js/', express.static('public/static/js'));

app.get('/page/*', function(req, res) {
  var file = __dirname + '/public' + req.path + '.html';
  if (!fs.existsSync(file))
    file = __dirname + '/public/page/404.html'
  res.sendFile(file);
});

app.get('/*', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});


app.listen(port, function() {
  console.log('Website server listening on :' + port);
});