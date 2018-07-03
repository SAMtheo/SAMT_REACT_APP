const express = require('express');

const app = express();

const routes = require('./src/server/routes');

app.use('/public', express.static(__dirname + '/public'));
app.use('/data', routes);

app.get('/home', (req, res) => {
  res.send('home page');
});

app.get('*', (req, res) => res.sendFile(__dirname + '/index.html'));

app.listen(8080, console.log('app running on localhost:8080'));

module.exports = app;
