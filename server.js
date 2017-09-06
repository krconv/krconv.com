var url = require('url'),
  express = require('express'),
  favicon = require('serve-favicon'),
  path = require('path'),
  fs = require('fs'),
  port = process.env.PORT || 8080;

const app = express();
app.use('/static/', express.static('public/static'));
app.use(favicon(__dirname + '/public/static/favicon.ico')); 

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