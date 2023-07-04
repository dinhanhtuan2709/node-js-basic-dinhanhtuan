//const express = require('express')

import express from 'express';
import conFigViewEngines from './configs/viewEngines';
import initWebRouter from "./route/web";

require('dotenv').config();

const app = express()
const port = process.env.PORT;

//setup view engine
conFigViewEngines(app);

// init web router
initWebRouter(app);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost: ${port}`)
})