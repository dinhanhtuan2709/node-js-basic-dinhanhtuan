import pool from "../configs/connectDB"

// GET ALL USER FUNCTION
let getAllUSer = async (req, res) =>{
    const [rows, fields] = await pool.execute('SELECT * FROM user');
    return res.status(200).json({
        data: rows,
        message: 'OK'
    })
}
// CREATE USER FUNCTION
let createNewUser = async (req, res) =>{
    let { NAME, EMAIL, PHONENUMBER, ADDRESS } = req.body;
    if (!NAME || !EMAIL || !PHONENUMBER || !ADDRESS)
    {
        return res.status(200).json({
            message: "CREATE DATA IS MISSING PARAMS"
        })
    }
    await pool.execute('insert into user(Name, Email, PhoneNumber, Address) values (?, ?, ?, ?)',[NAME,EMAIL,PHONENUMBER,ADDRESS]);
    return res.status(200).json({
        message: 'Create Successfull'
    })
}
// DELETE USER FUNCTION
let DeleteUser = async (req, res) =>  {
    let codeUser = req.params.Code;
    if (!codeUser)
    {
        return res.status(200).json({
            message: "CODE USER IS MISSING PARAMS"
        })
    }
    await pool.execute('delete from user where Code = ?', [codeUser])
    return res.status(200).json({
        message: 'Delete Successful'
    })
}
// UPDATE USER FUNCTION
let getUpdate = async (req,res) =>{
    let {CODE, NAME, EMAIL, PHONENUMBER, ADDRESS} = req.body;
    if (!NAME || !EMAIL || !PHONENUMBER || !ADDRESS || !CODE)
    {
        return res.status(200).json({
            message: "UPDATE DATA IS MISSING PARAMS"
        })
    }
     await pool.execute('update user set Name = ?, Email = ?, PhoneNumber = ?, Address = ? where Code = ?', [NAME, EMAIL, PHONENUMBER, ADDRESS, CODE])
     return res.status(200).json({
        message: 'Update Successful'
     })
}


module.exports = {
    getAllUSer, createNewUser, DeleteUser, getUpdate
}