const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const http = require('http');
const mongoose = require('mongoose');
const router = require('./router');

const app = express();

mongoose.connect('mongodb://localhost/auth', {
  useNewUrlParser: true,
  useCreateIndex: true
});

app.use(express.static('dist'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(morgan('combined'));

router(app);

const port = process.env.PORT || 8080;
const server = http.createServer(app);

server.listen(port, () => console.log('Listening on port 8080'));
