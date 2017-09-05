var url = require('url'),
  express = require('express'),
  port = 8080;

const app = express();
app.use('/', express.static('public'));
app.listen(port, function() {
  console.log('Website server listening on :' + port);
});