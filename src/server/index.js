const fs = require('fs');

const express = require('express');
const handlebars = require('handlebars');

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  fs.readFile(`${__dirname}/views/index.html`, 'utf8', (error, data) => {
    const template = handlebars.compile(data);
    const html = template({});
    res.send(html);
  });
});

app.listen(8080, () => {
  console.log('Listening on port 8080');
});
