import axios from 'axios';


export default async function handler(req , res){

    const backendUrl = process.env.BACKEND_URL;

    const authHeader = req.headers.authorization;

    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
        return res.status(401).json({ success: false, message: "Unauthorized" });
    }


    try{

        if(req.method === "GET"){
            const backendRes = await axios.get(`${backendUrl}/api/cron/daily-reminder`);

            res.status(200).json({success : true , message : backendRes.data.message})
        }

    }catch(err){
        console.error(err.response?.data || err.message);
    }

}