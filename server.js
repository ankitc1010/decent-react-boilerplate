const express = require('express')
const compression = require('compression')
const userRouter = require('./routers/userRouter')
const companyRouter = require('./routers/companyRouter')
const PORT = process.env.PORT || 3000

var app = express()

app.use(compression())
app.use('/api/users/', userRouter)
app.use('/api/companies', companyRouter)
app.use(express.static('dist'))

app.listen(PORT, () => console.log(`App listening on port ${PORT}`))
