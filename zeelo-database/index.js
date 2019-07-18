// import mongoose from 'mongoose'
const mongoose = require('mongoose')
const mongoUri = 'mongodb://database:27017/zeelo1'
// const mongoUri = 'mongodb://localhost/zeelo1'

const db = mongoose.connect(mongoUri, { useNewUrlParser: true });

module.exports = db