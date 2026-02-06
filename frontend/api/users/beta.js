import axios from 'axios';

export default async function handler(req , res){

    const backendUrl = process.env.BACKEND_URL;

    try{

        if(req.method === 'POST'){
            const backendRes = await axios.post(`${backendUrl}/api/users/create/beta` , req.body);
            res.status(201).json({success : true , message : backendRes.data.message});
        }

    }catch(err){
        console.error(err.response?.data || err.message);
    }

}