import pool from "../config/database.js";

class HadithRepositories{


    async getAllHadith(){

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
            ORDER BY created_at DESC;
            `
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
            WHERE hadith_id = $1;
            `,
            [day]
        )

        return result.rows[0];
    }

}


export default new HadithRepositories;