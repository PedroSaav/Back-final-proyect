const db_database = require('../config')
const db_host = require('../config')
const db_password = require('../config')
const db_user = require('../config')
const db_port = require('../config')

module.exports = {
    "development": {
        "username": db_user,
        "password": db_password,
        "database": db_database,
        "host": db_host,
        "dialect": "mysql",
        "port": db_port
    },
    "test": {
        "username": "root",
        "password": null,
        "database": "database_test",
        "host": "127.0.0.1",
        "dialect": "mysql"
    },
    "production": {
        "username": db_user,
        "password": db_password,
        "database": db_database,
        "host": db_host,
        "dialect": "mysql"
    }
}