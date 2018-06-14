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
    console.log('in POST owner');
    res.sendStatus(200);
    
});

router.put('/', (req, res)=>{
    console.log('in PUT owner');
    res.sendStatus(200);
    
});

router.delete('/', (req, res)=>{
    console.log('in DELETE owner');
    res.sendStatus(200);
    
});

module.exports = router;