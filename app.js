const express = require('express')
var fs = require('fs');
const app = express()
const port = 3000
app.use(express.static('public'));

app.use(express.urlencoded({
    extended: true
  }))

app.get('/', (req, res) => {
    res.sendFile('/public/index.html', {root: __dirname })
})



app.post('/results', (req, res) => {
    const name = req.body.name;
    console.log(name)
    
    res.sendFile('/public/results.html', {root: __dirname })
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})