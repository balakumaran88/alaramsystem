const schedule = require('node-schedule');
const moment = require('moment');

class MyScheduler {
    constructor(date) {
        this.date = moment(new Date(date)).format('YYYY-MM-DD h:mm:ss a');     
    }

    putSchedule(message) {
        console.log(this.date)
        schedule.scheduleJob(this.date, function(){
            console.log(message);
          });
    }
}


module.exports = MyScheduler