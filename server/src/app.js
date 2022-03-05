const express = require("express");
const cors = require('cors')
const app = express();
const routes = require('./routes/index')

app.use(cors())

app.use(routes)

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

module.exports = app;