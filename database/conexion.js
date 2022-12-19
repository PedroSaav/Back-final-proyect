const db_database = require('../config');
const db_host = require('../config');
const db_password = require('../config');       
const db_port = require('../config');   
const db_user = require('../config');
const mysql = require('mysql2');

// Database Connection
 const conexion = mysql.createConnection({
    host: db_host,
    user: db_user,
    password: db_password,
    database: db_database,
    port: db_port
}); 

conexion.connect((err) => {
    if (err) {
        console.error(`Error en la conexión: ${err.stack}`)
        return;
    }
    console.log(`Conectado a la Base de Datos ${process.env.db_database}`);
});  