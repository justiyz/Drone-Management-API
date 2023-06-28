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

module.exports = {
    addMedication,
    findALLMedications
}