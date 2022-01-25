const sql = require('../db');

module.exports =  class Customer {
    create(newCustomer, cbResult) {
        sql.query('INSERT INTO customer SET ?', newCustomer, (err,result) =>{
            if (err){
                console.log('error: ', err);
                cbResult(err,null);
                return;
            }
            console.log('created contact:', {id:result.insertID, ...newCustomer})
            cbResult(null,{
                msg: "Neue registrierung", id: result.insertID, ...newCustomer
            });
        })
    }
}