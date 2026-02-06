import pool from "../config/database.js";


class UsersRepositories{

    async createBetaUsers(email){

        const result = pool.query(
            `INSERT INTO BETA_USERS(email , created_at) VALUES($1 , $2)` , 
            [email , new Date()]
        );

        return result.rowCount > 0;
    }

    async findAllBetaUsers(){

        const result = pool.query(
            `SELECT email , invite_email FROM BETA_USERS`
        );

        return result.rows;
    }



}

export default new UsersRepositories;