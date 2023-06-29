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


//check all medications of a drone
const findAllMedicationsOfADrone = async (req, res) => {
    const data = await Drone.findAll({
        include: [{
            model: Medication,
            as: 'medication'
        }],
        where: {id: req.params.id}
    })
    res.status(200).send(data)
}

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
    } else {
        res.status(200).send(drone)
    }
}


//find drone by id using the id from the req param
const findDroneById = async (req, res) => {
    console.log('DRONE -> {}', req.params.id)
    let id = req.params.id
    let drone = await Drone.findOne({where: {id: id}})
    if (drone === null) {
        res.status(400).json({error: 'Drone not found'})
    } else {
        res.status(200).send(drone)
    }
}

//find drone by id using the id(primary key) from the req body
const findById = async (drone_id) => {
    let drone = await Drone.findByPk(drone_id)
    if (drone === null) {
        //HANDLE ERROR HERE
    } else {
        return drone;
    }
}

//check if drone exists


//periodic tasks to check drone battery levels




module.exports = {
    registerDrone,
    findAllMedicationsOfADrone,
    findAllAvailableDrones,
    checkDroneBatteryLevel,
    findDroneById,
    findById
}