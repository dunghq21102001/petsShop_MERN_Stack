const mongoose = require('mongoose')

const itemsSchema = mongoose.Schema({
    name: { type: String, require },
    types: { type: String, require },
    img: { type: String, require },
    price: { type: String, require },
    origin: { type: String, require },
    description: { type: String, require },
    forPetsType: { type: String, require }
}, {
    timestamps: true,
})

const itemsModel = mongoose.model('items', itemsSchema)
module.exports = itemsModel