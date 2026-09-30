const express = require('express')
const router = express.Router()
const registerMiddleware = require('../../middleware/registerMiddleware')
const registration = require('../../controller/authController')
const getAllUsers = require('../../controller/getAllUsers')

router.post('/register', registerMiddleware,registration)
router.get('/getAll', getAllUsers)

module.exports = router
