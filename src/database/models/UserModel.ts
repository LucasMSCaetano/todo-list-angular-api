import { DataTypes } from 'sequelize';
import { db } from '../db';

export const UserModel = db.define('user', {
  id: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
});
