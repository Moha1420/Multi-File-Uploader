// server.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./config/database');
const fileRoutes = require('./routes/fileRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Sync Sequelize models with database
sequelize.sync({ force: true }) // Set force: true to drop and re-create tables on every server start (for development)
    .then(() => {
        console.log('Database synced successfully');
    })
    .catch(error => {
        console.error('Error syncing database:', error);
    });

// Routes
app.use('/api', fileRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
