const droneController = require('../controllers/dronesController.js')

const router = require('express').Router()

router.post('/register-drone', droneController.registerDrone)

router.post('/load-drone/:id', droneController.loadDrone)

router.get('/find-all/:id', droneController.findAllMedicationsOfADrone)

router.get('/find-all-available', droneController.findAllAvailableDrones)

router.get('/check-drone/:id', droneController.checkDroneBatteryLevel)

router.get('/:id', droneController.findDroneById)

module.exports = router