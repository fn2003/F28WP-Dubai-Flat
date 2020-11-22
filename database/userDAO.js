//const { Player } = require('../models/entities');
var SQL = require('sql-template-strings');
const mysql = require('mysql');

var pool = mysql.createPool({
    connectionLimit: 100,
    host: "localhost",
    user: "root",
    password: "root",
    database: "leaderboard",
    debug: true
});

function executeQuery(query, callback) {
    pool.getConnection(function(err, connection) {
        if (err) {
            return callback(err, null);
        } else if (connection) {
            connection.query(query, function(err, rows, fields) {
                connection.release();
                if (err) {
                    return callback(err, null);
                }
                return callback(null, rows);
            });
        } else {
            return callback(true, "No Connection");
        }
    });
}


function getResult(query, callback) {
    executeQuery(query, function(err, rows) {
        if (!err) {
            callback(null, rows);
        } else {
            callback(true, err);
        }
    });
}

// Returns the player names and their scores 

function getInfo(callback) {
    const selectUsers = "SELECT pseudoname , score  from leaderboard.users; ";
    getResult(selectUsers, function(err, rows) {
        if (!err) {
            callback(null, rows);
        } else {
            console.log(err);
        }
    });
}

//this functions returns the new id by extracting the latest id + 1 

function findNewId(){
    const lastId = (SQL `SELECT id  FROM leaderboard.users ORDER BY id DESC LIMIT 1 `);
    getResult(lastId, function(err, rows) {
        if (!err) {
            callback(null, rows+1);
        } else {
            console.log(err);
        }
    });

}

//Updates player score

function insertScore(id, score, callback) {
    const insertVal = (SQL `UPDATE leaderboard.users
    SET score = ${score}
    WHERE id = ${id};`)
    getResult(insertVal, function(err, rows) {
        if (!err) {
            callback(null, rows);
        } else {
            console.log(err);
        }
    });
}

//Creates new user 

function createUser(pseudoname, id , callback) {

    const insertUser = (SQL `INSERT INTO leaderboard.users (pseudoname, id ) VALUES (${pseudoname}, ${id}) ;`);
    getResult(insertUser, function(err, result) {
        if (!err) {
            callback(null, result.affectedRows, result.insertId);
        } else {
            console.log(err);
        }
    });
}




module.exports = {
    getInfo,
    findNewId,
    insertScore,
    createUser
};