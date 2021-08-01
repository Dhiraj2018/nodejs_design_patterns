var Shopper = require('./Shopper');
var Employee = require('./Employee');

var userFactory = (name, money =0, type , employer)=>{
    switch(type) {
        case 'employee':
            return new Employee (name, money, employer);
        default:
            return new Shopper( name, money)
    }
}

module.exports= userFactory