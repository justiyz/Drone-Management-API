const express = require('express');
const cors = require('cors');


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

//port
const PORT = process.env.PORT || 8080

//server
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})