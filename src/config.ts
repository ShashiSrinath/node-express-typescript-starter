import dotenv from 'dotenv';

dotenv.config();

export const PORT = process.env.PORT || 3000;
export const DB_URI =
    process.env.NODE_ENV !== 'test'
        ? process.env.DB_URI
        : process.env.DB_URI_TEST;
export const DB_NAME = process.env.DB_NAME;

export default {
    PORT,
    DB_URI,
    DB_NAME,
};
