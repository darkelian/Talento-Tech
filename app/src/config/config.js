const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:4000/api";
const DB_HOST = process.env.DB_HOST || "localhost";
const DB_PORT = process.env.DB_PORT || 4000;
const DB_DATABASE = process.env.DB_DATABASE || "tutoria";
const DB_USER = process.env.DB_USER || "postgres";
const DB_PASSWORD = process.env.DB_PASSWORD || "admin";

module.exports = {
    FRONTEND_URL,
    DB_HOST,
    DB_PORT,
    DB_DATABASE,
    DB_USER,
    DB_PASSWORD
};