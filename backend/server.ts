// src/app.ts

import express from 'express';
import fileRoutes from './routes/fileRoutes';
import sequelize from './config/database';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use('/api', fileRoutes);

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
