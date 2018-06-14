const express = require('express');
const router = express.Router();
const pool = require('../../modules/pool');

router.get('/', (req, res)=>{
    console.log('in GET owner');
    res.sendStatus(200);
    
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