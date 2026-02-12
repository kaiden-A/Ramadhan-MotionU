import usersRepositories from "../repositories/users.repositories.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import AppError from "../utils/AppError.js";
import { auth } from "../config/auth.js";

class AuthServices{


    async login({email , password}){

        const user = await usersRepositories.findByEmail({email});

        if(!user){
            console.log('user doesnt exist');
            throw new AppError('Invalid Credentials' , 401);
        }

        const correct = await this.#comparePassword(password , user.hashPassword);

        if(!correct){
            console.log('wrong password')
            throw new AppError('Invalid Credentials' , 401);
        }

        const token = this.#createToken(user.userId);

        return token

    }

    async signup({name , email , password}){

        const hashPassword = await this.#hashedPassword(password);


        const user = await usersRepositories.createNewUser({
            name : name,
            email : email,
            hashPassword : hashPassword
        });

        if(!user){
            throw new AppError('Fail Creating User' , 400);
        }

        const currUser = await usersRepositories.findByEmail({email});
        const token = this.#createToken(currUser.userId);

        return token;

    }

    async #hashedPassword(pasword){
    
        const salt = await bcrypt.genSalt(10);
        const hashPass = await bcrypt.hash(pasword , salt);
    
        return hashPass;
    }

    async #comparePassword(password , hashPass){
    
        return await bcrypt.compare(password , hashPass)
        
    }

    #createToken(id){
        return jwt.sign({id : id} , auth.jwtSecret , {expiresIn : auth.jwtExpiresIn})
    }

}

export default new AuthServices;