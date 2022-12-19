const express = require('express');
require('dotenv').config();
const path = require('path');
const app = express()
const PORT = 3001 || 8080
// const nodemailer = require('nodemailer');
const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:4200',
    credentials:true,
    optionSuccessStatus:200
}

//Realizamos la conexión 
// const {getConnection} = require('./database/conexion');
// getConnection().then((mensaje) =>{
// console.log(mensaje);
// }).catch(console.log);

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

