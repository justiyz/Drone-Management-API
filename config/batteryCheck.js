const cron = require('node-cron');
const { logEvent } = require('../config/log');

//models
const db = require('../models');
const Drone = db.drones


// Function to check drone battery levels and create logs
const checkBatteryLevels = async () => {
  try {
    const drones = await Drone.findAll();
      for (const drone of drones) {
        
      const batteryLevel = drone.battery_capacity;
      
      // Create battery log event
      const event = `Drone ${drone.id} - Battery Level: ${batteryLevel}%`;
      logEvent(event);
    }
    console.log('Battery levels checked and logged successfully.');
  } catch (error) {
    console.error('Error checking battery levels:', error);
  }
};


//Schedule the task to run every minute
cron.schedule('*/1 * * * *', checkBatteryLevels);

module.exports = { checkBatteryLevels };
