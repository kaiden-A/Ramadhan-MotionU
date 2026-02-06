import usersServices from "../services/users.services.js"
import catchAsync from "../utils/catchAsync.js"

export const create_beta_users = catchAsync(async (req , res) => {

    const {email} = req.body;

    await usersServices.createBetaUsers(email);

    return res.status(204).json({success : true , message : 'successfully create users'});

})