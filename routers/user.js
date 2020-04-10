const router = require('express').Router()
const UserController  = require('../controllers/UserController')
const authentication = require('../middlewares/authnetication')

router.get('/', authentication, UserController.read)
router.post('/register', UserController.register)
router.post('/login', UserController.login)
router.post('/googleSign', UserController.googleSign)


module.exports = router