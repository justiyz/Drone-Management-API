//imports
const droneController = require('../controllers/dronesController.js')
// const medicationController = require('../controllers/medicationsController.js')


//router
const router = require('express').Router()


//use routers 
router.post('/register-drone', droneController.registerDrone)
router.post('/load-drone/:id', droneController.loadDrone)
router.get('/find-all/:id', droneController.findAllMedicationsOfADrone)
router.get('/find-all-available', droneController.findAllAvailableDrones)
router.get('/check-drone/:id', droneController.checkDroneBatteryLevel)
router.get('/:id', droneController.findDroneById)


// //medication url and controller
// router.post('/add', medicationController.addMedication)
// router.get('/find/all', medicationController.findALLMedications)

module.exports = router