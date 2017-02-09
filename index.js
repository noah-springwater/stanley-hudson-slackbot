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

let responses = ['I\'ll give you a billion Stanley nickels if you never talk to me again', 'I do not think that is funny', 'Boy, have you lost your mind, cause I\'ll help you find it!', 'I have varicose veins, too. I have swollen ankles. I\'m constantly hungry. Do you think my nipples don\'t get sore, too? Do you think I don\'t need to know the fastest way to the hospital?', 'The truth is, I have lost a little of my speed, a little of my fire', 'It\'s true. Around this office in the past I have been a little abrupt with people. But the doctor said, if I can\'t find a new way to relate more positively to my surroundings, I\'m going to die', 'I\'m not sitting in a wheelchair.', 'I\'ll slap you in the face with a rainbow.', 'It might be easier if you take a deep breath, lift from the knees, and shove it up your butt!', 'Well you take the first letter of each name, assign it a number, add \'em all up, and shove it up your butt!', 'I know how to save the company, everyone. Just write a petition, get everyone\'s signature, including our clients, march down to Florida, and shove it up your butt!', 'Oh, it\'s OK. I did learn it on the streets. On the ghetto in fact.', 'Hi! Hi! Hi! Hi! You sounded like my niece... and she\'s six months old!', 'Did I stutter?!'];

app.post('/', (req, res) => {
  // let text = req.body.text;

  let randomResponse = responses[Math.floor(Math.random()*responses.length)];
  let data = {
    response_type: 'in_channel',
    text: randomResponse,
  };

  res.json(data);
});
