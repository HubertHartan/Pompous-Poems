const express = require('express')
const app = express()
const cors = require('cors')


app.use(express.static('build'))
app.use(cors())
app.use(express.json())

const fs = require("fs") 

// Load data from JSON file into memory
const rawData = fs.readFileSync("server/poems.json")
const data = JSON.parse(rawData)


app.get('/api/poems', (req, res) => {
    res.json(data.poems)
})

app.get('/api/poems/:id', (req, res) => {
  const id = Number(req.params.id)
  const poem = data.poems.filter(p => p.id === id)[0]
  // return a 404 if there is no such poem
  if (poem) {
    res.json(poem)
  } else {
    res.status(404)
    res.send("<h1>Poem not found.</h1>")
  }
})

app.post('/api/poems', (req, res) => {
  const body = req.body
  console.log(body)
  const newPoem = {
      title: body.title,
      author: body.author,
      text: body.text,
      votes: 0,
      id: data.poems.length   
  }
  data.poems.push(newPoem) 
  res.json(newPoem)
})

app.post('/api/poems/:id', (req, res) => {
  const newPoem = req.body
  const id = Number(req.params.id)
  data.poems = data.poems.map(e => id === e.id ? newPoem : e)
  console.log("updated", newPoem)
  res.json(newPoem)
})





const PORT = (process.env.PORT || 3001)
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})