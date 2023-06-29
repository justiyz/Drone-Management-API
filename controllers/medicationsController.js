const db = require('../models')

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
    const medications = req.body.medications
    const saveItems = []

        for (const medication of medications) {
            if (medication.drone_id !== null) {
                let data = {
                    name: medication.name,
                    weight: medication.weight,
                    code: medication.code,
                    image: medication.image,
                    drone_id: medication.drone_id,
                    id: medication.id
                }
                const newMedication = await Medication.create(data)
                saveItems.push(newMedication)
            } else {
                //Handle Error because in loading a drone, a drone has to first exist in the db
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