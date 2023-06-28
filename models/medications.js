// const {DataTypes} = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Medication = sequelize.define("medication", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name : {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              is: /^[\w-]+$/i, // Only allow letters, numbers, '-' and '_'
            },
        },
        weight: {
            type: DataTypes.FLOAT
        },
        code : {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              is: /^[A-Z0-9_]+$/i, // Only allow uppercase letters, numbers, and underscore
            },
        },
        image: {
            type: DataTypes.STRING,
            
    
        }
    })

    return Medication
}