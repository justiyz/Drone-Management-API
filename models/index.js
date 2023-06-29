const dbConfig = require('../config/dbConfig.js')

const {Sequelize, DataTypes} = require('sequelize')

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false,

        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle,
        }
    }
)

sequelize.authenticate()
    .then(() => {
    console.log('connected...')
    })
    .catch(err => {
    console.log('Error'+ err)
    })

const db = {}
  
db.sequelize = Sequelize
db.sequelize = sequelize

db.drones = require('./drones.js')(sequelize, DataTypes)
db.medications = require('./medications.js')(sequelize, DataTypes)

db.sequelize.sync({force: false})
    .then(() => {
    console.log('yes re-sync done')
    })

    // Define the association between Drone and Medication which is a 1 to many relationship
    db.drones.hasMany(db.medications, {
    foreignKey: 'drone_id',
    as: 'medication'
    })

db.medications.belongsTo(db.drones, {
    foreignKey: 'drone_id',
    as: 'drone'
    })





module.exports = db