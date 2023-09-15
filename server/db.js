import mysql from "mysql"

export const db = mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "Emerald132!",
    database: "jaimesBlog_db"
})