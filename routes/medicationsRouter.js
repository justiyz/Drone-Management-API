const medicationController = require('../controllers/medicationsController.js')


//router
const router = require('express').Router()

//medication url and controller
router.post('/add', medicationController.addMedication)
router.get('/find/all', medicationController.findALLMedications)


module.exports = router