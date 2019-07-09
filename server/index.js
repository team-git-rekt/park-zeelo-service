const express = require('express')
const app = express();
const port = 4000

app.use(express.static(__dirname + '/../client/dist'));


app.listen(port, () => {
  console.log(`Server Starts at ${port}`)
})