import express from "express";
import homeController from '../controller/homeController';
import multer from "multer";
import path from 'path';
var appRoot = require('app-root-path');
let router = express.Router();

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, appRoot +  '/src/public/image/');
    },

    // By default, multer removes file extensions so let's add them back
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const imageFilter = function(req, file, cb) {
    // Accept images only
    if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
        req.fileValidationError = 'Only image files are allowed!';
        return cb(new Error('Only image files are allowed!'), false);
    }
    cb(null, true);
};

let upload = multer({storage: storage, fileFilter: imageFilter});

const initWebRouter = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/detail/user/:UserCode',homeController.getDetailPage)
    router.post('/create-new-user',homeController.createNewUser)
    router.post('/delete/user',homeController.DeleteUser)
    router.get('/update/user/:code',homeController.UpdateUser)
    router.post('/update-user',homeController.getUpdate)

    router.get('/upload-file', homeController.getUploadFilePage);
    router.post('/upload-single-image',upload.single('profile_pic'), homeController.handleUploadFiles);


    router.get('/about', (req, res) => {
      res.send('Rat vui khi duoc lam quen. ')
    })

      return app.use('/',router)
}

export default initWebRouter;