// import dependencies
const express = require("express")
const cors = require("cors")
const ProjectController = require("./controllers/project.js")
const AboutController = require("./controllers/about.js")


// create app object
const app = express()


// Middleware
app.use(cors())

// routes
app.use('/projects', ProjectController)
app.use('/about', AboutController)

// landing page
app.get("/", (req, res) => {
    res.send("This is the Landing Page")
})

//declare a variable for our port number
const PORT = process.env.PORT || 3000;

// turn on the server listener
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));