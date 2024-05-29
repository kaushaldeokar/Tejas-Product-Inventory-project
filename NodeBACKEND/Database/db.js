
import Sequelize from 'sequelize'

const db = new Sequelize('tejas_app', 'root', 'Kd123@123', {
  host: 'localhost', 
  dialect: 'mysql',  
});

const testConnection = async () => {
  try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};


export {testConnection,db};
