import connection from "../configs/connectDB";

let getHomePage = (req, res) =>  {

    let data = [];
    connection.query(
    'SELECT * FROM `user`',
    function(err, results, fields) {
        results.map((row) =>{
            data.push({
                 Code : row.Code,
                Name : row.Name,
                Email : row.Email,
                PhoneNumber : row.PhoneNumber,
                Address : row.Address
            })
           
        });
            return res.render('index.ejs', {dataUser : data, test : 'abc test string'})
    });
}

module.exports = {
    getHomePage
}