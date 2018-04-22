import { connect } from "net";

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(pross.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "Lvs2grnd",
        database: "project_one"
    });
};