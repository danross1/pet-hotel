const express = require('express');
const router = express.Router();
const pool = require('../../modules/pool');

router.get('/', (req, res)=>{
    pool.connect(function (errorConnectingToDatabase, client, done) {
        if (errorConnectingToDatabase) {
            console.log('error', errorConnectingToDatabase);
            res.sendStatus(500);
        } else {
            client.query('SELECT * FROM owners;', function (errorMakingDatabaseQuery, result) {
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
            let ownerName = req.body.name;
            const queryText = `INSERT INTO owners (name)
                VALUES($1)`;
            client.query(queryText, [ownerName], function (errorMakingDatabaseQuery, result) {
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

router.put('/:id', (req, res)=>{
    let queryText;
    pool.connect(function (errorConnectingToDatabase, client, done) {
        if (errorConnectingToDatabase) {
            console.log('error', errorConnectingToDatabase);
            res.sendStatus(500);
        } else {
            let powerID = req.params.id;
            let powerName = req.body.name || null;
            let powerDescription = req.body.description || null;
            let powerInjection = [];
            if(powerName && powerDescription) {
                queryText = `UPDATE power SET name=$1, description=$2 WHERE id=$3`;
                powerInjection = [powerName, powerDescription, powerID];
            } else if(!powerName){
                queryText = `UPDATE power SET description=$1 WHERE id=$2`;
                powerInjection = [powerDescription, powerID];
            } else if(!powerDescription) {
                queryText = `UPDATE power SET name=$1 WHERE id=$2`;
                powerInjection = [powerName, powerID];
            }
            console.log('queryText:', queryText);
            console.log('powerInjection:', powerInjection);
            
            
            client.query(queryText, powerInjection, function (errorMakingDatabaseQuery, result) {
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

router.delete('/', (req, res)=>{
    console.log('in DELETE owner');
    res.sendStatus(200);
    
});

module.exports = router;