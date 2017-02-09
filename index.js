'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.load();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT;

const server = app.listen(PORT, () => {
  console.log('Express server listening on port %d in %s mode', server.address().port, app.settings.env);
});

app.get('/', (req, res) => {
  res.send("Stanley Hudson Slack Bot");
});

let responses = ['Today, my friend, you are a Winner', 'Quit Whining, Whiner', 'Pshhh...L7 weinie!'];

app.post('/', (req, res) => {
  let text = req.body.text;

  let randomResponse = responses[Math.floor(Math.random()*responses.length)];
  let data = {
    response_type: 'in_channel',
    text: randomResponse,
  };

  res.json(data);
});
