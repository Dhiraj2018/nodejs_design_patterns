var Person = require('./Person');
var PersonBuilder= require('./PersonBuilder')

// Employees
var sue = new PersonBuilder('sue').makeEmployee().makeManager(60).build();
var bill = new PersonBuilder('Bill').makeEmployee().makePartTime(20).build();
var phil = new PersonBuilder('Phil').makeEmployee().build();

// Shoppers
var charles = new PersonBuilder('Charles').hasMoney(500).hasShoppingList(['jeans', 'sunglasses']);
var tabbitha = new PersonBuilder('Tabbitha').hasMoney(1000).hasShoppingList();

console.log(JSON.stringify(sue))
console.log(JSON.stringify(bill))
console.log(JSON.stringify(phil))
console.log(JSON.stringify(charles))
console.log(JSON.stringify(tabbitha))
