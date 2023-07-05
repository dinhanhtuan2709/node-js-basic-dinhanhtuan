import pool from "../configs/connectDB";

let getHomePage = async (req, res) =>  {

    const [rows, fields] = await pool.execute('SELECT * FROM user');
    return res.render('index.ejs',{dataUser: rows})
} 

let getDetailPage = async (req, res) =>  {

    let UserCode = req.params.UserCode;
    let [user] = await pool.execute('select * from user where Code = ?', [UserCode])

    return res.send(JSON.stringify(user[0]))
}

module.exports = {
    getHomePage, getDetailPage
}