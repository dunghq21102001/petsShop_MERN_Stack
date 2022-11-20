const mongoose = require('mongoose')
var mongoURL = 'mongodb+srv://dbPets:dunghq21102001@cluster0.aepwcp8.mongodb.net/petsDb'

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true })

var db = mongoose.connection

db.on('connected', () => {
    console.log(`MongoDB connection successful`)
})
db.on('error', () => {
    console.log(`MongoDB connection failed`)
})

module.exports = mongoose