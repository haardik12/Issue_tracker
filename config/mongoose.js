const mongoose = require('mongoose');

const url =
  'mongodb+srv://Haardik:09aNnFf1BrCj7sxo@cluster0.cgfudae.mongodb.net/issueDb'

mongoose.connect(url);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connecting to MongoDB'));

db.once('open', () => {
  console.log('Connected to Database :: MongoDB ')
})

module.exports = db;