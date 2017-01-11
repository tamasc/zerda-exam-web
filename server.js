'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const validator = require('./validator.js');

const app = express();
app.use(express.static('client'));

app.use(bodyParser.json());
const urlencodedParser = bodyParser.urlencoded({
  extended: false,
});

// ***********set up DB connection *************

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'alma',
  database: 'secretprojects',
});

connection.connect(function (error) {
  if (error) {
    console.log('error on connection to database', error.toString());
    return;
  }
  console.log('connected to database');
});


// ***********  handling requests *************

app.post('/exam', function (req, res) {
  if (!validator(req.body)) {
    const errorMessage = {
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
      let projects = rows.map(function (item) {
        return item.project_name;
      });
      let responseData = {
            "status": "ok",
            "projects": projects
      };
      res.status(200).json(responseData);
    });
});

module.exports = app;
