module.exports = {
  // Environment-dependent settings
  development: {
    username: 'root',
    password: null,
    database: 'techshop',
    host: '127.0.0.1',
    dialect: 'mysql',
    operatorsAliases: 'Op',
    define: {
      timestamps: false
    }
  },
  test: {
    username: 'root',
    password: '196179',
    database: 'dev_techshop',
    host: '127.0.0.1',
    dialect: 'postgres',
    operatorsAliases: 'Op',
    define: {
      timestamps: false
    }
  },
  production: {
    username: process.env.PROD_DB_USERNAME,
    password: process.env.PROD_DB_PASSWORD,
    database: process.env.PROD_DB_NAME,
    host: process.env.PROD_DB_HOSTNAME,
    dialect: 'postgres',
    operatorsAliases: 'Op',
    ssl: true,
    dialectOptions: {
      ssl: true
    },
    define: {
      timestamps: false
    }
  }
};