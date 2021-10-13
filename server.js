const express = require("express");
const path = require('path');
const { clog } = require('./middleware/clog');
const api = require("./public/assets/js/index");

const PORT = process.env.port || 3001;

const app = express();

app.use(clog);

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);


app.use(express.static('public'));

//GET /notes returns notes.html
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

//GET * returns index.html
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/index.html'))
);

//GET /api/notes should read db.json 
app.get('/api/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/db/db.json'))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);