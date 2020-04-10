const router = require('express').Router()
const authentication = require('../middlewares/authnetication')
const authorization = require('../middlewares/authorization')
const TaskController = require('../controllers/TaskController')

router.use(authentication)
router.get('/', TaskController.read)
router.post('/', TaskController.create)
router.delete('/:id', authorization, TaskController.delete)
router.patch('/:id', authorization, TaskController.edit)

module.exports = router