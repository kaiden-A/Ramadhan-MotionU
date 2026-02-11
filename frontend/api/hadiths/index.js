import axios from "axios";


export default async function handler(req , res) {
    
    const backendUrl = process.env.BACKEND_URL || 'http://localhost:5000';


    try{

        if(req.method === "GET"){
            const backendRes = await axios.get(`${backendUrl}/api/hadiths`);
            res.status(200).json({success : true , hadiths : backendRes.data.hadiths})
        }

    }catch(err){
        console.error("API Error:", err.message);

        // 3. Robust Error Response
        const statusCode = err.response?.status || 500;
        const errorMessage = err.response?.data?.message || "Internal Server Error";

        return res.status(statusCode).json({ 
            success: false, 
            message: errorMessage 
        });
    }
}