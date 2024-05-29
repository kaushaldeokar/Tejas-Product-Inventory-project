// DataTypes: This is a collection of data types provided by Sequelize to define the type of each attribute in the model.
import { DataTypes } from 'sequelize';
import {testConnection,db} from '../Database/db.js'

//All the tables are stored here //

const TJ_Product_Structure = db.define('TJ_Product_Structure', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
  },
  content: {
    type: DataTypes.STRING,
  },
  
}, {
  tableName: 'products',
  timestamps: false,
});

// Synchronize the model with the database (creates the table if it doesn't exist)
TJ_Product_Structure.sync()
  .then(() => {
    console.log('Products table has been created.');
  })
  .catch((error) => {
    console.error('Error creating User table:', error);
  });



  export {TJ_Product_Structure};
