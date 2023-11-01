/*Define a Cat class whose constructor takes both a name and an age. 
Store the name and age as properties on this.*/

class Cat {
  constructor(name, age)
  {
    this.name = name;
    this.age = age;
  }
}

[
  new Cat('Ms. Fluff', 4),
  new Cat('Keanu', 2),
];




/*GOAL:
[{name: 'Ms. Fluff', age: 4}, {name: 'Keanu', age: 2}]
YOURS:
[{name: 'Ms. Fluff', age: 4}, {name: 'Keanu', age: 2}]
*/


/* Use new to instantiate an array of two cats: 'Ms. Fluff' and 'Keanu'.*/
class Cat {
    constructor(name) {
      this.name = name;
    }
  }
  const cats = [new Cat('Ms. Fluff'), new Cat ('Keanu')]
  
  cats.map(cat => cat.name);

  /*
GOAL: ['Ms. Fluff', 'Keanu']
YOURS:['Ms. Fluff', 'Keanu']
  */
