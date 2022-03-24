const Router = require('express')
const router = new Router()
const deviceController = require('../controllers/deviceController')

router.post('/', deviceController.create)
router.get('/', deviceController.get)
router.get('/:id', deviceController.getId)

module.exports = router