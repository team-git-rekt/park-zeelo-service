const express = require('express')
const app = express();
const port = 4000
const bodyParser = require('body-parser')
const houseSchema = require('../zeelo-database/houseSchema.js')
const cors = require('cors')
const path = require('path')

app.use(cors())
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));

app.get('/:id', (req, res) => {
  res.sendFile('index.html', {root: path.join(__dirname, '..', 'client', 'dist')})
})

app.get('/houses1/:id', (req, res) => {
  houseSchema.find({id: req.params.id}, (err, data) => {
    if (err) res.status(500).send(err);
    res.status(200).send(data);
  })
});

app.listen(port, () => {
  console.log(`Server Starts at ${port}`)
})