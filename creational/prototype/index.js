var scout_prototype = require('./Scout_Prototype');

var alex = scout_prototype.clone();
alex.name='alex'
alex.addItemToList('slingshot');

var eve = scout_prototype.clone();
eve.name ='Eve Porcello';
eve.addItemToList('reading light');

console.log( `${alex.name}: ${alex.shoppingList}` );
console.log( `${eve.name}: ${eve.shoppingList}` );
