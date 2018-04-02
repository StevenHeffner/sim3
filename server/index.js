require('dotenv').config()
const express = require('express'),
      bodyParser = require('body-parser'),
      // session = require('express-session'),
      // passport = require('passport'),
      // Auth0Strategy = require('passport-auth0'),
      massive = ('massive'),
      con = require('./controller')
      // cors = require("cors");

const {
  SERVER_PORT,
  CONNECTION_STRING
} = process.env

const app = express()
// app.use(cors());

app.use(bodyParser.json());

massive(CONNECTION_STRING).then(db => {
  app.set('db',db)
})

app.post('/api/auth/register', con.addUser)
app.post('/api/auth/login', con.getUser)









app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} Puppers Ready To Bork`))
