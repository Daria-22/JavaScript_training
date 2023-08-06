const menu = {
   _meal: '',
  _price: 0,
  set meal(mealToCheck) {
    if (typeof mealToCheck === 'string') {
       this._meal = mealToCheck;
     }
   },
   set price(priceToCheck) {
     if (typeof priceToCheck === 'number') {
       this._price = priceToCheck;
     }
   }
 };
 
menu.meal = "breakfast"; // Add a closing double-quote and a semicolon
 menu.price = 25;         // Add a semicolon

console.log(menu);