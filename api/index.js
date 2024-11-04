const express = require('express');
const app = express();

const path = require('path');

app.use(express.static('public'));

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, '..', 'public', 'index.html')); 
});

app.get('/assignment/dbms/04-11-2024', (req, res) => {
  res.download(path.join(__dirname, '..', 'public', '22BAI10202_assignment.pdf'), (err) => {
    if (err) {
      res.status(err.status).end();
    }
  });
});

app.listen(3000, () => console.log('Server ready on port 3000.'));

module.exports = app;