
import express from 'express';
import conFigViewEngines from './configs/viewEngines';
import initWebRouter from "./route/web";
import initAPIRoute from './route/api';
// import connection from './configs/connectDB';

require('dotenv').config();
var morgan = require('morgan');

const app = express()
const port = process.env.PORT;

app.use((req, res, next) =>{
  console.log('>>> Run into my Middleware: ')
  console.log(req.method)
  next();
})

app.use(morgan('combined'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//setup view engine
conFigViewEngines(app);

// init web router
initWebRouter(app);

// init API router
initAPIRoute(app);

//handle 404 not found (MIDDLEWARES)
app.use((req, res) => {
  return res.render('404.ejs');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost: ${port}`)
})