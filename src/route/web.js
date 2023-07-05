import express from "express";
import homeController from '../controller/homeController'

let router = express.Router();

const initWebRouter = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/detail/user/:UserCode',homeController.getDetailPage)
    router.post('/create-new-user',homeController.createNewUser)
    router.get('/about', (req, res) => {
    res.send('Rat vui khi duoc lam quen. ')
    })

      return app.use('/',router)
}

export default initWebRouter;