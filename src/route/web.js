import express from "express";
import homeController from '../controller/homeController'

let router = express.Router();

const initWebRouter = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/detail/user/:UserCode',homeController.getDetailPage)
    router.post('/create-new-user',homeController.createNewUser)
    router.post('/delete/user',homeController.DeleteUser)
    router.get('/update/user/:code',homeController.UpdateUser)
    router.post('/update-user',homeController.getUpdate)
    router.get('/about', (req, res) => {
    res.send('Rat vui khi duoc lam quen. ')
    })

      return app.use('/',router)
}

export default initWebRouter;