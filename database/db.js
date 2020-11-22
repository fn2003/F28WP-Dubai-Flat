const createDb = function() {
    const mysql = require('mysql');
    const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root"
    });

    connection.connect(function(err) {
        if (err) throw err;
        //create database
        const sqlDB = "CREATE DATABASE IF NOT EXISTS `leaderboard`;";
        connection.query(sqlDB, function(err, result) {
            if (err) throw err;
            console.log('The database has been created');
        });
        //change database
        connection.changeUser({ database: 'leaderboard' }, function(err) {
            if (err) {
                console.log('error in changing database', err);
                return;
            }
        });

        //create table Players
        const sqlUser = "Create table if not exists `leaderboard`.`users`(" +
            "id int(10) " +
            "`pseudoname` varchar(32) NOT NULL default 'Unkown'," + +
            "`score` int(10) , "+
            "PRIMARY KEY (`id`)" +
            "); ";
        connection.query(sqlUser, function(err, result) {
            if (err) throw err;
            console.log("Users table created");
        });
         
    });
};

module.exports = createDb;