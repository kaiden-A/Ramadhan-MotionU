import axios from "axios";


export default async function handler(req , res){

    const backendUrl = process.env.BACKEND_URL;

    try{

        if(req.method === 'POST'){

            const backendRes = await axios.post(`${backendUrl}/api/auth/signup` , req.body);
            const token = backendRes.data.token;
            
            res.setHeader(
                "Set-Cookie",
                `jwt=${token}; HttpOnly; Path=/; Max-Age=86400; SameSite=Lax`
            );

            res.status(201).json({success : true , message : backendRes.data.message});
        }


    }catch(err){
        console.error(err.response?.data || err.message);

        const statusCode = err.response?.status || 500;
        const errorMessage = err.response?.data?.message || "Internal Server Error";

        return res.status(statusCode).json({ 
            success: false, 
            message: errorMessage 
        });
    }

}