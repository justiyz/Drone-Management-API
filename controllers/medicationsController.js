const db = require('../models')
const droneController = require('../controllers/dronesController')

//model
const Medication = db.medications


const addMedication = async (req, res) => {
    let data = {
        name: req.body.name,
        weight: req.body.weight,
        code: req.body.code,
        image: req.body.image
    }

    const medication = await Medication.create(data)
    res.status(200).send(medication)
}


const findALLMedications = async (req, res) => {
    const medications = await Medication.findAll({})
    res.status(200).send(medications)
}


//load drone with medicated items
const loadDrone = async (req, res) => {
    try {
        let droneId = req.body.drone_id;
        let drone = await droneController.findById(droneId)
        
        const medications = req.body.medications
        const saveItems = []

        for (const medication of medications) {
            if (drone.battery_capacity > 25) {
                let data = {
                    name: medication.name,
                    weight: medication.weight,
                    code: medication.code,
                    image: medication.image,
                    drone_id: drone.id,
                    id: medication.id
                }
                const newMedication = await Medication.create(data)
                saveItems.push(newMedication) 
            } else {
                //HANDLE ERROR
                }
        }
        res.status(200).send(saveItems)
        
    } catch (error) {
        console.log(error)
        res.status(500).json({error: 'Failed to saved items'})
    }

    
    
    
}

module.exports = {
    addMedication,
    findALLMedications,
    loadDrone
}