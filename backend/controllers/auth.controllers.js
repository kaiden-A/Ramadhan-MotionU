import authServices from "../services/auth.services.js";
import catchAsync from "../utils/catchAsync.js";


export const post_login = catchAsync( async(req , res) => {

    const {email , password} = req.body;


    const token = await authServices.login({
        email, password
    });

    res.status(200).json({success : true , message : 'successfully login', token : token});

})

export const post_signup = catchAsync( async(req , res) => {

    const {name , email , password } = req.body;

    const token = await authServices.signup({
        name , email , password
    });

    res.status(201).json({success : true , message : 'successfully sign up' , token : token})

})