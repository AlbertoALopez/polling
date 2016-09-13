const path = require('path');
const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
let sequelize = null;

if (!global.hasOwnProperty('db')) {
    if (process.env.DATABASE_URL) {
        // the application is executed on Heroku ... use the postgres database
        sequelize = new Sequelize(process.env.DATABASE_URL, {
            dialect: 'postgres',
            protocol: 'postgres',
            logging: true,
            use_env_variable: 'DATABASE_URL',
            dialectOptions: {
                ssl: true,
            },
        });
    } else {
        // the application is executed on the local machine
        sequelize = new Sequelize(config.database, config.username,
                config.password, config);
    }

    global.db = {
        Sequelize,
        sequelize,
        User: sequelize.import(path.join(__dirname, '/user')),
        Poll: sequelize.import(path.join(__dirname, '/poll')),
            // add your other models here
    };
}

Object.keys(db).forEach(function(modelName) {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});


module.exports = db;
