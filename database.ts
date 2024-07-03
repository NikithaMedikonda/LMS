import {Sequelize} from 'sequelize';

const sequelize = new Sequelize('masterdb', 'nikitha', 'nikitha', {
    host: 'localhost',
    dialect: 'postgres',
    logging: false
});

export default sequelize;
