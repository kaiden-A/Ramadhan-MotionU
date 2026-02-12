import api from '../../../../../lib/axios.js';


export const getProgress = async () => {

    const res = await api.get(`/juzu`);
    return res.data;
}

export const updateJuzu = async(userId , juzuId) => {

    const res = await api.put(`/juzu/${userId}` , {
        juzuId
    });

    return res.data;

}