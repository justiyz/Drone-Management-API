const express = require('express');
const cors = require('cors');
require('dotenv').config();


const app = express();

var corOptions = {
    origin: 'https://localhost:8081'
}

//middleware
app.use(cors(corOptions))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//routers
const router = require('./routes/dronesRouter.js')
app.use('/api/drones', router)
const router2 = require('./routes/medicationsRouter.js')
app.use('/api/medications', router2)



// testing api
app.get('/', (req, res) => {
    res.json({message: 'hello from drone-management api'})
})



//error handling middleware
const errorMiddleware = require('./middleware/errorMiddleware.js')
app.use(errorMiddleware)



//port
const PORT = process.env.PORT || 8080

//server
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})

//cron job
// Import the checkBatteryLevels function from the batteryCheck.js file
const { checkBatteryLevels } = require('./config/batteryCheck.js');
checkBatteryLevels(); // Start the periodic battery check when the application starts





