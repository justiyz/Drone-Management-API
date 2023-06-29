const db = require('../models')
// const MyCustomError = require('../errors/MyCustomError.js')


//create main model
const Drone = db.drones
const Medication = db.medications


//register drone
const registerDrone = async (req, res) => {

    if (req.body.weight_limit > 500) {
        res.status(400).json({message: 'weight limit should not exceed 500'});
        // throw new Error('weight limit should not exceed 500');
      } 
    let info = {
        serial_number: req.body.serial_number,
        model: req.body.model,
        weight_limit: req.body.weight_limit ? req.body.weight_limit  : 500,
        battery_capacity: req.body.battery_capacity,
        state: req.body.state ? req.body.state : 'LOADING',
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
    let drones = await Drone.findAll({where: {state: 'LOADING'}})
    res.status(200).send(drones)
}

//check drone battery level for a given drone
const checkDroneBatteryLevel = async (req, res) => {
    let id = req.params.id
    let drone = await Drone.findOne({where: {id: id}})
    if (drone === null) {
        res.status(400).json({message: 'drone not found'});
    } else {
        res.status(200).send(drone.battery_capacity)
    }
}


//find drone by id using the id from the req param
const findDroneById = async (req, res) => {
    let id = req.params.id
    let drone = await Drone.findOne({where: {id: id}})
    if (drone === null) {
        res.status(400).json({message: 'drone not found'});
    } else {
        res.status(200).send(drone)
    }
}

//find drone by id using the id(primary key) from the req body
const findById = async (drone_id) => {
    let drone = await Drone.findByPk(drone_id)
    if (drone === null) {
        res.status(400).json({message: 'drone not found'});
    } else {
        return drone;
    }
}


module.exports = {
    registerDrone,
    findAllMedicationsOfADrone,
    findAllAvailableDrones,
    checkDroneBatteryLevel,
    findDroneById,
    findById
}