const express = require('express');
const app  = express();
const bodyParser = require('body-parser');
const inbox = require('./util/inbox.json');
const spam = require('./util/spam.json');
const deleted = require('./util/deleted.json');
const custom = require('./util/custom.json');

app.get('/home', (req, res) => {
  res.header('Access-Control-Allow-Origin','*');
  res.json({'inbox': inbox, 'spam': spam, 'deleted': deleted, 'custom': custom}); 
  console.log(res);
});

app.use(bodyParser.urlencoded({
  extended: true
}));


app.listen(8080, () => {
  console.log('App running successfully');
});
