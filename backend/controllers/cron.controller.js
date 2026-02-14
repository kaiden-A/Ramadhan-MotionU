import cronServices from "../services/cron.services.js";
import catchAsync from "../utils/catchAsync.js";


export const daily_reminder = catchAsync( async(req , res) => {

    await cronServices.dailyReminder();
    res.status(200).json({success : true , message : 'successfully send email'});

})

export const welcome_event = catchAsync( async(req , res) => {

    await cronServices.welcomingEvent();
    res.status(200).json({success : true , message : 'successfully send email'})

})
