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

    async findById(id){

        const user = await usersRepositories.findById({id});

        if(!user){
            throw new AppError('User Doesnt Exist' , 404);
        }

        return user;

    }
    
}

export default new UserService;