const express = require('express')
const db = require('./db.js')
const pets = require('./models/petsModel')

const app = express()

app.use(express.json())
const petsRoute = require('./routes/petsRoute')
const userRoute = require('./routes/userRoute')
const itemsRoute = require('./routes/itemsRoute')

app.use('/api/pets/', petsRoute)
app.use('/api/items/', itemsRoute)
app.use('/api/users/', userRoute)
app.get('/', (req, res) => {
    res.send('server working 🔥🔥🔥')
})


const port = process.env.PORT || 5000

app.listen(port, () => `Server running on port`)