// src/controllers/fileController.js

const File = require('../models/fileModel');

// GET all files
exports.getFiles = async (req, res) => {
    try {
        const files = await File.findAll();
        res.json(files);
    } catch (error) {
        console.error('Error fetching files:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// POST upload file
exports.uploadFile = async (req, res) => {
    const { description } = req.body;
    const filename = req.file.filename; // Assuming multer middleware is used for file upload
    try {
        await File.create({ description, filename });
        res.status(201).json({ message: 'File uploaded successfully' });
    } catch (error) {
        console.error('Error uploading file:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// DELETE file by id
exports.deleteFile = async (req, res) => {
    const id = req.params.id;
    try {
        await File.destroy({ where: { id } });
        res.json({ message: 'File deleted successfully' });
    } catch (error) {
        console.error('Error deleting file:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// PUT update file by id
exports.updateFile = async (req, res) => {
    const id = req.params.id;
    const { description } = req.body;
    try {
        await File.update({ description }, { where: { id } });
        res.json({ message: 'File updated successfully' });
    } catch (error) {
        console.error('Error updating file:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
