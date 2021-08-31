const express = require('express') 
const cors = require('cors')
const fs = require("fs") 

// Load data from JSON file into memory
const rawData = fs.readFileSync("server/poems.json")
const data = JSON.parse(rawData)

const app = express() 
app.use(cors())
app.use(express.json()) 


app.get('/api/poems', (req, res) => {
    res.json(data.units)
})

app.get('/api/poems/:id', (req, res) => {
  const id = Number(req.params.id)
  const unit = data.units.filter(u => u.id === id)[0]
  // return a 404 if there is no such poem
  if (unit) {
    res.json(unit)
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
      code: body.code,
      offering: body.offering,
      id: data.units.length   
  }
  data.units.push(newPoem) 
  res.json(newPoem)
})

app.post('/api/units/:id', (req, res) => {
  const newPoem = req.body
  const id = Number(req.params.id)
  data.units = data.units.map(e => id === e.id ? newPoem : e)
  console.log("updated", newPoem)
  res.json(newPoem)
})



app.delete('/api/units/:id', (req, res) => {
  const id = Number(req.params.id)
  const len = data.units.length
  data.units = data.units.filter(u => u.id !== id)
  // check whether we really deleted something and complain if not
  if (data.units.length < len) {
    res.json("deleted")
  } else {
    res.status(404)
    res.send("<h1>Poem not found</h1>")
  }
})



const PORT = (process.env.PORT || 3001)
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})