import juzuRepositories from "../repositories/juzu.repositories.js";
import AppError from "../utils/AppError.js";


class JuzuServices{

    async getUserJuzu(userId){

        const juzuProgress = await juzuRepositories.userJuzuProgress(userId);

        const summary = await juzuRepositories.userProgressBar(userId);


        if(juzuProgress.length === 0 || summary.length === 0){
            throw new AppError('Fail Fetching The Data' , 404);
        }

        return {summary , juzuProgress};

    }

}

export default new JuzuServices;