//Schools
// create basic class with name, level and number of 
//students as a template
class School
{
constructor(name, level, numberOfStudents) 
{
this._name = name;
this._level = level;
this._numberOfStudents = numberOfStudents;
}
//create getter for the name of the scool
get name() 
{
return this._name;
}
//create getter for the level of the school
get level()
{
  return this._level;
}
//create getter for the number of students
//validation of numbers for some reason does not work
get numberOfStudents ()
{
if(this._numberOfStudents === 'number')
{return this._numberOfStudents;}
else 
{
console.log("Invalid input for the number of the students, a number must be input")
}
}
//settter of numbers of students
// validation of numbers for some reason does not work
set numberOfStudents(numberOfStudents)
{
if(typeof numberOfStudents === 'number')
{this._numberOfStudents = numberOfStudents;}
else 
{
console.log("Invalid input: numberOfStudents must be set to a Number");
}
}
//method to print the info on the school - number of sctudents and level along with the name
quickFacts() 
{
return(`${this._name} has ${this._numberOfStudents} students learning at the ${this._level} level.`)
}
//static method - WORKS ONLY FOR THE CLASS!!!
//allows to pick a sunstitute teacher
static pickSubstituteTeacher(substituteTeachers) 
{
    const randomIndex = Math.floor(Math.random() * substituteTeachers.length);
    return substituteTeachers[randomIndex];

}
}

//instance of school - primary school
//in constructor we add the property which is not present for the parent class - pickupPolicy
class Primary extends School 
{
constructor(name, numberOfStudents, pickupPolicy)
//in super we call the inherited properties - all of them - to inherit them prom the parent class
{
  super (name, "Primary", numberOfStudents);
  //this statement allows to assign the pickup policy
  this._pickupPolicy = pickupPolicy;

}

//getter for the pickup policy
get pickupPolicy ()
{
  return this._pickupPolicy;
}
}
//instance of school - middle school
class Middle extends School

{
  ///we don't need to add more properties here
  constructor(name,numberOfStudents)
  {
    //we inherit the properties and assign the level in super
    super(name, "Middle", numberOfStudents);
  }

}

class High extends School
{
  // constructor add the property which is different from parent class - sportTeams
constructor(name, numberOfStudents, sportsTeams) 
{
//super inherits parent properties, but assign "High" to the level of the school
super(name, "High", numberOfStudents);
// sport teams assigns the sport teams which were input in the constructor 
this._sportsTeams = sportsTeams;
}
get sportsTeams() 
{
    return this._sportsTeams;
}
}

const lorraineHansbury = new Primary("Lorraine Hansbury", 514, "Students must be picked up by a parent, guiardian, or a family member over the age of 13")
const WestBeachPrimary = new Primary("West Beach Primary", 300, "at 15:30 from the classroom")
console.log(WestBeachPrimary);

const GlenungaHighSchool = new High ("Glenunga International School", 1000, "basketball")
console.log(GlenungaHighSchool);

const GlenelgMiddleSchool = new Middle ("Glenelg Middle School", 900);

const alSmith = new High("Al E.Smith", 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field'])

console.log(WestBeachPrimary.quickFacts())
console.log(GlenungaHighSchool.quickFacts())
console.log(GlenelgMiddleSchool.quickFacts())
console.log(lorraineHansbury.quickFacts())
console.log("Pickup policy for this school:", lorraineHansbury.pickupPolicy)

console.log (School.pickSubstituteTeacher(['Jamal Crawford', "Lou Williams", "J.R. Smith", "James Harden", "Jason Terry", "Manu Ginobli"]));

console.log(alSmith)
console.log(alSmith.sportsTeams)






///School:
///The School class serves as the parent class and has properties like name, level, and numberOfStudents.
///It has getter and setter methods for these properties.
//////It also has a quickFacts method that displays information about the school and a pickSubstituteTeacher static method.
///Primary (subclass of School):
///The Primary class extends the School class and adds an additional property called pickupPolicy.
///It includes a getter method for pickupPolicy.
///Middle (subclass of School):
///The Middle class also extends the School class, inheriting its properties and methods.
///High (subclass of School):
///The High class extends the School class and adds an additional property called sportsTeams.
///It includes a getter method for sportsTeams.'''