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
    let Code = req.body.Code;
    let Name = req.body.Name;
    let Email = req.body.Email;
    let PhoneNumber = req.body.PhoneNumber;
    let Address = req.body.Address;
     await pool.execute('update user set Name = ?, Email = ?, PhoneNumber = ?, Address = ? where Code = ?', [Name, Email, PhoneNumber, Address,Code])
     return res.redirect('/')
}

module.exports = {
    getHomePage, getDetailPage, createNewUser, DeleteUser, UpdateUser, getUpdate
}