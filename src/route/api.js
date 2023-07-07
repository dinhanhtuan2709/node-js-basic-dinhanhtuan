import express from "express";
import APIController from '../controller/APIController'

let router = express.Router();

const initAPIRoute = (app) => {
    router.get('/users', APIController.getAllUSer); // method get => read data
    router.post('/create-user', APIController.createNewUser)// method post => create data
    router.delete('/delete-user/:Code', APIController.DeleteUser)// method delete => delete data
    router.put('/update-user', APIController.getUpdate)// method put => update data
    return app.use('/api/v1',router)
}

export default initAPIRoute;