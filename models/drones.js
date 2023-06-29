const {DataTypes} = require("sequelize");
const { StatusEnum, ModelEnum } = require('../enum');

module.exports = (sequelize, DataTypes) => {
    const Drone = sequelize.define("drone", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        serial_number: {
            type: DataTypes.STRING
        },
        model: {
            type: DataTypes.ENUM,
            values: ['Lightweight', 'Middleweight', 'Cruiserweight', 'Heavyweight'],
        },
        weight_limit: {
            type: DataTypes.FLOAT
        },
        battery_capacity: {
            type: DataTypes.FLOAT
        },
        state: {
            type: DataTypes.ENUM,
            values: ['IDLE', 'LOADING', 'LOADED', 'DELIVERING', 'DELIVERED', 'RETURNING'],
    
        },
        isBatteryLevelLow: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    })

    return Drone
}