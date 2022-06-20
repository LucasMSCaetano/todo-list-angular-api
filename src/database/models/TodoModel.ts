import { DataTypes } from 'sequelize';
import { db } from '../db';

export const TodoModel = db.define('todo_data', {
  id: {
    type: DataTypes.NUMBER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  isCompleted: {
    type: DataTypes.BOOLEAN
  }
});
