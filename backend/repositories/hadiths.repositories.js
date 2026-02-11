import pool from "../config/database.js";

class HadithRepositories{


    async getAllHadith(todaysDate){

        const result = await pool.query(
            `
            SELECT
                hadith_id AS "hadithId",
                date_post AS "datePost",
                source,
                narrator,
                text_arabic AS arab,
                text_english AS english,
                explanations,
                lesson
            FROM hadiths
            WHERE date_post < $1 ;
            `,
            [todaysDate]
        )
        return result.rows;
    }

    async getOneHadith(day){

        const result = await pool.query(
            `
            SELECT
                hadith_id AS hadithId,
                source,
                narrator,
                text_arabic AS arab,
                text_english AS english,
                explanations,
                lesson
            FROM hadiths
            WHERE date_post = $1;
            `,
            [day]
        )

        return result.rows[0];
    }

}


export default new HadithRepositories;