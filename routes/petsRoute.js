const express = require('express')

const router = express.Router()
const Pet = require('../models/petsModel')

router.get('/getallpets', async (req, res) => {
    try {
        const pets = await Pet.find({})
        res.send(pets)
    } catch (error) {
        res.status(400).json({ message: error })
    }
})

module.exports = router