import juzuServices from "../services/juzu.services.js";
import catchAsync from "../utils/catchAsync.js";


export const get_progress = catchAsync( async(req , res) => {

    const user = req.user;

    const data = await juzuServices.getUserJuzu(user.userId);
    res.status(200).json({success : true , summary : data.summary , progress : data.juzuProgress})

})

export const update_juzu = catchAsync( async (req , res) => {

    const user = req.user;
    const {juzuId} = req.body;

    await juzuServices.updateJuzu({
        userId : user.userId,
        juzuId
    })

    res.status(204).json({success : true , message : 'successfully update juzu'})

})