
import express from 'express';
import conFigViewEngines from './configs/viewEngines';
import initWebRouter from "./route/web";
import initAPIRoute from './route/api';
// import connection from './configs/connectDB';

require('dotenv').config();

const app = express()
const port = process.env.PORT;


app.use(express.urlencoded({extended:true}));
app.use(express.json());

//setup view engine
conFigViewEngines(app);

// init web router
initWebRouter(app);

// init API router
initAPIRoute(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost: ${port}`)
})