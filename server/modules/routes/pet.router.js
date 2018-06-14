const express = require('express');
const router = express.Router();
const pool = require('../../modules/pool');

router.get('/', (req, res)=>{
    pool.connect(function (errorConnectingToDatabase, client, done) {
        if (errorConnectingToDatabase) {
            console.log('error', errorConnectingToDatabase);
            res.sendStatus(500);
        } else {
            client.query('SELECT * FROM pets;', function (errorMakingDatabaseQuery, result) {
                done();
                if (errorMakingDatabaseQuery) {
                    console.log('error', errorMakingDatabaseQuery);
                    res.sendStatus(500);
                } else {
                    res.send(result.rows);
                }
            });
        }
    });
});

router.post('/', (req, res)=>{
    pool.connect(function (errorConnectingToDatabase, client, done) {
        if (errorConnectingToDatabase) {
            console.log('error', errorConnectingToDatabase);
            res.sendStatus(500);
        } else {
            let petName = req.body.name;
            let petBreed = req.body.breed;
            let petColor = req.body.color;
            const queryText = `INSERT INTO pets (name, breed, color)
                VALUES($1, $2, $3)`;
            client.query(queryText, [petName, petBreed, petColor], function (errorMakingDatabaseQuery, result) {
                done();
                if (errorMakingDatabaseQuery) {
                    console.log('error', errorMakingDatabaseQuery);
                    res.sendStatus(500);
                } else {
                    res.sendStatus(200);
                }
            });
        }
    });
});

router.put('/', (req, res)=>{
    console.log('in PUT pet');
    res.sendStatus(200);
    
});

router.delete('/', (req, res)=>{
    console.log('in DELETE pet');
    res.sendStatus(200);
    
});

module.exports = router;