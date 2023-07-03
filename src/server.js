//const express = require('express')

import express from 'express';
import conFigViewEngines from './configs/viewEngines';

const app = express()
const port = 2709

conFigViewEngines(app);

app.get('/', function(req, res) {
    res.render('index.ejs')
  });

app.get('/about', (req, res) => {
    res.send('Rat vui khi duoc lam quen. ')
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost: ${port}`)
})