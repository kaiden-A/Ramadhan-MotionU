import axios from "axios";


export async function handler(req , res) {
    
    const backendUrl = process.env.BACKEND_URL;


    try{

        if(req.method === "GET"){
            const backendRes = await axios.get(`${backendUrl}/api/hadiths`);
            res.status(200).json({success : true , hadiths : backendRes.data.hadiths})
        }

    }catch(err){
        console.error(err.response?.data || err.message);
        res.status(err.response.status).json({success : false , message :  err.response.data.message})
    }
}