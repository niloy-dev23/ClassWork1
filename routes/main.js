const express = require('express')
const router = express.Router()
const apiURL = process.env.BASE_URL
const authRoute = require('./api/authRoute')

router.use(apiURL, authRoute)

module.exports = router