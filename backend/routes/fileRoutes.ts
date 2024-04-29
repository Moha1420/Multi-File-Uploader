// src/routes/fileRoutes.js

const express = require('express');
const router = express.Router();

// Example array to store uploaded files
let files = [];

// GET all files
router.get('/files', (req, res) => {
    res.json(files);
});

// POST upload file
router.post('/files', (req, res) => {
    const { description } = req.body;
    const id = files.length + 1;
    files.push({ id, description });
    res.status(201).json({ message: 'File uploaded successfully' });
});

// DELETE file by id
router.delete('/files/:id', (req, res) => {
    const id = parseInt(req.params.id);
    files = files.filter(file => file.id !== id);
    res.json({ message: 'File deleted successfully' });
});

// PUT update file by id
router.put('/files/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { description } = req.body;
    const index = files.findIndex(file => file.id === id);
    if (index !== -1) {
        files[index].description = description;
        res.json({ message: 'File updated successfully' });
    } else {
        res.status(404).json({ error: 'File not found' });
    }
});

module.exports = router;
