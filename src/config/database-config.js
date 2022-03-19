var mysql = require('mysql');
// const { Sequelize } = require("sequelize");

// const sequelize = new Sequelize('dbatk7cq10s4f3', 'vhjudxzgcknqxg', '051c00917c21bb5efba8a772e5c82ded01da1cb9fcc5efcf4878b33b8d2e5258', {
//   host: 'ec2-52-54-167-8.compute-1.amazonaws.com',
//   dialect: 'postgres',
//   logging: false,
//   dialectOptions: {
//     ssl: {
//       require: true,
//       rejectUnauthorized: false
//     }
//   }
// })

// ===============Máy chủ===================sql304.epizy.com
// var con = mysql.createConnection({
//   host: "185.27.134.10",
//   user: "epiz_30715763",
//   password: "agXJipUu6v2",
//   database: "epiz_30715763_apiwebapp"
// });

// ===============Local===================
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "api"
});


con.connect(function (err) {
  if (err) {
    console.log("Not connect");
  } else {
    console.log("Connected!");
  }

});

module.exports = con;