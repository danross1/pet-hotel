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
                    res.sendStatus(201);
                }
            });
        }
    });
});

router.put('/:id', (req, res)=>{
    let queryText;
    pool.connect(function (errorConnectingToDatabase, client, done) {
        if (errorConnectingToDatabase) {
            console.log('error', errorConnectingToDatabase);
            res.sendStatus(500);
        } else {
            let petID = req.params.id;
            let petName = req.body.name || null;
            let petBreed = req.body.breed || null;
            let petColor = req.body.color || null;
            let petInjection = [];
            if(petName){
                if(petBreed){
                    if(petColor){
                        // all
                        queryText = `UPDATE pets SET name=$1, breed=$2, color=$3 WHERE id=$4`;
                        petInjection = [petName, petBreed, petColor, petID];
                    } else {
                        // name and breed
                        queryText = `UPDATE pets SET name=$1, breed=$2 WHERE id=$3`;
                        petInjection = [petName, petBreed, petID];
                    }
                } else if(petColor){
                    // name and color
                    queryText = `UPDATE pets SET name=$1, color=$2 WHERE id=$3`;
                    petInjection = [petName, petColor, petID];
                } else {
                    // name
                    queryText = `UPDATE pets SET name=$1 WHERE id=$2`;
                    petInjection = [petName, petID];
                }
            } else if(petBreed){
                if(petColor){
                    // breed and color
                    queryText = `UPDATE pets SET breed=$1, color=$2 WHERE id=$3`;
                    petInjection = [petBreed, petColor, petID];
                } else {
                    // breed
                    queryText = `UPDATE pets SET breed=$1 WHERE id=$2`;
                    petInjection = [petBreed, petID];
                }
            } else {
                // color
                queryText = `UPDATE pets color=$1 WHERE id=$2`;
                    petInjection = [petColor, petID];
                
            }
            client.query(queryText, petInjection, function (errorMakingDatabaseQuery, result) {
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

router.delete('/', (req, res)=>{
    console.log('in DELETE pet');
    res.sendStatus(200);
    
});

module.exports = router;