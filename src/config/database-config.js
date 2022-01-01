var mysql = require('mysql');
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('dbatk7cq10s4f3', 'vhjudxzgcknqxg', '051c00917c21bb5efba8a772e5c82ded01da1cb9fcc5efcf4878b33b8d2e5258', {
  host: 'ec2-52-54-167-8.compute-1.amazonaws.com',
  dialect: 'postgres',
  logging: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
})
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "api"
});
//
con.connect(function (err) {
  if (err) {
    console.log("not connect");
  } else {
    console.log("Connected!");
  }

});

module.exports = con;