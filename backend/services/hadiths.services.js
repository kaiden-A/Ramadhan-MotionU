import hadithsRepositories from "../repositories/hadiths.repositories.js";
import AppError from "../utils/AppError.js";


class HadithServices{

    async getAll(){

        const todaysDate = this.#getMalaysianDateISO();

        const hadith = await hadithsRepositories.getAllHadith(todaysDate);
        const todayHadith = await hadithsRepositories.getOneHadith(todaysDate);

        if(hadith.length === 0){
            throw new AppError('Couldnt Get Hadis' , 404);
        }

        return {all : hadith , today : todayHadith};

    }

    async getOne(id){

        const hadith = await hadithsRepositories.getOneHadith(id);

        if(!hadith){
            throw new AppError('Hadith Not Found' , 404);
        }

        return hadith;

    }

    #getMalaysianDateISO() {
        const date = new Date();
        // Use toLocaleDateString with a specific format that mimics the ISO date parts
        const year = date.toLocaleString('en-US', { year: 'numeric', timeZone: 'Asia/Kuala_Lumpur' });
        const month = date.toLocaleString('en-US', { month: '2-digit', timeZone: 'Asia/Kuala_Lumpur' });
        const day = date.toLocaleString('en-US', { day: '2-digit', timeZone: 'Asia/Kuala_Lumpur' });
        
        return `${year}-${month}-${day}`;
    }

}

export default new HadithServices;
