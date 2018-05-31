const express = require('express');

const app = express();

app.use('/public', express.static(__dirname + '/public'));

app.get('*', (req, res) => res.sendFile(__dirname + '/index.html'));

app.listen(8080, console.log('app running on localhost:8080'));
