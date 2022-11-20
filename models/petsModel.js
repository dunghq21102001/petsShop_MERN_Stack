const mongoose = require('mongoose')

const petsSchema = mongoose.Schema({
    name: { type: String, require },
    type: { type: String, require },
    img: { type: String, require },
    id: { type: String, require },
    petsReview: { type: String, require },
    price: { type: String, require },
    origin: { type: String, require },
    description: { type: String, require },
}, {
    timestamps: true,
})

const petsModel = mongoose.model('pets', petsSchema)
module.exports = petsModel