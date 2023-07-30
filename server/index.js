const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');
const cors = require('cors');

require('dotenv').config();
const controller = require('./controller.js');

const path = require("path");
const app = express();

//middleware
app.use(cors());
app.use(express.static('client/dist'));
app.use(express.json());

app.listen(Number(process.env.PORT),()=>{
  console.log(`listening on port ${process.env.PORT}`);
})
