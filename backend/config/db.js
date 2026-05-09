const { Sequelize } =
  require("sequelize");

const sequelize =
  new Sequelize(

    process.env.DB_NAME,

    process.env.DB_USER,

    process.env.DB_PASSWORD,

    {
      host: process.env.DB_HOST,

      dialect: "mysql",

      port: process.env.DB_PORT
    }

  );

const connectDB = async () => {

  try {

    await sequelize.authenticate();

    console.log(
      "MySQL RDS Connected"
    );

    await sequelize.sync();

  } catch(error) {

    console.log(error);

    process.exit(1);
  }
};

module.exports = {
  sequelize,
  connectDB
};
