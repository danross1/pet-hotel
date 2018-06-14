// consts & requires
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const petRouter = require('./modules/routes/pet.router'); 
const ownerRouter = require('./modules/routes/owner.router');

// uses
app.use(express.static('server/public'));
app.use(bodyParser.json());
app.use('/pet', petRouter);
app.use('/owner', ownerRouter);

app.listen(PORT, ()=>{
    console.log('listening on port:', PORT);
})