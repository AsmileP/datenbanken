const Customer = require('.model');
const Validation = require('../ValidationService');
const HTTP_STATUS = require('..config/httpcodes.config');

const customerOBj = new Customer();

function create(req, res) {
    if (!req.body){
        res.status(HTTP_STATUS.BAD_ReQUEST).send({
            message:"darf nicht leer sein"
        })
    }

let data = {
    "email": req.body.email,
    "name": req.body.name,
    "strasse": req.body.strasse,
    "plz": req.body.plz,
    "ort": req.body.ort,
    "datum": req.body.datum,
    "bemerkung": req.body.bemerkung


}
console.log('Following dara parsed from body...');
console.log(data;)
let result = Validation.validateContact(data);
if (result.isNotValid) {
    res.status(HTTP_STATUS.NOT_ACCEPTABLE).send(result.msg);
} else {
    customerOBj.create(data, (err,result) =>{
        if (err){
            res.status(HTTP_STATUS.SERVER_ERROR).send({
                message: err.message || "etwas ist schief gelaufen."
            })
        } else {
            res.status(HTTP_STATUS.SUCCESFUL_CREATED).send(result);
        }
    })
}
}