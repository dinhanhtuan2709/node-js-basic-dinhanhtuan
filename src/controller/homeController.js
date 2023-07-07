// import { name } from "ejs";
import pool from "../configs/connectDB";
// import { emit } from "nodemon";
import multer from "multer";

// HOME 
let getHomePage = async (req, res) =>  {

    const [rows, fields] = await pool.execute('SELECT * FROM user');
    return res.render('index.ejs',{dataUser: rows})
} 

let getDetailPage = async (req, res) =>  {

    let UserCode = req.params.UserCode;
    let [user] = await pool.execute('select * from user where Code = ?', [UserCode])

    return res.send(JSON.stringify(user))
}

let createNewUser = async (req, res) =>  {
    let { NAME, EMAIL, PHONENUMBER, ADDRESS } = req.body;
    await pool.execute('insert into user(Name, Email, PhoneNumber, Address) values (?, ?, ?, ?)',[NAME,EMAIL,PHONENUMBER,ADDRESS]);
    return res.redirect('/')
}

let DeleteUser = async (req, res) =>  {
    let codeUser = req.body.codeUser;
    await pool.execute('delete from user where Code = ?', [codeUser])
    return res.redirect('/')
}

let UpdateUser = async (req, res) =>  { 
    let code = req.params.code;
    let [user] = await pool.execute('select * from user where Code = ?', [code]);
    return res.render('update.ejs', {dataUser: user[0]});
}
let getUpdate = async (req,res) =>{
    let {Code,Name,Email,PhoneNumber,Address} = req.body;
     await pool.execute('update user set Name = ?, Email = ?, PhoneNumber = ?, Address = ? where Code = ?', [Name, Email, PhoneNumber, Address,Code])
     return res.redirect('/')
}

let getUploadFilePage = async(req,res) =>{
    return res.render('uploadfile.ejs')
}


// UPLOAD SINGLE FILE || UPLOAD MULTIPLE FILES
let handleUploadFile = async(req,res) => {

        if (req.fileValidationError) {
            return res.send(req.fileValidationError);
        }
        else if (!req.file) {
            return res.send('Please select an image to upload');
        }

        // Display uploaded image for user validation
        res.send(`You have uploaded this image: <hr/><img src="/image/${req.file.filename}" width="500"><hr /><a href="/upload-file">Upload another image</a>`);
}

let handleUploadMultipleFiles = async (req, res) => {

       if (req.fileValidationError) {
            return res.send(req.fileValidationError);
        }
        else if (!req.files) {
            return res.send('Please select an image to upload');
        }

        let result = "You have uploaded these images: <hr />";
        const files = req.files;
        let index, len;

        // Loop through all the uploaded images and display them on frontend
        for (index = 0, len = files.length; index < len; ++index) {
            result += `<img src="/image/${files[index].filename}" width="300" style="margin-right: 20px;">`;
        }
        result += '<hr/><a href="/upload-file">Upload more images</a>';
        res.send(result);
}

module.exports = {
    getHomePage, getDetailPage, createNewUser, DeleteUser, UpdateUser, getUpdate, getUploadFilePage, handleUploadFile,handleUploadMultipleFiles
}