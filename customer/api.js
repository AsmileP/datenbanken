const customer = require ('./controller');
module.exports = app => {
    app.post("/customer", customer.create);
    app.get('/customers', customer.findAll);
    app.put('7customer/:id', customer.update);
}