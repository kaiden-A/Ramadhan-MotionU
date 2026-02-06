import usersRepositories from "../repositories/users.repositories.js";
import AppError from "../utils/AppError.js";

class UserService{

    async createBetaUsers(email){

        const insertUsers = usersRepositories.createBetaUsers(email);

        if(!insertUsers){
            throw new AppError('Fail Creating Users' , 400)
        }

        return;

    }
    
}

export default new UserService;