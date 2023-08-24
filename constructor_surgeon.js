// create a class- capital letter
class Surgeon {
    constructor(name, department) { //constructor (parameters)
      this.name = name; //this. -like self in Python - we say that for this constructor we take the name which is entered as a parameter
      this.department = department;
    }
  }
  
  //creating an instance of class Surgeon - with other parameters
  surgeonRomero = new Surgeon("Francisco Romero", "Cardiovascular")
  // creating an instance of class Surgeon - with other parameters
  surgeonJackson = new Surgeon ('Ruth Jackson', 'Orthopedics')
  