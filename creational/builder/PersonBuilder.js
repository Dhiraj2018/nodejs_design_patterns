var Person = require('./Person');

class PersonBuilder {
    constructor(name){
        this.name = name
    }
    makeEmployee(){
        this.isEmployee= true;
        return this;
    }
    makeManager(hours =40){
        this.manager = true;
        this.hours =hours;
        return this;
    };
    makePartTime(hours){
        this.manager= false;
        this.hours = hours;
        return this
    };
    hasMoney(money){
        this.money = money;
        return this;
    }
    hasShoppingList(list =[]){
        this.shoppingList =list ;
        return this
    }
    build(){
        return new Person(this);
    }

}
module.exports = PersonBuilder;