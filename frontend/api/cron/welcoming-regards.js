import axios from "axios";

export default async function handler(){

    const backendUrl = process.env.BACKEND_URL;

    const authHeader = req.headers.authorization;

    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
        return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    try{

        if(req.method === "GET"){
            const backendRes = await axios.get(`${backendUrl}/api/cron/welcoming-regards`);
            res.status(200).json({success : true , message : "Successfully Send Email"});
        }    

    }catch(err){
        console.error(err.response?.data || err.message);
    }

}