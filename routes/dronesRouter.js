//imports
const droneController = require('../controllers/dronesController.js')


//router
const router = require('express').Router()


//use routers 
router.post('/register-drone', droneController.registerDrone)
router.get('/find-all/:id', droneController.findAllMedicationsOfADrone)
router.get('/find-all-available', droneController.findAllAvailableDrones)
router.get('/check-drone/:id', droneController.checkDroneBatteryLevel)
router.get('/:id', droneController.findDroneById)
router.get('/medications/:id', droneController.findAllMedicationsOfADrone)
router.get('/find-one', droneController.findById)


module.exports = router