// consts & requires
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');

// uses
app.use(express.static('server/public'));
app.use(bodyParser.json());

app.listen(PORT, ()=>{
    console.log('listening on port:', PORT);
})