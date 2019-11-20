  
import Sequelize from 'sequelize';

var sequelize = new Sequelize('evento_tech_day', 'root', 'OR0308.mona', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
  
    
  });


  export default sequelize;