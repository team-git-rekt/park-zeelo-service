const mongoose = require('mongoose')
const db = require('./index.js')
mongoose.Promise = global.Promise

const houseSchema = new mongoose.Schema({
  id: Number,
  images: [ String ] 
});

const house = mongoose.model('house', houseSchema)

module.exports = house;

