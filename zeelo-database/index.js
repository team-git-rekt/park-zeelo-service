// import mongoose from 'mongoose'
const mongoose = require('mongoose')
const mongoUri = 'mongodb://localhost/zeelo1'

const db = mongoose.connect((mongoUri), { useNewUrlParser: true });

module.exports = db