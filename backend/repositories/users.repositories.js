import pool from "../config/database.js";


class UsersRepositories{

    async createBetaUsers(email){

        const result = pool.query(
            `INSERT INTO BETA_USERS(email , created_at) VALUES($1 , $2)` , 
            [email , new Date()]
        );

        return result.rowCount > 0;
    }

    async createNewUser({name , email , hashPassword}){

        const result = await pool.query(
            `
            INSERT INTO USERS (name , email , password_hash , created_at)
            VALUES($1 , $2 , $3 , $4)
            `,
            [name , email , hashPassword , new Date()]
        )

        return result.rowCount > 0;

    }

    async findByEmail({email}){

        const result = await pool.query(
            `
            SELECT
                user_id AS "userId",
                name,
                email,
                password_hash AS "hashPassword"
            FROM USERS
            WHERE email = $1 
            `,
            [email]
        );

        return  result.rows[0];

    }

    async getAll(){

        const result = await pool.query(
            `
            SELECT
                user_id AS "userId",
                name,
                email
            FROM USERS
            `
        );

        return result.rows;

    }

    async findById({id}){

        const result = await pool.query(
            `
            SELECT
                user_id AS "userId",
                name,
                email,
                password_hash AS "hashPassword"
            FROM USERS
            WHERE user_id = $1 
            `,
            [id]
        );

        return  result.rows[0];

    }

    async findAllBetaUsers(){

        const result = await pool.query(
            `SELECT 
                email , 
                invite_email 
            FROM BETA_USERS`
        );

        return result.rows;
    }



}

export default new UsersRepositories;