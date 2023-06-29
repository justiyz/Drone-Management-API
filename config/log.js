const fs = require('fs');

const logEvent = (event) => {
  const timestamp = new Date().toISOString();
  const logEntry = `${timestamp}: ${event}\n`;
  fs.appendFile('battery_log.txt', logEntry, (err) => {
    if (err) {
      console.error('Error writing to log file:', err);
    }
  });
};

module.exports = { logEvent };
