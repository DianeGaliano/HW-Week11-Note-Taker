const router = require('express').Router();
const path = require('path/posix');
const { routes } = require('.');
const notesData = require('../db/db.json');

router.get('/notes', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

routes.get('/notes', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"))
})