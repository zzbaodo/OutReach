const express = require("express")
const router = express.Router()

// @route GET api/post
// @desc Test route
// @access Pub
router.get("/", (req, res) => res.send("Post route"))

module.exports = router