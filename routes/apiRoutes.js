const fs = require('fs');
const { routes } = require('.');
const noteData = require('../db/db.json');

routes.get('/api/notes', (req, res) => {
  json.parse(fs.readFileSync(notesData));
  res.json(noteData);
});

routes.post('/api/notes', (req, res) => {
    
})