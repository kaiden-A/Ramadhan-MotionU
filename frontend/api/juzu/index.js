import axios from 'axios';
import cookie from 'cookie';

export default async function handler(req , res){

    const backendUrl = process.env.BACKEND_URL ;

    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');

    const cookies = cookie.parse(req.headers.cookie || "");
    const token = cookies.jwt;
    if (!token) {
        return res.status(401).json({ success : false ,  message: "Not logged in" });
    }

    try{

        if(req.method === "GET"){

            const backendRes = await axios.get(`${backendUrl}/api/juzu/progress` , {
                headers : {
                    Authorization : `Bearer ${token}`
                }
            })

            res.status(201).json({
                success : true , 
                progress : backendRes.data.progress,
                summary :  backendRes.data.summary
            })
        }

        if(req.method === "PUT"){

            const backendRes = await axios.put(`${backendUrl}/api/juzu/me`, req.body , {
                headers : {
                    Authorization : `Bearer ${token}`
                }
            })

            res.status(204).json({success : true})

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
