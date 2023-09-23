const mongoose = require('mongoose');

const url =
  'mongodb+srv://sh66825hs:<password>@issue-cluster.dssured.mongodb.net/'

mongoose.connect(url);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connecting to MongoDB'));

db.once('open', () => {
  console.log('Connected to Database :: MongoDB ')
})

module.exports = db;