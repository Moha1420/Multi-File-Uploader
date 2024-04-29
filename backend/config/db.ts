import fs from 'fs';
import path from 'path';
import { Sequelize, Model, DataTypes } from 'sequelize';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const basename = path.basename(__filename);
const env: string = process.env.NODE_ENV || 'development';
const db: any = {};

let sequelize: Sequelize;

if (process.env.USE_ENV_VARIABLE) {
  sequelize = new Sequelize(process.env[process.env.USE_ENV_VARIABLE], {
    dialect: process.env.DB_DIALECT,
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '3306'),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  });
} else {
  sequelize = new Sequelize({
    dialect: process.env.DB_DIALECT,
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '3306'),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  });
}

fs.readdirSync(__dirname)
  .filter((file: string) => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach((file: string) => {
    const model = require(path.join(__dirname, file))(sequelize, DataTypes);
    db[(model as typeof Model).name] = model;
  });

Object.keys(db).forEach((modelName: string) => {
  if ((db[modelName] as any).associate) {
    (db[modelName] as any).associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
