const express = require('express');
const router = express.Router();
const pool = require('../../modules/pool');

router.get('/', (req, res)=>{
    console.log('in GET pet');
    res.sendStatus(200);
    
});

router.post('/', (req, res)=>{
    console.log('in POST pet');
    res.sendStatus(200);
    
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