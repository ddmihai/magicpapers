const {getAllSilencedUsers, deleteSilencedUser} = require('../dataAccessLayer/usersLayers.js');
let cron = require('node-schedule');

module.exports = async () => {
    try 
    {
        const silencedList = await getAllSilencedUsers();

            silencedList.map(user => {
                let time = {
                    year:       user.end_date.getFullYear(),
                    month:      user.end_date.getUTCMonth() + 1,
                    day:        user.end_date.getUTCDate(),
                    hour:       user.end_date.getHours(),
                    minutes:    user.end_date.getMinutes(),
                    dayofWeek:  user.end_date.getUTCDay()
                };

                //let deadlineStr = `${time.minutes} ${time.hour} ${time.day} ${time.month} ${time.dayofWeek}`;
                let deadline = `${time.year}-${time.month}-${time.day} ${time.hour}:${time.minutes}:00 *`;
                cron.scheduleJob(deadline, function(){
                    deleteSilencedUser(user.userID);
                    console.log('Deleted.');
                  });
            })
    } 

    // Catch block
    catch (error) 
    {
        if (error) console.log(error);
    }
}