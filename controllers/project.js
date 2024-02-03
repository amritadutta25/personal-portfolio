// import dependencies
const Projects = require("../models/projects.json")
const express = require('express')

// create router
const router = express.Router()

// index page to show all projects -> GET request to /projects
router.get("/", (req, res) => {
    res.json(Projects)
})


module.exports = router