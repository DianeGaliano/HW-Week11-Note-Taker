const express = require('express');
const path = require ('path');
const fs = require('fs');

const PORT = process.env.port || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

require("./routes/apiRoutes");
require('./routes/htmlRoutes');


app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
