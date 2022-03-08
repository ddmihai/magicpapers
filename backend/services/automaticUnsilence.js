const {getAllSilencedUsers, deleteSilencedUser} = require('../dataAccessLayer/usersLayers.js');
let cron = require('node-schedule');

module.exports = async () => {
    try 
    {
        const silencedList = await getAllSilencedUsers();

        if (silencedList) {
            silencedList.map(user => {
              
                let time = {
                    year:       user.end_date.getFullYear(),
                    month:      user.end_date.getUTCMonth() + 1,
                    day:        user.end_date.getUTCDate(),
                    hour:       user.end_date.getHours(),
                    minutes:    user.end_date.getMinutes()
                };

                let deadline = `${time.year}-${time.month}-${time.day} ${time.hour}:${time.minutes}:00`;
                cron.scheduleJob(deadline, async function(){
                    await deleteSilencedUser(user.userID);
                    console.log(`User was deleted.`);
                  });
            })
        }
        else return;
    } 

    // Catch block
    catch (error) 
    {
        if (error) console.log(error);
    }
}