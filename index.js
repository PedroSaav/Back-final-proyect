const express = require('express');
require('dotenv').config();
const path = require('path');
const mysql = require('mysql2');
// const nodemailer = require('nodemailer');
const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:4200',
    credentials:true,
    optionSuccessStatus:200
}

const db_database = require('./config');
const db_host = require('./config');
const db_password = require('./config');        
const db_port = require('./config');    
const db_user = require('./config');

const app = express();
const PORT = process.env.PORT || 8080;

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

//Middelwares settings
app.use(express.json());
app.use(cors(corsOptions));
app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));

//DataBase connection for team 
 app.get('/about', (req, res) => {

    let sql = 'SELECT * FROM team';

    conexion.query(sql, (err, result) => {
        if (err) throw err;
        res.render('about', {
            titulo: 'team',
            results: result,
        });
    }); 
}); 

// app.get('/about', (req, res) => {
//     res.render('about', {
//         titulo: 'Our Team'
//     });
// });

app.listen(PORT, () => {
    console.log(`El servidor está trabajando en el Puerto ${PORT}`);
});

