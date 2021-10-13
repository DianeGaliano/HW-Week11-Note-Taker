const express = require("express");
const api = require("./public/assets/js/index");

const PORT = process.env.port || 3001;

const app = express();

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
