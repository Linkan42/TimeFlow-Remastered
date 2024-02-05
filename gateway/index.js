const express = require('express');
const app = express();
const PORT = 2999;
const amqp = require('amqplib/callback_api');

app.get('/gateWayAPI', (req, res) => {
    amqp.connect('amqp://localhost', function (err, connection) {

});

app.listen(PORT, () => {
    console.log(`Gatway open`);
  });