const router = require('express').Router()
const userCtrl = require('../controllers/userCtrl')
const auth = require('../middleware/auth')

// register user
router.post('/register',userCtrl.registerUser)
//login user
router.post('/login',userCtrl.loginUser)
//verify token
router.get('/verify',userCtrl.verifiedToken)

module.exports= router