>
class Cat {
 constructor(name, vaccinated) {
   this.name = name;
   this.vaccinated = vaccinated;
 }

 needsVaccination() {
   return !this.vaccinated;
 }
}
[
 new Cat('Ms. Fluff', true).needsVaccination(),
 new Cat('Keanu', false).needsVaccination(),
];


/*RESULT:
[false, true]
*/
