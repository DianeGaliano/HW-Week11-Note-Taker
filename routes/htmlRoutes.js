const path = require('path');
const { dirname } = require('path/posix');
const router = require('express').Router();

router.get('/notes', (req, res) => {
    res.sendFile(path.join(_dirname, "../pulic/notes.html"));
});

router.get("/", (req, res) => {
    res.sendFile(path.join(_dirname, "../public/index.html"));
});

router.get("*", (req, res) => {
    res.sendFile(path.join(_dirname, "../public/index.html"));
});

module.exports = router;