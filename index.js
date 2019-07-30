const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const MyScheduler = require('./myscheduler')
const app = express()
app.use(cors())
app.use(morgan())
app.use(bodyParser.json({extended:false}))


app.post('/', (req,res) => {
    const {time,message} = req.body
    const myscheduler = new MyScheduler(time);
    myscheduler.putSchedule(message);
    res.json({status: "success"})
})

app.listen('8080', () => {
    console.log('server is running on port 8080')
})