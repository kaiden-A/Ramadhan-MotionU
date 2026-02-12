import './dotenv.js';

export const auth = {
    jwtSecret: process.env.JWT_SECRET,
    jwtExpiresIn: "1d",
}