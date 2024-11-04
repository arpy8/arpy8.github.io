import path from 'path';
import express from 'express';

const app = express();
const port = 3000;
const __dirname = path.resolve();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'), (err) => {
    if (err) {
      res.status(err.status).end();
    }
  });   
});

// Route to download temp.png
app.get('/assignment/dbms/04-11-2024', (req, res) => {
  res.download(path.join(__dirname, 'public', 'temp.pdf'), (err) => {
    if (err) {
      res.status(err.status).end();
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});