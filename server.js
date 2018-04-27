const express = require('express')
const compression = require('compression')
const PORT = process.env.PORT || 3000

var app = express()

app.use(compression())
app.use(express.static('dist'))

app.listen(PORT, () => console.log(`App listening on port ${PORT}`))
