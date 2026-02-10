import hadithsRepositories from "../repositories/hadiths.repositories.js";
import AppError from "../utils/AppError.js";


class HadithServices{

    async getAll(){

        const hadith = await hadithsRepositories.getAllHadith();

        if(hadith.length === 0){
            throw new AppError('Couldnt Get Hadis' , 404);
        }

        return hadith;

    }

    async getOne(id){

        const hadith = await hadithsRepositories.getOneHadith(id);

        if(!hadith){
            throw new AppError('Hadith Not Found' , 404);
        }

        return hadith;

    }

}

export default new HadithServices;
