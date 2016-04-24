const fs = require('fs');

const express = require('express');
const handlebars = require('handlebars');

const app = express();
const CREDENTIALS = JSON.parse(fs.readFileSync(`${__dirname}/credentials.json`, 'utf8'));

app.use(express.static('public'));


app.get('/', (req, res) => {
  fs.readFile(`${__dirname}/views/index.html`, 'utf8', (error, data) => {
    const template = handlebars.compile(data);
    const html = template({ CREDENTIALS });
    res.send(html);
  });
});

app.listen(8080, () => {
  console.log('Listening on port 8080');
});
