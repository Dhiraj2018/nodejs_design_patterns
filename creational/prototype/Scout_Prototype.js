const Shopper = require('./Shopper');
const Scout_Prototype = new Shopper();
Scout_Prototype.addItemToList('camping knife');
Scout_Prototype.addItemToList('tent');
Scout_Prototype.addItemToList('backpack');
Scout_Prototype.addItemToList('map');

module.exports = Scout_Prototype;