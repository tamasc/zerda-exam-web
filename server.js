'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const validator = require('./validator.js');

const app = express();
app.use(bodyParser.json());
app.use(express.static('client'));

const urlencodedParser = bodyParser.urlencoded({
  extended: false,
});

// ***********set up DB connection *************

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "alma",
  database: "secretprojects",
});

connection.connect(function(error){
  if(error){
    console.log('error on connection to database', error.toString());
    return;
  }
  console.log('connected to database');
});


// ***********  handling requests *************

app.post('/exam', function (req, res) {
  if (!validator(req.body)) {
    var errorMessage = {
        "status": "error",
        "message": "thank you"
    };
    res.status(400).json(errorMessage);
    return;
  }
  connection.query('SELECT * FROM projects',
    function (err, rows) {
      if(err) {
        console.log(err.toString());
        connection.end();
        return;
      }
      console.log(rows);
      // var project = rows.project_name.map(function (item) {
      //   return item;
      // });
      var responseData = {
            "status": "ok",
            "projects": rows
      };
      res.status(200).json(responseData);
    });
});

module.exports = app;
