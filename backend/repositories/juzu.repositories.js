import pool from "../config/database.js";

class JuzuRepositories{


    async userJuzuProgress(userId){

        const result = await pool.query(
            `
            SELECT 
                j.juz_id,
                j.name AS "juzName",
                ujp.completed,
                ujp.completed_at AS "completedAt"
            FROM juz j
            LEFT JOIN user_juz_progress ujp
                ON j.juz_id = ujp.juz_id
                AND ujp.user_id = $1 
            `,
            [userId]
        )

        return result.rows;
    }


    async userProgressBar(userId){

            
        const result = await pool.query(
            `
            SELECT 
                u.user_id AS "userId",
                u.name,
                COUNT(*) FILTER (WHERE ujp.completed = TRUE) AS "completedJuz",
                COUNT(j.juz_id) AS total_juz,
                ROUND(
                    COUNT(*) FILTER (WHERE ujp.completed = TRUE) * 100.0 
                    / COUNT(j.juz_id),
                    2
                ) AS "progressPercentage"
            FROM users u
            CROSS JOIN juz j
            LEFT JOIN user_juz_progress ujp
                ON ujp.user_id = u.user_id
                AND ujp.juz_id = j.juz_id
            WHERE u.user_id = $1
            GROUP BY u.user_id, u.name;
            `,
            [userId]
        );

        return result.rows;
    }

}

export default new JuzuRepositories;