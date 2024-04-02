const { Sequelize } = require('sequelize')

// database
const sequelize = new Sequelize(
  'postgres://user:anVmbMT6btXKCijgxRmZStzprhi7xHYi@dpg-co602aev3ddc73981a7g-a/exo_2_36453',
  {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
);

// authentication and synchronization
sequelize.authenticate()
  .then(() => {
    sequelize.sync().catch(() => console.log("Cannot sync the database"));
  })
  .catch(() => console.log("Cannot connect to database, please check environment credentials"));

module.exports = sequelize;