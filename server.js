if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express')
const app = express()
const routes = require('./src/routes/web')
var expressEjsExtend = require("express-ejs-extend");
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();

app.use(express.static("./src/public"));
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// app.use(express.json());
// ok roi đấy
app.use(upload.array());
app.use(express.static('public'));
app.engine("ejs", expressEjsExtend);
app.set("view engine", "ejs");
app.set("views", "./src/views")

app.use(express.urlencoded({ extended: false }))

routes.initWebRouter(app);
