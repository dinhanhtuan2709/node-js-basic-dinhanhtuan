import { name } from "ejs";
import pool from "../configs/connectDB";
import { emit } from "nodemon";

let getHomePage = async (req, res) =>  {

    const [rows, fields] = await pool.execute('SELECT * FROM user');
    return res.render('index.ejs',{dataUser: rows})
} 

let getDetailPage = async (req, res) =>  {

    let UserCode = req.params.UserCode;
    let [user] = await pool.execute('select * from user where Code = ?', [UserCode])

    return res.send(JSON.stringify(user[0]))
}

let createNewUser = async (req, res) =>  {
    let { NAME, EMAIL, PHONENUMBER, ADDRESS } = req.body;
    await pool.execute('insert into user(Name, Email, PhoneNumber, Address) values (?, ?, ?, ?)',[NAME,EMAIL,PHONENUMBER,ADDRESS]);
    return res.redirect('/')
}

module.exports = {
    getHomePage, getDetailPage, createNewUser
}