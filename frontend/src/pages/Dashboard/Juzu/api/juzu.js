import api from '../../../../../lib/axios.js';


export const getProgress = async () => {

    const res = await api.get(`/juzu`);
    return res.data;
}

export const updateJuzu = async(juzuId) => {

    const res = await api.put(`/juzu` , {
        juzuId
    });

    return res.data;

}