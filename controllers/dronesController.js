const db = require('../models')

//create main model
const Drone = db.drones
const Medication = db.medications

//register drone
const registerDrone = async (req, res) => {
    let info = {
        serial_number: req.body.serial_number,
        model: req.body.model,
        weight_limit: req.body.weight_limit,
        battery_capacity: req.body.battery_capacity,
        state: req.body.state ? req.body.state : 'IDLE',
        is_battery_level_low: req.body.isBatteryLevelLow ? req.body.isBatteryLevelLow : false

    }

    const drone = await Drone.create(info)
    res.status(200).send(drone)
    console.log(drone)
}

//load drone with medicated items
const loadDrone = async (req, res) => {}

//check all medications of a drone
const findAllMedicationsOfADrone = async (req, res) => {}

//check available drones for loading
const findAllAvailableDrones = async (req, res) => {
    let drones = await Drone.findAll({where: {state: 'IDLE'}})
    res.status(200).send(drones)
}

//check drone battery level for a given drone
const checkDroneBatteryLevel = async (req, res) => {
    let id = req.params.id
    let drone = await Drone.findOne({where: {id: id}})
    if (drone === null) {
        console.log(' not found ')
    }
}


//find drone by id
const findDroneById = async (req, res) => {
    let id = req.params.id
    let drone = await Drone.findOne({where: {id: id}})
    if (drone === null) {
        console.log('drone not found')
    } else {
        res.status(200).send(drone)
    }
}

//check if drone exists


//periodic tasks to check drone battery levels


module.exports = {
    registerDrone,
    loadDrone,
    findAllMedicationsOfADrone,
    findAllAvailableDrones,
    checkDroneBatteryLevel,
    findDroneById
}