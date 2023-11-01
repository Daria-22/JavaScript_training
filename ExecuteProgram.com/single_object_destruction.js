const user = {name: 'Amir', email: 'amir@example.com', age: 36};
//destruction happens here
const {name,...rest} = user;
//put destructed ibjects in one array
const nameAndRest = [name, rest];
//call to show this array
nameAndRest;

/*GOAL:
['Amir', {email: 'amir@example.com', age: 36}]
YOURS:
['Amir', {email: 'amir@example.com', age: 36}]*/
