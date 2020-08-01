// A simple C2 Server used to Collect Information

const express = require('express')
var cors = require('cors')

const app = express()
const port = 8001

app.use(cors())

app.use(express.json()) 

app.post('/', (req, res, next) => {
  console.log("Data Received:")
  console.log(req.body)

  res.send("Received")
})

app.use("/static", express.static("public"))

app.listen(port, () => console.log(`C2 Server listening at http://localhost:${port}`))