const express = require('express');
const app = express();
const db = require('./config/mongoose')
const port = 5000;
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, 'assets')))

app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

app.use(expressLayouts)

app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/', require('./routes'));

app.listen(port, function (err) {
  if (err) {
    console.log(`error in running the server ${err}`)
  }

  console.log(`server is running on port: ${port}`)
});