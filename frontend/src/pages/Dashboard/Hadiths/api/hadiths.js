import api from "../../../../../lib/axios";


export const getHadiths = async () => {

    const res = await api.get('/hadiths');
    return res.data;

}