import axios from "axios";

export const createBetaUsers = async (email) => {

    const res = await axios.post(`api/users/beta` , 
        {email}
    )

    return res;

}