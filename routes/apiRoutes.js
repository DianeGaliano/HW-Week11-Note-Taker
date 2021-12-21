const fs = require('fs');
const noteData = require('../db/db.json');
const router = require('express').Router();
const path = require('path');



router.get('/api/notes', (req, res) => {
  json.parse(fs.readFileSync(notesData));
  res.json(noteData);
});

router.post('/api/notes', (req, res) => {
 json.parse(fs.readFileSync(notesData));
 const newNotes = req.body;
 const id = notesData.push(newNotes);
 updateDb(notesData);
 console.log('New notes were added.');
 res.json(notesData);

});

function updateDb(notes) {
  fs.writeFile("./db/db.json", JSON.stringify(notes), (err) => {
    if (err) throw err;
    return true;
  });
}
router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

module.exports = router; 