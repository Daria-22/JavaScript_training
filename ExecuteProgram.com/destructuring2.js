const users = [{name: 'Amir'}, {name: 'Betty'}];
const names = [];
for (const {name} of users) {
  names.push(name);
}
names;
/*
RESULT:
['Amir', 'Betty']
*/