// import dependencies
const express = require('express')
const about = require("../models/about.json")

// create router
const router = express.Router()

// route to get 'About' section
// GET request to /about
router.get("/", (req, res) => {
    res.json(about)
})

module.exports = router